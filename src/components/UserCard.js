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

const UserCard = () => {
  return (
    <div className="page-container-head">
      <div className="page-container-subhead">
        <div className="page-container-group1">
          <div className="page-container-item">
            <FaUserAlt />
          </div>
          <div className="page-container-item">Akash</div>
          <div className="page-container-item">2</div>
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
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default UserCard;
