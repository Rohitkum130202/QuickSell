import React from "react";
import "./page.css";
import { GrAdd } from "react-icons/gr";
import { SlOptions } from "react-icons/sl";
import { MdCancel, MdRadioButtonUnchecked } from "react-icons/md";
import { CgTimelapse } from "react-icons/cg";
import { BsExclamationLg } from "react-icons/bs";
import Card from "../components/Card";
import {
  PiCellSignalHighBold,
  PiCellSignalMediumBold,
  PiCellSignalLowBold,
} from "react-icons/pi";

const Priority = () => {
  
  return (
    <div className="page-container">
      <div className="page-container-second">
        <div className="page-container-head">
          <div className="page-container-subhead">
            <div className="page-container-group1">
              <div className="page-container-item">
                <SlOptions />
              </div>
              <div className="page-container-item">No Priority</div>
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
          {/* <Card />
          <Card />
          <Card /> */}
        </div>

        <div className="page-container-head">
          <div className="page-container-subhead">
            <div className="page-container-group1">
              <div className="page-container-item">⚠️</div>
              <div className="page-container-item">Urgent</div>
              <div className="page-container-item">3</div>
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
          {/* <Card />
          <Card />
          <Card /> */}
        </div>

        <div className="page-container-head">
          <div className="page-container-subhead">
            <div className="page-container-group1">
              <div className="page-container-item">
                <PiCellSignalHighBold />
              </div>
              <div className="page-container-item">High</div>
              <div className="page-container-item">4</div>
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
          {/* <Card />
          <Card />
          <Card /> */}
        </div>

        <div className="page-container-head">
          <div className="page-container-subhead">
            <div className="page-container-group1">
              <div className="page-container-item">
                <PiCellSignalMediumBold />
              </div>
              <div className="page-container-item">Medium</div>
              <div className="page-container-item">1</div>
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
          {/* <Card />
          <Card />
          <Card /> */}
        </div>

        <div className="page-container-head">
          <div className="page-container-subhead">
            <div className="page-container-group1">
              <div className="page-container-item">
                <PiCellSignalLowBold />
              </div>
              <div className="page-container-item">Low</div>
              <div className="page-container-item">6</div>
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
          {/* <Card />
          <Card />
          <Card /> */}
        </div>
      </div>
    </div>
  );
};

export default Priority;
