import React from "react";
import {ITour} from "./models/ITour";

interface IProps{
    tour : ITour
}

let TourCard: React.FC<IProps> = (props) => {
  return (
    <>
      <div className="card shadow-lg">
        <img src={props.tour.imageURL}></img>
        <div className="card-body">
          <p className="h4 text-success">{props.tour.name}</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?</p>
          <button className="btn btn-dark">Read More</button>
        </div>
      </div>
    </>
  );
};

export default TourCard;
