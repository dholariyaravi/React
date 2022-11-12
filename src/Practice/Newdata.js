import React, { useState } from 'react'
import './Styles.css'; 
import reviews from "./map.js";



     export default function Newdata() {
        const [index,setindex]= useState(0);
      

        const next = ()  =>{
           index >= reviews.length -1 ? setindex(0) :setindex( index+1);
        };
        const pre = ()  => {
           index <= 0 ? setindex (reviews.length -1) : setindex (index -1);
        };
        
        // total 5 value che  jayre 0 hoy yare 


  return (
    <>
    <article class="review">
          <div class="img-container">
            <img src={reviews[index].img} id="person-img" alt="" />
          </div>
          <h4 id="author">${reviews[index].name}</h4>
          <p id="job"> ${reviews[index].job}  ux designer</p>
          <p id="info">
            ${reviews[index].text} 
        
          </p>
          {/* <!-- prev next buttons--> */}
          <div class="button-container">
            <button class="prev-btn" onClick={pre}>
            <i class='fa fa-chevron-left' style={{color:"red"}}></i>
            </button>

            <button class="next-btn" onClick={next}>
            <i class='fa fa-chevron-right' style={{color:"red"}}></i> 
            </button>
          </div>
          {/* <!-- random button --> */}
          <button class="random-btn">surprise me</button>
        </article>
    </>
  );
}
