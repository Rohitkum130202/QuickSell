import React from "react";
import "./Card.css";
import { PiCircleDuotone } from "react-icons/pi";
import {FaUserAlt} from "react-icons/fa";

const Card = ({data}) => {
  return (
    <div className="card-container">
      <div className="card-subcontainer">
        <div className="card-text1">{data.id}</div>
        <div className="card-text2">
          {data.title}
        </div>
        <div className="card-text-icon">
          <div>
            <PiCircleDuotone />
          </div>
          <div>{data.tag}</div>
        </div>
      </div>
      <div><FaUserAlt /></div>
      {/* <div className="card-profile"></div> */}
    </div>
  );
};

export default Card;
