import { useState } from "react"; // this is a hook

const ANIMALS = ["Bird", "Cat", "Dog", "Rabbit", "Reptile"];

const SearchParams = () => {
  // const location = "Gto. Mexico";
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const breeds = ["stray", "weird", "javascript"];
  
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
{/* new drop down menu */}
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
            onBlur={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
          >
            <option />
            {ANIMALS.map((animal) => {
              return (
                <option key={animal} value={animal}>
                  {animal}
                </option>
              );
            })}
          </select>
        </label>
{/* Breed dropdown menu */}
        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            value={breed}
            onChange={(e) => {
              setBreed(e.target.value);
            }}
            onBlur={(e) => {
              setBreed(e.target.value);
            }}
          >
            <option />
            {breeds.map((allBreed) => {
              return (
                <option key={allBreed} value={allBreed}>
                  {allBreed}
                </option>
              );
            })}
          </select>
        </label>
        
        <button>Submit</button>
      </form>
    </div>
  );
};
export default SearchParams;
