import React, { Fragment, useEffect, useState } from "react";
import { getRockets } from "../../Shared/Api/WeatherApi";
import { RocketsDetails } from "./RocketsDetails/RocketsDetails";
const Spacex = () => {
  const [rocketsData, setrocketsData] = useState([]);
  const getRocketsData = async () => {
    const data = await getRockets();
    if (data.status === 200) {
      console.log(data);
      setrocketsData(data.data);
    } else {
      setrocketsData([]);
    }
  };

  useEffect(() => {
    getRocketsData();
  }, []);
  return (
    <Fragment>
      <div>{rocketsData.length === 0 && <p>no data available</p>}</div>
      <div>
        {rocketsData.length !== 0 && (
          <div>
            {rocketsData.map((ele) => (
              <div key={ele.key} className="flex justify-center items-center">
                <RocketsDetails
                  id={ele.id}
                  desc={ele.description}
                  country={ele.country}
                  company={ele.company}
                  flickerImages={ele.flickr_images}
                  rocketName={ele.rocket_name}
                  rocketId={ele.rocket_id}
                  rocketType={ele.rocket_type}
                  wiki={ele.wikipedia}
                  mass={ele.mass}
                  active={ele.active}
                  firstFlight={ele.first_flight}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Spacex;
