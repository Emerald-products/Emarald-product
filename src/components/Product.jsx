import smoothie from "../assets/smoothie.png";

const Product = () => {
  return (
    <div className="bg-[#F9B9F2] rounded-xl m-12 flex md:flex-nowrap flex-wrap justify-between w-[80%]">
      <div className="py-20">
        <h3 className="text-4xl p-8">
          Sip, Savor, and stay hydrated with our blend of smoothies
        </h3>
        <p className="text-xs text-black mt-4 p-4 px-2 font-extralight">
          From the source to your glass, we are committed to delivering crisp,
          refreshing goodness
        </p>
      </div>
      <img src={smoothie} alt="" className="p-8" />
    </div>
  );
};

export default Product;
