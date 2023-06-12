const MenuCard = ({ data, setShowModal }) => {
  return (
    <button
      onClick={() =>
        setShowModal({
          modal: true,
          data: data,
        })
      }
    >
      <div className="w-11/12 h-72 bg-dark-brown text-softGray rounded-2xl overflow-hidden shadow-2xl">
        <div className="h-1/2">
          <img
            className="object-cover w-full h-full bg-center "
            src={data?.image}
          />
        </div>
        <div className="mx-4 mt-3 text-justify">
          <h1 className="text-2xl font-bold">{data?.name}</h1>
          <p className="text-xl">{data?.price}</p>
          <p className="text-xl">{data?.category}</p>
        </div>
      </div>
    </button>
  );
};

export default MenuCard;
