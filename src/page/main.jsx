import {useCalendar} from '../components/context/useCalendar'
import { useEffect, useState } from 'react';
import MatchCard from '../components/matchCard';
import Search from '../components/search';
import { searchFilter } from '../components/utils/searchFilter';


const Main = () => {
  const { calendar, getCalendar, totalCount } = useCalendar();
  const [searchValue, setSearchValue] = useState('');
  const [request, setRequest] = useState(true);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (request) {
      getCalendar(offset);
      setOffset((prev) => prev + 10);
      setRequest(false);
    }
  }, [request]);

  useEffect(() => {
    document.addEventListener('scroll', (e) => scrollHandler(e));
    return function () {
      document.removeEventListener('scroll', (e) => scrollHandler(e));
    };
  }, []);

  function scrollHandler(e) {
    if (
      window.innerHeight + e.target.documentElement.scrollTop ===
        e.target.documentElement.scrollHeight &&
      totalCount > calendar.length
    ) {
      setRequest(true);
    }
  }
  function handleSearch(e) {
    setSearchValue(e.target.value);
  }

  if (calendar.length > 0) {
    const filtretedMatch = searchValue.length > 0 ?searchFilter(calendar, searchValue): calendar;
    return (
      <div className="container-md mt-5">
        <Search onHandleSearch={handleSearch} value={searchValue} />
        <div>
          {filtretedMatch.map((item) => {
            return (
              <>
                <MatchCard card={item} />
              </>
            );
          })}
        </div>
      </div>
    );
        }
  return <div className="loader"></div>;
}

export default Main;
