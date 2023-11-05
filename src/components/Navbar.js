import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { IoMdOptions } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import Status from "../pages/Status";
import Priority from "../pages/Priority";
import User from "../pages/User";
import axios from "axios";

const Navbar = () => {
  const [display, setDisplay] = useState(false);
  const [page, setPage] = useState("Status");
  const [order, setOrder] = useState("Title");
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://api.quicksell.co/v1/internal/frontend-assignment"
        );
        setData(res.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  const handlePageChange=(e)=>{
    setPage(e.target.value);
  }

  const handleOrderChange=(e)=>{
    setOrder(e.target.value);
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="navbar-container">
        <button className="navbar-btn" onClick={() => setDisplay(!display)}>
          <div>
            <IoMdOptions />
          </div>
          <div>Display</div>
          <div>
            <RiArrowDropDownLine />
          </div>
        </button>
      </div>
      {display && (
        <div className="navbar-dropdown">
          <div className="navbar-dropdown-group">
            <div className="navbar-dropdown-title">Grouping</div>
            <select
              className="navbar-dropdown-select"
              onClick={handlePageChange}
            >
              <option value="Status">Status</option>
              <option value="Priority">Priority</option>
              <option value="User">User</option>
            </select>
          </div>
          <div className="navbar-dropdown-group">
            <div className="navbar-dropdown-title">Ordering</div>
            <select
              className="navbar-dropdown-select"
              onChange={handleOrderChange}
            >
              <option value="Priority">Priority</option>
              <option value="Title">Title</option>
            </select>
          </div>
        </div>
      )}

      {data && page === "Status" && <Status data={data} order={order}/>}
      {data && page === "User" && <User data={data} order={order}/>}
      {data && page === "Priority" && <Priority data={data} order={order} />}
    </div>
  );
};

export default Navbar;
