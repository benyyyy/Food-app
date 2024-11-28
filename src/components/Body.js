import Restaurantcard from "./Restaurantcard";
import resObj from "../utils/mockdata";
import { useState } from "react";



export default  Body = () => {
const [listOfRestaurant,setlistOfRestaurant]=useState(resObj)

    return (
       <div className="body">
       <div className="filter">
          <button onClick={
          ()=>{
            const filteredlist=listOfRestaurant.filter((res)=>
                res.data.avgRating>4
            )
            setlistOfRestaurant(filteredlist)
          }
          } className="filter-btn">Top Rated Restaurant </button>
          </div>
          <div className="res-container">
             {listOfRestaurant.map((e) => (
                <Restaurantcard key={e.data.id} resData={e} />
             ))}
          </div>
       </div>
    );
 };

