import { useNavigate } from "react-router-dom";
import clean from "../../../assets/image/dashboard/product.jpg";
function StartFrom() {
  const navigate = useNavigate();
  return (
    <div className="relative group w-full h-96 overflow-hidden ">
      <img
        className="object-cover object-bottom w-full h-auto transform duration-700 backdrop-opacity-100"
        src={clean}
      />
      {/* <div className="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"></div> */}
      <div className="absolute group-hover:bg-gradient-to-t group-hover:from-dark-brown w-full h-full inset-y-full transform duration-1000 group-hover:-inset-y-0"></div>
      <div className="absolute  inset-0 w-full flex place-content-center">
        <p className="inset-0 capitalize font-serif font-bold text-3xl text-center shadow-2xl text-white mt-10">
          {"Our Product"}
        </p>
      </div>
      <div className="absolute inset-0 w-full flex place-content-center mt-20">
        <p className=" font-sans w-3/5 text-white text-justify  mt-5">
          {
            "We prepare and create our product with high quality materials and be handled by professionals, we hope our customers can taste high class coffee from our cafe, check out our menu to see what kind of drink and food you can buy from us."
          }
        </p>
      </div>
      <button
        onClick={() => navigate("/menu")}
        className="absolute left-1/4 bottom-20 bg-dark-yellowish text-black font-bold rounded-lg h-10 w-48"
      >
        Our Product {""}
      </button>
      {/* <div className="absolute bg-gradient-to-t from-black w-full h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0">
        <div className="absolute w-full flex place-content-center">
          <p className="capitalize font-serif font-bold text-3xl text-center shadow-2xl text-white mt-10">
            {"Our Product"}
          </p>
        </div>
        <div className="absolute w-full flex place-content-center mt-20">
          <p className="font-sans text-center w-4/5 text-white mt-5">
            {
              "Collaborative effort of a group to achieve a common goal the most effective and efficient way!"
            }
          </p>
        </div>
        <button className="absolute left-1/4 bottom-4 bg-white text-black font-bold rounded-lg h-10 w-48">
          Contact Us
        </button>
      </div> */}
    </div>
  );
}

export default StartFrom;
