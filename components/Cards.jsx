export const Card = ({ image, title, description }) => {
  return (
    <div className=" ">
      <div className="container  ">
        <div className="">{image}</div>
        <div className="container mt-9 ">
          <p className="text-xl text-[#770A12] font-semibold">{title}</p>
          <p className=" text-[#383838] mt-6 ">{description}</p>
        </div>
      </div>
    </div>
  );
};

export const Card2 = ({ image, title, description }) => {
  return (
    <div className="container mx-auto md:mx-0 my-2">
      <div className="">{image}</div>
      <div className="container mt-4 ">
        <p className="text-sm text-[#727272] font-semibold">{title}</p>
        <p className=" text-[#770A12] mt-3 ">{description}</p>
      </div>
    </div>
  );
};
