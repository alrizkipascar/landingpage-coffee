import { useEffect, useState } from "react";

import Loading from "../Loading";
import locationImage from "./components/locationImage";
import LocationTemplate from "./components/LocationTemplate";
import LocationButton from "./components/LocationButton";

const Location = () => {
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState(null);
  console.log(locationImage[0], "location");
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setLocation(locationImage[0]);
    }, 1000);
  }, []);

  return (
    <div className="h-screen  w-full">
      {!loading ? (
        <div className="h-full w-full my-14">
          <h1 className="text-5xl text-center">Our Outlet</h1>
          <div className="my-3 rounded-xl flex overflow-hidden shadow-2xl w-1/2 h-3/4 bg-dark-yellowish mx-auto">
            <div className="w-1/2 h-full ">
              <div className="w-full h-auto px-11 py-28">
                {locationImage?.map((slide, index) => {
                  return (
                    <>
                      <LocationButton
                        setLocation={setLocation}
                        data={slide}
                        active={location?.id == slide?.id ? true : false}
                        index={index}
                      />
                    </>
                  );
                })}
              </div>
            </div>
            <div className="w-1/2 h-full flex  text-dark-brown">
              <LocationTemplate
                image={location?.image}
                description={location?.description}
                id={location?.id}
              />
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};
export default Location;
