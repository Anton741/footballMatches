import React from "react"
import { createContext, useContext, useState } from 'react';
import { fetchCalendar } from '../../services/http.service';

const calendarContext = createContext();

export const CalendarProvider = ({ children }) => {
  const [calendar, setCalendar] = useState([]);
  const [totalCount, setTotalCount] = useState(10);

  async function getCalendar(offset) {
    const data = await fetchCalendar(offset);
    if (data.items) {
      setTotalCount(data.total);
      setCalendar((prev) => [...prev, ...data.items]);
    } else {
      setCalendar([]);
    }
  }
  return (
    <calendarContext.Provider value={{ calendar, getCalendar, totalCount }}>
      {children}
    </calendarContext.Provider>
  );
};
export const useCalendar = () => {
  return useContext(calendarContext);
};
