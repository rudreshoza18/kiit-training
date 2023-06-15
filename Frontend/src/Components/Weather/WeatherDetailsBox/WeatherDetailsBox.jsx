import React from "react";

const WeatherDetailsBox = ({ location }) => {
  return (
    <div className="flex justify-start items-center mx-15rem ">
      <p style={{ margin: "1rem 0 1rem 0 " }}>
        <span className="font-sans text-4xl font-semibold">
          {location.name} weather forecast,
        </span>
        <span className="text-gray text-2xl">
          {location.region} {location.country}
        </span>
      </p>
    </div>
  );
};

export default WeatherDetailsBox;
