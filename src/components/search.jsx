const Search = ({onHandleSearch, value}) => {
        return (
        <form className="input-group">
                <input
                type="text"
                id="search"
                className="form-control rounded"
                placeholder="Search"
                value={value}
                onChange={(e) => onHandleSearch(e)}
                />
                <input type="submit" value="Search" className="btn btn-outline-secondary shadow-none"/>
                </form>
        );
}
export default Search;
