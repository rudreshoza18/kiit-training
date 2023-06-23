import React, { Fragment, useEffect, useState } from "react";
import { getRockets } from "../../Shared/Api/WeatherApi";
import { RocketsDetails } from "./RocketsDetails/RocketsDetails";
import RocketPlaceholder from "../../Shared/RocketPlaceholder";
import SpaceLoader from "../../Shared/SpaceLoader";
const Spacex = () => {
  const [rocketsData, setrocketsData] = useState([]);
  const [loader, setLoader] = useState(false);
  const getRocketsData = async () => {
    setLoader(true);
    const data = await getRockets();
    if (data.status === 200) {
      setLoader(false);
      console.log(data);
      setrocketsData(data.data);
    } else {
      setLoader(false);
      setrocketsData([]);
    }
  };

  useEffect(() => {
    getRocketsData();
  }, []);
  return (
    <Fragment>
      <div className="flex justify-center items-center">
        {loader && <SpaceLoader />}
      </div>
      <div>
        {rocketsData.length === 0 && !loader && <p>no data available</p>}
      </div>
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
