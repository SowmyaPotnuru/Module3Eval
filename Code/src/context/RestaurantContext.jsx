import { createContext, useEffect, useState } from "react";

export const RestaurantContext = createContext();

export const RestaurantProvider = ({children}) => {
  const [resturants, setRestaurants] = useState(
    JSON.parse(localStorage.getItem("evalData")) || []
  );
  useEffect(() => {
    localStorage.setItem("evalData",JSON.stringify(restaurants));
  },[resturants]);

  const addRestaurant = (data) => {
    setRestaurants([...resturants, data]);
  };

  const updateRestaurant = (id, updated) => {
    setRestaurants(
      resturants.map(r => r.resturantID === id ? updated : r)
    );
  };

  const deleteRestaurant = (id) => {
    setRestaurants(resturants.filter( r=> r.resturantID !== id));
  };

  return(
    <RestaurantContext.Provider value={{resturants, addRestaurant, updateRestaurant, deleteRestaurant}}>
      {children}
    </RestaurantContext.Provider>
  );
};