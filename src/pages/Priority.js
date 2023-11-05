import React, { useEffect, useState } from "react";
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

const Priority = ({ data, order }) => {
  const [pData, setPData] = useState([
    {
      priority: "No priority",
      num: 0,
      data: [],
    },
    {
      priority: "Low",
      num: 1,
      data: [],
    },
    {
      priority: "Medium",
      num: 2,
      data: [],
    },
    {
      priority: "High",
      num: 3,
      data: [],
    },
    {
      priority: "Urgent",
      num: 4,
      data: [],
    },
  ]);

  useEffect(() => {
    const filtedData = () => {
      const fData = [
        {
          priority: "No priority",
          num: 0,
          data: [],
        },
        {
          priority: "Low",
          num: 1,
          data: [],
        },
        {
          priority: "Medium",
          num: 2,
          data: [],
        },
        {
          priority: "High",
          num: 3,
          data: [],
        },
        {
          priority: "Urgent",
          num: 4,
          data: [],
        },
      ];

      data.tickets.forEach((ticket) => {
        const { status, id, title, tag, priority } = ticket;
        const foundIndex = fData.findIndex((item) => item.num === priority);
        if (foundIndex !== -1) {
          fData[foundIndex].data.push({ id, title, tag: tag[0], priority });
        }
      });

      fData.forEach((item) => {
        item.data.sort((a, b) => (a.title > b.title ? 1 : -1));
      });
      setPData(fData);
    };

    filtedData();
  }, [order]);

  return (
    <div className="page-container">
      <div className="page-container-second">
        <div className="page-container-head">
          <div className="page-container-subhead">
            <div className="page-container-group1">
              <div className="page-container-item">
                <SlOptions />
              </div>
              <div className="page-container-item">{pData[0].priority}</div>
              <div className="page-container-item">{pData[0].data.length}</div>
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
          {pData[0].data.map((item, index) => {
            return <Card key={index} data={item} />;
          })}
        </div>

        <div className="page-container-head">
          <div className="page-container-subhead">
            <div className="page-container-group1">
              <div className="page-container-item">⚠️</div>
              <div className="page-container-item">{pData[1].priority}</div>
              <div className="page-container-item">{pData[1].data.length}</div>
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
          {pData[1].data.map((item, index) => {
            return <Card key={index} data={item} />;
          })}
        </div>

        <div className="page-container-head">
          <div className="page-container-subhead">
            <div className="page-container-group1">
              <div className="page-container-item">
                <PiCellSignalHighBold />
              </div>
              <div className="page-container-item">{pData[2].priority}</div>
              <div className="page-container-item">{pData[2].data.length}</div>
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
          {pData[2].data.map((item, index) => {
            return <Card key={index} data={item} />;
          })}
        </div>

        <div className="page-container-head">
          <div className="page-container-subhead">
            <div className="page-container-group1">
              <div className="page-container-item">
                <PiCellSignalMediumBold />
              </div>
              <div className="page-container-item">{pData[3].priority}</div>
              <div className="page-container-item">{pData[3].data.length}</div>
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
          {pData[3].data.map((item, index) => {
            return <Card key={index} data={item} />;
          })}
        </div>

        <div className="page-container-head">
          <div className="page-container-subhead">
            <div className="page-container-group1">
              <div className="page-container-item">
                <PiCellSignalLowBold />
              </div>
              <div className="page-container-item">{pData[4].priority}</div>
              <div className="page-container-item">{pData[4].data.length}</div>
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
          {pData[4].data.map((item, index) => {
            return <Card key={index} data={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Priority;
