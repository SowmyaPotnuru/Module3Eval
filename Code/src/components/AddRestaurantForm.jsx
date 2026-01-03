import {useContext, useState} from "react";
import { RestaurantContext } from "../context/RestaurantContext";

const AddRestaurantForm = () => {
  const {addRestuarant} = useContext(RestaurantContext);
  const [form, setForm] = useState({
    restaurantName: "",
    address: "",
    type: "Rajasthani",
    parkinglot: "true",
    image: "https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg"
  });
  const handleAdd = () => {
    if(!form.restaurantName || !form.address) return alert("Fill all fields");
    AddRestaurantForm({
      ...form,
      restaurantID: Date.now(),
      parkinglot: form.parkinglot === "true"
    });

    alert("Restaurant Added Successfully");
    setForm({...form, restaurantName: "", address: ""});
  };

  return(
    <div>
      <h3>Add restaurant</h3>
      <input placeholder="Name" value={form.restaurantName} onChange={e => setForm({...form, restaurantName:e.target.value})} />
      <input placeholder="Address" value={form.address} onChange={e => setForm({...form, address:e.target.value})} />
      <select onChange={e => setForm({...form, type:e.target.value})}>
        <option>Rajasthan</option><option>Gujarati</option><option>Mughlai</option>
        <option>Jain</option><option>Thai</option><option>North Indian</option><option>South Indian</option>
      </select>
      <select onChange={e=> setForm({...form,parkinglot:e.target.value})}>
        <option value="true">Parking Available</option>
        <option value="false">No Parking</option>
      </select>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddRestaurantForm;