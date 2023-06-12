function DashboardCard(props: cardProps) {
  console.log("props", props);
  return (
    <div
      className={`${
        props?.index % 2 == 1 ? "bg-dark-brown" : "bg-dark-yellowish "
      } ${
        props?.final == true ? " col-span-2 " : ""
      } relative rounded-xl w-full h-56   overflow-hidden shadow-2xl`}
    >
      <div className="w-2/5">
        <img
          className={`absolute object-cover ${
            props?.index % 2 == 1 ? "-right-32" : "-left-32 "
          } -top-2 w-80 h-60 rounded-full`}
          src={props?.image}
        />
      </div>
      <div
        className={`${
          props?.index % 2 == 1
            ? "left-12 text-softGray"
            : "right-12 text-black "
        } h-auto absolute w-1/2 top-4 `}
      >
        <h1 className="text-2xl font-bold">{props?.title}</h1>
        <p className=" py-4 text-justify">{props?.description}</p>
      </div>
    </div>
  );
}

export default DashboardCard;
