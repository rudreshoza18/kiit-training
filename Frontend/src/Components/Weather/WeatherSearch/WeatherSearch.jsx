import React from "react";
import Input from "../../../Shared/Input";
import Button from "../../../Shared/Button";
export const WeatherSearch = (props) => {
  return (
    <div className="flex justify-center items-center">
      <Input
        placeholder="enter cityname"
        className="input-primary w-50rem"
        onChange={props.cityNameHandler}
        value={props.cityname}
        type="text"
      />
      <Button buttonname="submit" onClick={props.getCurrentWeatherHandler} />
    </div>
  );
};
