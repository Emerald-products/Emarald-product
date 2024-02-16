import glass from "../assets/glass.png";

const OtherProduct = () => {
  return (
    <div className="bg-[#3C1C6C] rounded-xl w-4/5 m-12 flex lg:flex-nowrap justify-between items-center">
      <img src={glass} alt="" className="p-10" />
      <div className="py-20">
        <h1 className="text-white text-4xl">
          Beyond Clean Water, We Have Exquisite Selection Of Drinks
        </h1>
        <p className="text-xs text-[#FEFEFE] mt-6 font-extralight">
          From the source to your glass, we are committed to delivering crisp,
          refreshing goodness
        </p>
      </div>
    </div>
  );
};

export default OtherProduct;
