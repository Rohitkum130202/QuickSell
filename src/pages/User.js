import React,{useState,useEffect} from "react";
import UserCard from "../components/UserCard";

const User = ({data}) => {
  const [uData, setUData] = useState(data.users.map(user => ({
    ...user,
    data: []
  })));

  useEffect(() => {
    const filtedData = () => {
      const fData = uData;

      data.tickets.forEach((ticket) => {
        const { status, id, title, tag, priority, userId} = ticket;
        const foundIndex = fData.findIndex((item) => item.id === userId);
        if (foundIndex !== -1) {
          fData[foundIndex].data.push({ id, title, tag: tag[0], priority });
        }
      });
       setUData(fData);
    };

    filtedData();
  }, []);
  console.log(uData);
  return (
    <div className="page-container">
      <div className="page-container-second">
        {uData.map((item, index) => {
            return <UserCard key={index} userData={item} />;
          })}
      </div>
    </div>
  );
};

export default User;
