import React from "react";
import Loader from "./Loader";

const Button = ({ isLoading, onClickEvent, color }) => {

  const colorClasses = {
    blue: "bg-blue-500", // Map 'blue' to 'bg-purple-500'
    red: "bg-red-500",
    purple: "bg-purple-500",
    yellow: "bg-yellow-500",
    // Add more color mappings as needed
  };

  const bgColorClass = colorClasses[color] || "bg-default-color";

  return (
    <div
      onClick={onClickEvent}
      className={`${bgColorClass} text-white rounded-md p-2 mt-2 flex justify-center items-center w-full cursor-pointer`}
    >
      {isLoading ? <Loader /> : "Submit"}
    </div>
  );
};

export default Button;
