import { useState } from "react";

const DashboardCarousel = ({ data }) => {
  const [currentSlide, setcurrentSlide] = useState({
    index: 0,
    style: "translate-x-0",
    hid: "opacity-0",
  });

  const nextSlide = () => {
    let newSlide =
      currentSlide.index === data.length - 1 ? 0 : currentSlide.index + 1;
    setcurrentSlide((prevstate) => ({
      ...prevstate,
      style: "translate-x-32 opacity-0",
    }));
    setTimeout(() => {
      setcurrentSlide({
        index: newSlide,
        style: "-translate-x-32  opacity-0",
      });
    }, 250);

    setTimeout(() => {
      setcurrentSlide({ index: newSlide, style: "translate-x-0  opacity-1" });
    }, 500);
  };

  const prevSlide = () => {
    let newSlide =
      currentSlide.index === 0 ? data.length - 1 : currentSlide.index - 1;

    setcurrentSlide((prevstate) => ({
      ...prevstate,
      style: "-translate-x-32 opacity-0",
    }));
    setTimeout(() => {
      setcurrentSlide({
        index: newSlide,
        style: "translate-x-32  opacity-0",
      });
      // setcurrentSlide((prevstate) => ({
      //   ...prevstate,
      //   style: "translate-x-32  opacity-0",
      // }));
    }, 250);
    setTimeout(() => {
      setcurrentSlide({ index: newSlide, style: "translate-x-0 opacity-1" });
    }, 500);
  };
  return (
    <div className="mt-8 text-amber-500">
      <div className="mx-auto w-16 h-auto border-4 border-t my-8"></div>
      <div className="w-full px-4 relative h-56 overflow-hidden rounded-lg md:h-96">
        {/* flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none */}

        {data?.map((slide, index) => {
          return (
            <div
              //   data-class-in="translate-x-0 opacity-1"
              //   data-class-out={`${currentSlide.style} opacity-0`}
              className={
                index === currentSlide.index
                  ? `${currentSlide.style} text-3xl md:text-5xl text-bold font-bebas h-auto absolute inset-0  transition transform  duration-700 ease-in-out  block w-full `
                  : "hidden"
              }
            >
              <img
                className="object-cover w-full h-full bg-center "
                src={slide?.image}
              />
              <h1
                alt="This is a carousel slide"
                key={index}
                className=" duration-300 absolute inset-0 z-10 flex justify-center items-center text-5xl font-semibold text-center"
              >
                {slide.text}
              </h1>
            </div>
          );
        })}
        <button
          onClick={prevSlide}
          type="button"
          className="absolute left-0 top-40 z-10 "
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-300/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-dark-brown sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        {/* flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none */}
        <button
          onClick={nextSlide}
          type="button"
          className="absolute right-0 top-40 z-10 "
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-300/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              aria-hidden="true"
              className=" w-5 h-5 text-dark-brown sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>

      {/* <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div> */}
    </div>
  );
};

export default DashboardCarousel;
