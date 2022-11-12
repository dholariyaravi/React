import React from 'react'
import './Data12.css';
import menu from './Jsxa';

import p from "./images/item-1.jpeg";


export default function Newdata1() {

    
  return (
    <>
    <section class="menu">
      {/* <!-- title --> */}
      <div class="title">
        <h2>our menu</h2>
        <div class="underline"></div>
      </div>
      {/* <!-- filter buttons --> */}
      <div class="btn-container">
         <button type="button" class="filter-btn" data-id="all">all</button>
        <button type="button" class="filter-btn" data-id="breakfast">
          breakfast
        </button>
        <button type="button" class="filter-btn" data-id="lunch">lunch</button>
        <button type="button" class="filter-btn" data-id="shakes">
          shakes
        </button> 
      </div>
      {/* <!-- menu items --> */}
      <div class="section-center">
        {/* <!-- single item --> */}

     {menu.map((value)=> {

      return (
        <article class="menu-item">
        <img src={p} alt="menu item" class="photo" />
        <div class="item-info">
          <header>
            <h4>{value.title}</h4>
            <h4>{value.price} $15</h4>
          </header>
          <p>
            {value.desc}
          </p>
        </div>
      </article>
      );
     })}
     
         

        <article class="menu-item">
          <img src="./menu-item.jpeg" alt="menu item" class="photo" />
          <div class="item-info">
            <header>
              <h4>buttermilk pancakes</h4>
              <h4 class="price">$15</h4>
            </header>
            <p class="item-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore
              laboriosam excepturi! Quo, officia.
            </p>
          </div>
        </article>
        {/* <!-- end of single item --> */}
        {/* <!-- single item --> */}
        <article class="menu-item">
          <img src="./menu-item.jpeg" alt="menu item" class="photo" />
          <div class="item-info">
            <header>
              <h4>buttermilk pancakes</h4>
              <h4 class="price">$15</h4>
            </header>
            <p class="item-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore
              laboriosam excepturi! Quo, officia.
            </p>
          </div>
        </article>
        {/* <!-- end of single item --> */}
        {/* <!-- single item --> */}
        <article class="menu-item">
          <img src="./menu-item.jpeg" alt="menu item" class="photo" />
          <div class="item-info">
            <header>
              <h4>buttermilk pancakes</h4>
              <h4 class="price">$15</h4>
            </header>
            <p class="item-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore
              laboriosam excepturi! Quo, officia.
            </p>
          </div>
        </article>
        {/* <!-- end of single item --> */}
      </div>
    </section>
    </>
  );
}
