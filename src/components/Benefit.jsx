import hand from "../assets/hand_water_icon_.png";
import icon from "../assets/iconfinder.png";
import credit from "../assets/credit_card.png";
import globe from "../assets/globe.png";
import call from "../assets/call.png";
import delivery from "../assets/SpeedTest.png";

const Benefit = () => {
  return (
    <div className="container">
      <div className="flex flex-col gap-1 items-center py-8 ">
        <h2 className="text-[#3C1C6C] text-2xl font-bold">
          The Benefits Of Using Our Products
        </h2>
        <p className="text-[#52525B] max-w-[400px] text-center text-xs font-light">
          Experience the ease of accessibility with our water services, ensuring
          that pure and refreshing hydration is effortlessly within your reach
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6 my-4">
        <div className="rounded-xl shadow-md px-4 py-2 hover:scale-105 duration-300">
          <img src={hand} alt="" sizes={20} />
          <h3 className="font-light text-md mt-3 mb-3">Pristine Water</h3>
          <p className="text-xs text-[#d7d7d7] font-semibold mb-6">
            Our company sources water from pure sources, with a commitment to
            maintaining high-quality standards.
          </p>
        </div>
        <div className="rounded-xl shadow-md px-4 py-2 hover:scale-105 duration-300">
          <img src={icon} alt="" />
          <h3 className="font-light text-md mt-3 mb-3">
            Eco-Friendly Packaging{" "}
          </h3>
          <p className="text-xs text-[#d7d7d7] font-semibold mb-6">
            We are committed to enviromental responsibility by implementiong
            sustainable practices.
          </p>
        </div>
        <div className="rounded-xl shadow-md px-4 py-2 hover:scale-105 duration-300">
          <img src={credit} alt="" />
          <h3 className="font-light text-md mt-3 mb-3">Secured Payment </h3>
          <p className="text-xs text-[#d7d7d7] font-semibold mb-6">
            Embrace financial freedom through intelligent automation. Our
            payment option is stress free
          </p>
        </div>
        <div className="rounded-xl shadow-md px-4 py-2 hover:scale-105 duration-300 mt-2">
          <img src={globe} alt="" />
          <h3 className="font-light text-md mt-3 mb-3">Quick Accessibility </h3>
          <p className="text-xs text-[#d7d7d7] font-semibold mb-6">
            We always ensure that pure and refreshing hydration is effortlessly
            within your reach
          </p>
        </div>
        <div className="rounded-xl shadow-md px-4 py-2 hover:scale-105 duration-300 mt-2">
          <img src={call} alt="" />
          <h3 className="font-light text-md mt-3 mb-3">24/7 Support </h3>
          <p className="text-xs text-[#d7d7d7] font-semibold mb-6">
            We are committed to enviromental responsibility by implementiong
            sustainable practices.
          </p>
        </div>
        <div className="rounded-xl shadow-md px-4 py-2 hover:scale-105 duration-300 mt-2">
          <img src={delivery} alt="" />
          <h3 className="font-light text-md mt-3 mb-3">Speedy Delivery </h3>
          <p className="text-xs text-[#d7d7d7] font-semibold mb-6">
            Enjoy the convinience of hydration at your doorstep, we ensure swift
            and punctual delevery
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
