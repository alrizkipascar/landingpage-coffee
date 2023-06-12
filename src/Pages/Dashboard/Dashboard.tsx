// import { useEffect, useState } from "react";
// import { Navigate, Outlet } from "react-router-dom";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import DashboardCard from "./components/DashboardCard";
import DashboardCarousel from "./components/DashboardCarousel";
import CarouselData from "./components/carouselImage";
import ReverseDashboard from "./components/reverseDashboard";
import StartFrom from "./components/StartFrom";

function Dashboard() {
  //   const [count, setCount] = useState(0);
  //   const [loading, setLoading] = useState(false);
  //   useEffect(() => {
  //     setLoading(false);
  //   }, []);
  // const CarouselData = [
  //   {
  //     text: "Working Environment",
  //     image:
  //       "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1650&q=80",
  //   },
  //   {
  //     text: "Relaxing Environment",
  //     image:
  //       "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1650&q=80",
  //   },
  //   {
  //     text: "Good coffee",
  //     image:
  //       "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1650&q=80",
  //   },
  //   {
  //     text: "Great place",
  //     image:
  //       "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1650&q=80",
  //   },
  // ];
  return (
    <div className=" w-full h-auto lg:h-full grid justify-items-center  flex-row  py-20">
      <div className="h-auto w-full">
        <DashboardCarousel data={CarouselData}></DashboardCarousel>
        <div className="grid grid-cols-2 my-52 h-auto w-full gap-3 px-6">
          {CarouselData?.map((slide, index) => {
            if (index < 2) {
              return (
                <DashboardCard
                  image={slide?.image}
                  description={slide?.description}
                  index={index}
                  title={slide?.text}
                />
              );
            }
            if (index > 1 && index < 4) {
              return (
                <ReverseDashboard
                  title={slide?.text}
                  image={slide?.image}
                  description={slide?.description}
                  index={index}
                />
              );
            }
            if (
              index > 3 &&
              index < CarouselData?.length
              // index == CarouselData?.length - 1 &&
              // CarouselData?.length % 2 == 1
            ) {
              return (
                <DashboardCard
                  title={slide?.text}
                  description={slide?.description}
                  image={slide?.image}
                  index={index}
                  // final={true}
                />
              );
            }
          })}
        </div>
        {/* <div className="relative group w-full h-96 overflow-hidden bg-black m-auto mt-auto">
          <img
            className="object-cover w-full h-full transform duration-700 backdrop-opacity-100"
            src={
              "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1650&q=80"
            }
          />
          <div className="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
          <div className="absolute bg-gradient-to-t from-black w-full h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0">
            <div className="absolute w-full flex place-content-center">
              <p className="capitalize font-serif font-bold text-3xl text-center shadow-2xl text-white mt-10">
                {"Team work"}
              </p>
            </div>
            <div className=" absolute w-full flex place-content-center mt-20">
              <p className="font-sans text-center w-4/5 text-white mt-5">
                {
                  "Collaborative effort of a group to achieve a common goal the most effective and efficient way!"
                }
              </p>
            </div>
          </div>
        </div> */}
        <div className="w-full h-96 bg-black overflow-hidden">
          <StartFrom />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
