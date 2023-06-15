import React from "react";

const WeatherTemp = ({ toggleClass, toggleTempHandler }) => {
  return (
    <div
      className="flex justify-end items-center
 my-10px
 md:mx-24rem
 md:w-64rem"
    >
      <button
        className={toggleClass ? "btn btn-error mx-10px" : "btn mx-10px"}
        onClick={() => toggleTempHandler("f")}
      >
        &deg; F
      </button>
      <button
        className={toggleClass ? "btn" : "btn btn-success"}
        onClick={() => toggleTempHandler("c")}
      >
        &deg; C
      </button>
    </div>
  );
};

export default WeatherTemp;
