import { useState } from "react"; // this is a hook

const SearchParams = () => {
  // const location = "Gto. Mexico";
  const [location, setLocation] = useState("");
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input id="location" placeholder="Location" />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};
export default SearchParams;
