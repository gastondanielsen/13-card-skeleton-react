import React from "react";
import "./card.css";

const Card = () => {
  return (
    <div className="cards">
      
      <div className="card">
        <div className="image">
          <img src="https://via.placeholder.com/300x200" alt="" />
        </div>
        <div className="content">
          <h2>Bienvenidos</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>

      <div className="card loading">
        <div className="image">
          <img src="" alt="" />
        </div>
        <div className="content">
          <h2></h2>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Card;
