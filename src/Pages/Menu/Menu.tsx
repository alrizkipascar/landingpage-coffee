import { useEffect, useState } from "react";
import Loading from "../Loading";
import menuImage from "./components/menuImage";
import MenuCard from "./components/MenuCard";
import MenuButton from "./components/MenuButton";
import MenuInfo from "./components/MenuInfo";

const Menu = () => {
  const [loading, setLoading] = useState(true);
  const [menu, setMenu] = useState(null);
  const [type, setType] = useState("All");
  const category = [
    { id: 1, type: "All" },
    { id: 2, type: "Food" },
    { id: 3, type: "Drink" },
  ];
  console.log(category[0]);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setMenu(menuImage);
    }, 1000);
  }, []);
  const [showModal, setShowModal] = useState({});

  const Modals = ({ dataBarang, showModal, setShowModal }) => {
    // setTimeout(() => {
    return (
      <MenuInfo
        dataBarang={dataBarang}
        showModal={showModal}
        setShowModal={setShowModal}
      ></MenuInfo>
    );
    // });
  };
  console.log(showModal);
  const setCategory = (data) => {
    // const newPacientes = dataProduct?.filter(
    //   (item) => item["name"] == searchValue
    // );

    setLoading(true);
    setType(data?.type);
    if (data?.type == "All") {
      setMenu(menuImage);
    } else {
      let newPacientes = menuImage?.filter(
        (item) => item["category"] == data?.type
      );
      setMenu(newPacientes);
    }
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="h-auto w-full">
      <Modals
        dataBarang={showModal?.data}
        showModal={showModal?.modal}
        setShowModal={setShowModal}
      ></Modals>
      <div className="h-screen w-full my-14">
        <div className="rounded-xl flex overflow-hidden shadow-2xl w-3/4 h-full bg-dark-yellowish mx-auto">
          <div className="w-1/4 h-full border-r border-softGray">
            <div className="mx-2 my-6">
              {category?.map((slide, index) => {
                return (
                  <MenuButton
                    data={slide}
                    setCategory={setCategory}
                    active={type == slide?.type ? true : false}
                    category={slide?.type}
                    //   image={slide?.image}
                    //   index={index}
                    // final={true}
                  />
                );
              })}
            </div>
          </div>
          {!loading ? (
            <div className="w-3/4 h-full flex   text-dark-brown">
              <div className="w-full mx-4 my-2 overflow-y-auto ">
                <div className="grid grid-cols-3 grid-flow-row gap-4">
                  {menu?.map((slide, index) => {
                    return (
                      <MenuCard
                        data={slide}
                        setShowModal={setShowModal}

                        //   description={slide?.description}
                        //   image={slide?.image}
                        //   index={index}
                        // final={true}
                      />
                    );
                  })}
                </div>
              </div>
              {/* <div className="mx-4 h-full ">
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
              </div> */}
            </div>
          ) : (
            <Loading />
          )}
        </div>
      </div>

      <div className="h-36 w-full"></div>
    </div>
  );
};
export default Menu;
