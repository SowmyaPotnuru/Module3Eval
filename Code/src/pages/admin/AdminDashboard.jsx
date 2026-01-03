import { useContext } from "react";
import { RestaurantContext } from "../../context/RestaurantContext";
import AddRestaurantForm from "../../components/AddRestaurantForm";
import RestaurantCard from "../../components/RestaurantCard";

const AdminDashboard = () => {
  const {restaurants} = useContext(RestaurantContext);

  return(
    <div style={{display: "flex"}}>
      <AddRestaurantForm />
      <div>
        {restaurants.map( r => (
          <RestaurantCard key={r.restaurantID} data={r} isAdmin />
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;