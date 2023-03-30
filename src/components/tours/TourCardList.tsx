import React, { useState } from "react";
import cardImage1 from "../../Assets/img/Temple1.jpg";
import cardImage2 from "../../Assets/img/Temple2.jpg";
import cardImage3 from "../../Assets/img/Temple3.jpg";
import cardImage4 from "../../Assets/img/Temple4.jpg";
import { ITour } from "./models/ITour";
import TourCard from "./TourCard";

const TourCardList: React.FC = () => {
  const [tours, setTours] = useState<ITour[]>([
    {
      id: "BA001",
      imageURL: cardImage1,
      name: "India",
    },

    {
      id: "BA002",
      imageURL: cardImage2,
      name: "South Korea",
    },

    {
      id: "BA003",
      imageURL: cardImage3,
      name: "Indonesia",
    },

    {
      id: "BA004",
      imageURL: cardImage4,
      name: "Japan",
    },
  ]);
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <p className="h3 text-success">Tour Cards</p>
          <p className="fst-italic">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
            non quis exercitationem culpa nesciunt nihil aut nostrum explicabo
            reprehenderit optio amet ab temporibus asperiores quasi cupiditate.
            Voluptatum ducimus voluptates voluptas?
          </p>
        </div>
      </div>

      <div className="container mt-3">
        <div className="row">
          {
            tours && tours.map ((tour,index) => {
               return (
                <div key={tour.id} className="col-sm-3">
                 <TourCard tour={tour}/>
                 </div>
               )
            })
          }
        </div>
      </div>
    </>
  );
};

export default TourCardList;
