import { CDN_URL } from "../utils/constants";
const styleCard = {
    backgroundColor: "#f0f0f0",
 };
const Restaurantcard = (props) => {
    const { resData } = props;
    return (
       <div className="res-card" style={styleCard}>
          {/* <img
             className="res-logo"
             alt="res-logo"
             src={
               {CDN_URL} +
                resData.data.cloudinaryImageId
             }
          /> */}
          <h3>{resData.data.name}</h3>
          <h4>{resData.data.cuisines.join(", ")}</h4>
          <h4>{resData.data.avgRating || "N/A"} stars</h4>
          <h4>₹{resData.data.costForTwo / 100} for two</h4>
          <h4>{resData.data.deliveryTime} minutes</h4>
       </div>
    );
 };
export default Restaurantcard 