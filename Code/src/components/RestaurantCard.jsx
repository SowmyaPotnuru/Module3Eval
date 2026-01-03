import { useContext } from "react";
import { RestaurantContext } from "../context/RestaurantContext";
import { useNavigate } from "react-router-dom";

const RestaurantCard = ({data, isAdmin}) => {
  const {deleteRestaurant} = useContext(RestaurantContext);
  const navigate = useNavigate();

  return(
    <div>
      <img src={data.image} width="150" />
      <h4>{data.restaurantName}</h4>
      <p>{data.address}</p>
      <p>{data.type}</p>
      <p>{data.parkinglot ? "Parking" : "No Parking"}</p>
      {isAdmin && (
        <>
        <button onClick={() => navigate(`/admin/restaurants/update/${data.restaurantId}`)}>Update</button>
        <button onClick={() => window.confirm("Delete?") && deleteRestaurant(data.restaurantId)}>Delete</button>
        </>
      )}
    </div>
  );
};

export default RestaurantCard;
