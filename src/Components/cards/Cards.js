import React, {useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { FaRegStar, FaStar } from "react-icons/fa";
import "./style.css";

let Cards = () => {
  let history = useHistory();
 let [cards, setCards]= useState([])
 useEffect(() => {
  fetchData();
 })


 let fetchData = async ()=> {
   let data = await fetch("https://api.pokemontcg.io/v2/cards?pageSize=10")
   let res = await data.json()
   setCards(res.data);
 }

  let go = (id) => {
    history.push(`/card/${id}`);
    console.log(id);
  };

  let addFav = (id) => {
      
      if (id == false) {
          console.log("hi");
        } else {
            console.log("no");
        
      }
   
  };

  return (
    <div className="cards">
      {cards.map((item) => {
        return (
          <div>
            <h1>{item.name}</h1>
            <img
              src={item.images.small}
              onClick={() => {
                go(item.id);
              }}
            />
            <FaRegStar
              className="fav-card"
              onClick={() => {
                addFav(item.id);
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
