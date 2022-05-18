const SearchParams = () => {
  const location = "Gto. Mexico";
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input id="location" value={location} placeholder="Location"/>
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}
export default SearchParams;