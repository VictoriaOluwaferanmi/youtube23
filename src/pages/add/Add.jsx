import React from "react";
import "./Add.scss";

const Add = () => {
  return (
    <div className="add">
      <div className="container">
        <h1>Add Your Business</h1>
        <div className="sections">
          <div className="info">
            <label htmlFor="">Business Name</label>
            <input
              type="text"
              placeholder="Name of your registered business "
            />
            <label htmlFor="">Category</label>
            <select name="cats" id="cats">
            <option value="cake_pastries">Cake and Pastries</option>
                <option value="photography">Photography & Videography</option>
                <option value="decoration">Decoration</option>
                <option value="makeup">Makeup</option>
                <option value="clothing">Clothing</option>
                <option value="event_planner">Event Planner</option>
                <option value="mc">MC</option>
                <option value="dj">DJ</option>
                <option value="band">Band</option>
                <option value="graphics_designer"> Graphics design</option>
            </select>
            <label htmlFor="">Cover Image</label>
            <input type="file" />
            <label htmlFor="">Upload Images (Past works)</label>
            <input type="file" multiple />
            <label htmlFor="">Description</label>
            <textarea name="" id="" placeholder="Brief descriptions to introduce your service to customers" cols="0" rows="16"></textarea>
            <button>Submit</button>
          </div>
          <div className="details">
            <label htmlFor="">Location</label>
            <input type="text" placeholder="Enter Location" />
            <label htmlFor="">Short Description</label>
            <textarea name="" id="" placeholder="Short description of your service" cols="30" rows="10"></textarea>
            <label htmlFor="">Delivery Time (e.g. 3 days)</label>
            <input type="number" />
            <label htmlFor="">Budget Range</label>
            <input type="number" />
            <label htmlFor="">Deliverables</label>
            <input type="text" placeholder="deliverable 1" />
            <input type="text" placeholder="deliverable 2" />
            <input type="text" placeholder="deliverable 3" />
            <input type="text" placeholder="deliverable 4" />
            <label htmlFor="">Price</label>
            <input type="number" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
