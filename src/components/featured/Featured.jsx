import React from "react";
import "./Featured.scss";

function Featured() {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
           Discover The Best  Service Provider for Your Event
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="" />
              <input type="text" placeholder='Choose Categories' />
            </div>
            <select>
                <option value="" disabled selected>
                  Categories
                </option>
                <option value="cake_pastries">Cake and Pastries</option>
                <option value="photography">Photography & Videography</option>
                <option value="decoration">Decoration</option>
                <option value="makeup">Makeup</option>
                <option value="clothing">Clothing</option>
                <option value="event_planner">Event Planner</option>
                <option value="mc">MC</option>
                <option value="dj">DJ</option>
                <option value="band">Band</option>
                <option value="graphics_designer"> Graphics designer</option>
                <option value="graphics_designer"> Hotels</option>

              </select>

            <button>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;

