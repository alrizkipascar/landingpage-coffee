import { useState, useEffect } from "react";

const MenuInfo = ({ dataBarang, showModal, setShowModal }) => {
  const [cssModal, setCssModal] = useState(
    "translate-x-full transition-all ease-out duration-1000  "
  );
  console.log(showModal);
  const ModalOut = "translate-x-2/4 transition-all ease-out duration-1000 ";
  if (showModal?.modal != false || null) {
    setTimeout(() => {
      setCssModal(ModalOut);
    }, 100);
  }

  useEffect(() => {
    // Update the document title using the browser API
    // if (dataBarang) {
    //   setBarang({ ...dataBarang, fileimage: dataBarang.image });
    // }
  }, []);
  return (
    <>
      {showModal ? (
        <div className="h-full bg-white bg-opacity-20 overflow-y-auto  fixed inset-0 z-50 w-full">
          <div
            className={`${cssModal} bg-gray-100 h-full border  rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2`}
          >
            {" "}
            <div className="h-auto border-b-2 mb-10 border-slate-400 flex  items-center justify-start  border-solid border-blueGray-200 rounded-b">
              <button
                className="text-red-500  text-2xl background-transparent font-bold uppercase px-6 py-2  outline-none focus:outline-none mr-1 mb-1"
                type="button"
                onClick={() => setShowModal({ modal: false, data: null })}
              >
                {"<"}
              </button>
            </div>
            <div className="bg-dark-brown text-softGray flex w-full h-auto m-3 rounded-xl overflow-hidden border border-slate-400">
              <div className="mx-4 my-3 w-1/2 grid text-justify gap-2">
                <h1 className="text-2xl font-bold">{dataBarang?.name}</h1>
                <p className="text-xl flex">Price: {dataBarang?.price}</p>
                <p className="text-xl">Type: {dataBarang?.category}</p>

                <p className="text-lg">
                  Description:
                  <p className="text-xl">{dataBarang?.description}</p>
                </p>
                <ul>
                  <p className="text-xl">Can be served: </p>
                  {dataBarang?.served?.map((slide) => {
                    return <li>{slide}</li>;
                  })}
                </ul>
              </div>
              <div className=" h-auto w-1/2  flex ">
                <img
                  className="object-cover w-full h-full "
                  src={dataBarang?.image}
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default MenuInfo;
