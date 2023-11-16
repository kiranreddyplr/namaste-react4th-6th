import React, { useEffect, useState } from 'react';
import RestuarentCard from "./RestaurantCard";
//import Shimmer from './Shimmer';
//import resList from '../utils/mockData';




// Normal Js Variable
//let listOfRestaurent = []n

// let listOfRestaurent= [
//   {
//     id: "1",
//     name: "KFC",
//     cloudinaryImageId: "qrqhfouxoeqt8aflj2yt",
//     locality: "ITPL Main Road",
//     areaName: "Whitefield",
//     costForTwo: "₹300 for two",
//     avgRating: 4.2,
//   }
//   ,
//   {
//     id: "2",
//     name: "Meghana",
//     cloudinaryImageId: "u3w6zgapfaun4zyt5pxn",
//     locality: "ITPL Main Road",
//     areaName: "Whitefield",
//     costForTwo: "₹300 for two",
//     avgRating: 4.42,
//   },
//   {
//     id: "3",
//     name: "Hyderbad house",
//     cloudinaryImageId: "qrqhfouxoeqt8aflj2yt",
//     locality: "ITPL Main Road",
//     areaName: "Whitefield",
//     costForTwo: "₹300 for two",
//     avgRating: 4.62,
//   },
//   {
//     id: "4",
//     name: "trinetra",
//     cloudinaryImageId: "thzhbierhb2qxhqsl0bo",
//     locality: "ITPL Main Road",
//     areaName: "Whitefield",
//     costForTwo: "₹300 for two",
//     avgRating: 3.2,
//   },
//   {
//     id: "5",
//     name: "KFC",
//     cloudinaryImageId: "jwzxv4hmmnyuice4pe8x",
//     locality: "ITPL Main Road",
//     areaName: "Whitefield",
//     costForTwo: "₹300 for two",
//     avgRating: 4.2,
//   },
//   {
//     id: "6",
//     name: "KFC",
//     cloudinaryImageId: "qrqhfouxoeqt8aflj2yt",
//     locality: "ITPL Main Road",
//     areaName: "Whitefield",
//     costForTwo: "₹300 for two",
//     avgRating: 4.2,
//   }
// ];


const Body = () => {
      // Local state Variable -Super Powerful variable
    let [listOfRestaurent, setlistOfRestarent] = useState([]);

    useEffect(()=>{
      fetchData();
    },[]);

    const fetchData= async() => {
      const data = await fetch(
        "https://swapi.dev/api/people"
        );

      const json = await data.json();      
      //console.log(json.results[3].name);
      //Optional chaining mechanisam
      setlistOfRestarent(json.results);
     
    };

    // conditional rendering
    // if(listOfRestaurent.length===0){
    //     return <Shimmer/>
    // }
    return (
        <div className='body'>
          <div className='filter'>
            <button className="filter-btn" 
              onClick={() =>{
                const filteredList = listOfRestaurent.filter(
                  (res) => res.data.avgRating > 4
                );
                setlistOfRestarent(filteredList);
              }}
              
            >Top Rated Restaurant</button>
          </div>
          <div className="res-container">

           {listOfRestaurent.map((restaurants) => (
           <RestuarentCard key={restaurants.id} resData={restaurants}/>
          ) )}  
              
          </div>
      </div>
    )
  }

 

  export default Body;