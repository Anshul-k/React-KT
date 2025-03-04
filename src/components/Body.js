import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";

const Body = () => {
  // State Variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filtereListOfrestaurants, setFilteredListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = () => {
    const filteredList = listOfRestaurants.filter((res) =>
      res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredListOfRestaurants(filteredList);
  };

  //  Learn more about Promises and Async/await
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.97530&lng=77.59100&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return (
    <div className="body">
      <div className="search-container">
        <div className="search">
          <input
            type="text"
            name="searchbar"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={() => handleSearch()}>Search</button>
        </div>
        <button
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res?.info?.avgRating >= 4.5
            );
            setListOfRestaurants(filteredList);
          }}
          className="top-rated"
        >
          Top Restaurants
        </button>
      </div>
      <div className="res-container">
        {filtereListOfrestaurants.map((res) => (
          <div key={res?.info?.id}>
            <RestaurantCard resData={res} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;

// Load -> API -> Data -> Render UI

// Load -> Render UI -> API -> Data - re-Render UI
