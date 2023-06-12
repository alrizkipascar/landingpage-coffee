import { useEffect, useState } from "react";
import Loading from "../Loading";

import about from "../../assets/image/about/about.jpg";
const About = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div className="h-screen w-full">
      {!loading ? (
        <div className="h-full w-full my-14">
          <div className="rounded-xl flex overflow-hidden shadow-2xl w-1/2 h-3/4 bg-dark-yellowish mx-auto">
            <div className="w-1/2 h-full">
              {" "}
              <img
                className="object-cover w-full h-full bg-center "
                src={about}
              />
            </div>
            <div className="w-1/2 h-full flex  items-center text-dark-brown">
              <div className="mx-4 h-3/4 ">
                <h1 className="text-2xl text-center">Fiktif Coffee</h1>
                <div className="h-full w-auto border border-softGray">
                  <p>
                    We are non existent coffee shop, this is front end project
                    by{" "}
                    <a
                      href="https://github.com/alrizkipascar"
                      target="_blank"
                      rel="noreferrer"
                      className="duration-500 hover:text-softGray bg-softGray hover:bg-dark-brown "
                    >
                      alrizki
                    </a>{" "}
                    or{" "}
                    <a
                      href="https://www.instagram.com/alleincode/"
                      target="_blank"
                      rel="noreferrer"
                      className="duration-500 hover:text-softGray bg-softGray hover:bg-dark-brown "
                    >
                      @alleincode
                    </a>{" "}
                    ,check out another project by alrizki at github.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};
export default About;
