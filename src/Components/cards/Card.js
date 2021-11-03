import React from "react";
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import {FaRegStar, FaStar} from "react-icons/fa";
import './style.css'



let Card = () => {
  // let history = useHistory();
 let [cards, setCards]= useState([])
 useEffect(() => {
  fetchData();
 })


 let fetchData = async ()=> {
   let data = await fetch("https://api.pokemontcg.io/v2/cards?pageSize=10")
   let res = await data.json()
   let findId = cards?.find((el) => el.id == cards.data.id);
   setCards(findId);
 }

  return (
    <div className="card">
        
      <h1>{cards?.name}</h1>
      <img src={cards?.images?.small} alt={cards?.name}/>
      <FaRegStar className="fav-card"/>
    </div>
  );
};

export default Card;
