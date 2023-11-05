import React from "react";
import "../pages/page.css";
import { GrAdd } from "react-icons/gr";
import { SlOptions } from "react-icons/sl";
import { MdCancel, MdRadioButtonUnchecked } from "react-icons/md";
import { CgTimelapse } from "react-icons/cg";
import { BsExclamationLg } from "react-icons/bs";
import Card from "../components/Card";
import { TbUserCircle } from "react-icons/tb";
import { FaUserAlt } from "react-icons/fa";

const UserCard = ({ userData }) => {
  return (
    <div className="page-container-head">
      <div className="page-container-subhead">
        <div className="page-container-group1">
          <div className="page-container-item">
            <FaUserAlt />
          </div>
          <div className="page-container-item">{userData.name}</div>
          <div className="page-container-item">{userData.data.length}</div>
        </div>
        <div className="page-container-group2">
          <div className="page-container-item">
            <GrAdd />
          </div>
          <div className="page-container-item">
            <SlOptions />
          </div>
        </div>
      </div>
      {userData.data.map((item, index) => {
        return <Card key={index} data={item} />;
      })}
    </div>
  );
};

export default UserCard;
