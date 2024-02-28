import glass from "../assets/glass.png";

const OtherProduct = () => {
  return (
    <div className="container">
      <div className="bg-[#3C1C6C] rounded-xl flex gap-14 my-12 flex-wrap justify-between items-center py-10 px-8">
        <img src={glass} alt="" className="w-full basis-7/12 grow" />
        <div className="basis-3/12 grow">
          <h3 className="text-white text-4xl mb-8">
            Beyond Clean Water, We Have Exquisite Selection Of Drinks
          </h3>
          <p className="text-xs text-white mt-4 mb-8 font-extralight">
            From the source to your glass, we are committed to delivering crisp,
            refreshing goodness
          </p>
        </div>
      </div>
    </div>
  );
};

export default OtherProduct;
