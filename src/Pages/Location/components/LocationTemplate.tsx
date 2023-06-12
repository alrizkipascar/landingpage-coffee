function LocationTemplate(props: cardProps) {
  return (
    <div className=" h-3/4 ">
      <div className="text-2xl text-center h-1/2">
        {" "}
        <img
          className="object-cover w-full h-full bg-center "
          src={`${
            props
              ? props?.image
              : "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1650&q=80"
          }`}
        />
      </div>
      <div
        className={`${
          props?.id % 2 == 0 ? "bg-dark-brown text-softGray" : "text-dark-brown"
        } h-full w-auto border border-softGray `}
      >
        <div className="my-6 mx-3">
          Location:
          <p className="text-justify my-2">{props?.description}</p>
        </div>
      </div>
    </div>
  );
}

export default LocationTemplate;
