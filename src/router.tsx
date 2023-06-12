import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import ErrorPage from "./Pages/ErrorPage";
import About from "./Pages/About/About";
import Menu from "./Pages/Menu/Menu";
import Location from "./Pages/Location/Location";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/landingpage-coffee",
        element: <Dashboard />,
        // element: <Navigate to="/barang" />,
      },
      {
        path: "/landingpage-coffee/about",
        element: <About />,
        // element: <Navigate to="/barang" />,
      },
      {
        path: "/landingpage-coffee/menu",
        element: <Menu />,
      },
      {
        path: "/landingpage-coffee/location",
        element: <Location />,
      },
      //   {
      //     path: "/dokumen/:id",
      //     element: <FormDokumen />,
      //   },
      //   {
      //     path: "/dokumen",
      //     element: <Dokumen />,
      //   },
      //   {
      //     path: "/sell/:id",
      //     element: <SellPage />,

      //   },
      //   {
      //     path: "/sell",
      //     element: <Sell />,
      //   },
    ],
  },

  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
