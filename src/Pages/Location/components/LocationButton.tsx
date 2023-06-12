const LocationButton = ({ setLocation, data, active, index }) => {
  return (
    <button
      onClick={() => setLocation(data)}
      className={`${
        active ? "bg-slate-100" : ""
      } ${""} hover:bg-slate-100 w-full flex h-12 border-2 border-softGray`}
    >
      <div className="w-1/5 text-2xl">+</div>
      <div className={`${""} h-auto  w-1/2 top-4 `}>
        <h1 className="text-xl text-black">Location {index + 1}</h1>
      </div>
    </button>
  );
};

export default LocationButton;
