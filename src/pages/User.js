import React from "react";
import UserCard from "../components/UserCard";

const User = () => {
  return (
    <div className="page-container">
      <div className="page-container-second">
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </div>
  );
};

export default User;
