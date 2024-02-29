import smoothie from "../assets/smoothie.png";

const Product = () => {
  return (
    <div className="container">
      <div className="bg-[#F9B9F2] rounded-xl flex gap-14 my-12 flex-wrap justify-between items-center py-10 px-8">
        <div className="basis-3/12 grow">
          <h3 className="text-4xl mb-8">
            Sip, Savor, and stay hydrated with our blend of smoothies
          </h3>
          <p className="text-xs text-black mt-4 mb-8 font-extralight">
            From the source to your glass, we are committed to delivering crisp,
            refreshing goodness
          </p>
        </div>
        <img src={smoothie} alt="" className="w-full basis-7/12 grow" />
      </div>
    </div>
  );
};

export default Product;
