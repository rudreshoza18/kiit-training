import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRocketServices } from "../../../Shared/Api/WeatherApi";
import { FaWikipediaW } from "react-icons/fa";
const Rocket = () => {
  const params = useParams();
  const [rocketDetails, setRocketDetails] = useState({});
  const { id } = params;
  const getRocket = useCallback(async () => {
    const rocket = await getRocketServices(id);
    console.log(rocket.data);
    setRocketDetails(rocket.data);
  }, [id]);
  useEffect(() => {
    console.log("use effect");
    getRocket();
  }, [getRocket]);
  return (
    <>
      <div className="sm:mx-1rem md:mx-5rem lg:mx-15rem my-1rem">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src={
                rocketDetails.flickr_images && rocketDetails.flickr_images[0]
              }
              alt="Album"
            />
          </figure>
          <div className="card-body p-4">
            <h2 className="card-title">{rocketDetails.rocket_name}</h2>
            <p>{rocketDetails?.description}</p>
            {/* <div>
              <p>Payload Weight</p>
              {rocketDetails?.payload_weights &&
                rocketDetails?.payload_weights.map((ele, i) => (
                  <>
                    <div key={ele.id}>
                      <div>{ele.id}</div>
                      <div>{ele.kg}</div>
                      <div>{ele.name}</div>
                    </div>
                  </>
                ))}
            </div> */}
            <div className="flex justify-end items-end my-5rem">
              {rocketDetails.flickr_images &&
                rocketDetails?.flickr_images.map((ele, i) => (
                  <div key={ele} className="flex">
                    <a href={ele} target="_blank" rel="noreferrer">
                      <img
                        src={ele}
                        alt="rocketimages"
                        className="w-5rem h-5rem flex mt-1rem mx-5px"
                      />
                    </a>
                  </div>
                ))}
            </div>
            <div className="card-actions justify-end">
              <button>
                <a
                  href={rocketDetails.wikipedia}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaWikipediaW />
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rocket;
