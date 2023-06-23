import React, { useEffect, useState } from "react";
import { BsRocketTakeoff } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { FaWikipediaW } from "react-icons/fa";
export const RocketsDetails = ({
  id = "",
  desc = "",
  company = "",
  country = "",
  flickerImages = [],
  rocketName = "",
  rocketId = "",
  rocketType = "",
  wiki = "",
  mass = { kg: 0, lb: 0 },
  active = false,
  firstFlight = "",
}) => {
  const navigate = useNavigate();
  const [customActiveClass, setCustomaActiveClass] = useState("");
  const setActiveClass = () => {
    if (active) {
      setCustomaActiveClass("bg-lightgreen ");
    } else {
      setCustomaActiveClass("bg-orange ");
    }
  };
  const rocketHandler = () => {
    console.log(rocketId);
    navigate("/rocket/" + rocketId);
  };
  useEffect(() => {
    setActiveClass();
  });
  return (
    <>
      <div className="grid grid-cols-1 gap-4 my-1rem" id="grid">
        <div
          className={
            "card rounded-none w-40rem shadow-lg  " + customActiveClass
          }
        >
          <figure>
            <img src={flickerImages[0]} alt="rockets" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {rocketName} :- {rocketId}
            </h2>
            <p>{desc}</p>
            <div tabIndex={id} className="collapse">
              <div className="collapse-title text-xl font-normal flex justify-end items-center">
                more...
              </div>
              <div className="collapse-content">
                <p>company:-{company}</p>
                <p>country:-{country}</p>
                <p> rocketype:-{rocketType}</p>
                <p>mass :- {mass.kg} kg</p>
                <p>active :-{"" + active}</p>
                <p>firstflight :- {firstFlight}</p>
              </div>
            </div>
            <div className="card-actions justify-stretch w-100%">
              <div className="flex justify-between items-center space-x-3 w-100%">
                <a href={wiki} target="_blank" rel="noreferrer">
                  <FaWikipediaW className="text-xl" />
                </a>
                <button className="btn btn-primary" onClick={rocketHandler}>
                  <BsRocketTakeoff />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
