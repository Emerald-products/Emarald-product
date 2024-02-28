import glass from "../assets/glass.png";

const OtherProduct = () => {
  return (
    <div className="bg-[#3C1C6C] rounded-xl flex m-12 md:flex-nowrap w-[80%] lg:flex flex-wrap justify-between items-center">
      <img src={glass} alt="" className="p-10" />
      <div className="py-">
        <h3 className="text-white text-4xl p-8">
          Beyond Clean Water, We Have Exquisite Selection Of Drinks
        </h3>
        <p className="text-xs text-white mt-4 mb-8 p-4 px-2 font-extralight">
          From the source to your glass, we are committed to delivering crisp,
          refreshing goodness
        </p>
      </div>
    </div>
  );
};

export default OtherProduct;
