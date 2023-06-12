import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import Loading from "./Pages/Loading";

function App() {
  const location = useLocation();

  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div className="w-full h-auto bg-softGray">
      <div className="w-full h-auto ">
        <header className="top-0 gap-5 relative px-3 items-center justify-center z-50 w-full h-24 flex bg-softGray">
          <button
            onClick={() => navigate("/landingpage-coffee")}
            className={`${
              location.pathname == "/landingpage-coffee"
                ? "bg-dark-yellowish"
                : ""
            } h-14 rounded-3xl  w-2/12 hover:bg-dark-yellowish text-dark-brown text-xl`}
          >
            <div className="  justify-items-center">Home</div>
          </button>
          <button
            onClick={() => navigate("/landingpage-coffee/menu")}
            className={`${
              location.pathname == "/landingpage-coffee/menu"
                ? "bg-dark-yellowish"
                : ""
            } h-14 rounded-3xl  w-2/12 hover:bg-dark-yellowish text-dark-brown text-xl`}
          >
            {" "}
            <div className="  justify-items-center">Our Product</div>
          </button>
          <button
            className={`bg-dark-brown text-softGray text-5xl py-2 h-full font-sacramento rounded-3xl  w-2/12`}
          >
            <div className="flex-row relative justify-items-center">
              Fiktif Coffee
              {/* <p className="-translate-x-11"></p>
              <p className="translate-x-11"> </p> */}
            </div>
          </button>
          <button
            onClick={() => navigate("/landingpage-coffee/about")}
            className={`${
              location.pathname == "/landingpage-coffee/about"
                ? "bg-dark-yellowish"
                : ""
            } h-14 rounded-3xl  w-2/12 hover:bg-dark-yellowish text-dark-brown text-xl`}
          >
            {" "}
            <div className="  justify-items-center">About</div>
          </button>
          <button
            onClick={() => navigate("/landingpage-coffee/location")}
            className={`${
              location.pathname == "/landingpage-coffee/location"
                ? "bg-dark-yellowish"
                : ""
            } h-14 rounded-3xl  w-2/12 hover:bg-dark-yellowish text-dark-brown text-xl`}
          >
            {" "}
            <div className="  justify-items-center">Location</div>
          </button>
        </header>
        <main>{!loading ? <Outlet /> : <Loading />}</main>
      </div>
    </div>
    // <>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
  );
}

export default App;
