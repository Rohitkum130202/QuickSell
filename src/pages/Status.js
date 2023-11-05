import React, { useEffect, useState } from "react";
import "./page.css";
import { GrAdd } from "react-icons/gr";
import { SlOptions } from "react-icons/sl";
import { MdCancel, MdRadioButtonUnchecked } from "react-icons/md";
import { CgTimelapse } from "react-icons/cg";
import { BsExclamationLg } from "react-icons/bs";
import Card from "../components/Card";

const Status = ({ data }) => {
  // console.log(data);
  const [statusData, setStatusData] = useState( [
    {
      status: "Backlog",
      data: [],
    },
    {
      status: "Todo",
      data: [],
    },
    {
      status: "In progress",
      data: [],
    },
    {
      status: "Done",
      data: [],
    },
    {
      status: "Canceled",
      data: [],
    },
  ]);

  useEffect(() => {
    const filtedData = () => {
      const fData = statusData;

      data.tickets.forEach((ticket) => {
        const { status, id, title, tag, priority } = ticket;
        const foundIndex = fData.findIndex((item) => item.status === status);
        if (foundIndex !== -1) {
          fData[foundIndex].data.push({ id, title, tag: tag[0], priority });
        }
      });
       setStatusData(fData);
    };

    filtedData();
  }, []);

  // console.log('====================================');
  console.log(statusData);
  // console.log('====================================');
  return (
    <div className="page-container">
      <div className="page-container-second">
        <div className="page-container-head">
          <div className="page-container-subhead">
            <div className="page-container-group1">
              <div className="page-container-item">
                <BsExclamationLg />
              </div>
              <div className="page-container-item">{statusData[0].status}</div>
              <div className="page-container-item">
                {statusData[0].data.length}
              </div>
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
          {statusData[0].data.map((item, index) => {
            console.log(item);
            return <Card key={index} data={item} />;
          })}
        </div>

        <div className="page-container-head">
          <div className="page-container-subhead">
            <div className="page-container-group1">
              <div className="page-container-item">
                <MdRadioButtonUnchecked />
              </div>
              <div className="page-container-item">{statusData[1].status}</div>
              <div className="page-container-item">
                {statusData[1].data.length}
              </div>
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
          {statusData[1].data.map((item, index) => {
            console.log(item);
            return <Card key={index} data={item} />;
          })}
        </div>

        <div className="page-container-head">
          <div className="page-container-subhead">
            <div className="page-container-group1">
              <div className="page-container-item">
                <CgTimelapse />
              </div>
              <div className="page-container-item">{statusData[2].status}</div>
              <div className="page-container-item">
                {statusData[2].data.length}
              </div>
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
          {statusData[2].data.map((item, index) => {
            console.log(item);
            return <Card key={index} data={item} />;
          })}
        </div>

        <div className="page-container-head">
          <div className="page-container-subhead">
            <div className="page-container-group1">
              <div className="page-container-item">✔️</div>
              <div className="page-container-item">{statusData[3].status}</div>
              <div className="page-container-item">
                {statusData[3].data.length}
              </div>
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
          {statusData[3].data.map((item, index) => {
            console.log(item);
            return <Card key={index} data={item} />;
          })}
        </div>

        <div className="page-container-head">
          <div className="page-container-subhead">
            <div className="page-container-group1">
              <div className="page-container-item">
                <MdCancel />
              </div>
              <div className="page-container-item">{statusData[4].status}</div>
              <div className="page-container-item">
                {statusData[4].data.length}
              </div>
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
          {statusData[4].data.map((item, index) => {
            console.log(item);
            return <Card key={index} data={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Status;
