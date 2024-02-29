import bgimage from "../assets/bgimage.png";
import white from "../assets/white.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="container flex flex-wrap lg:flex-nowrap gap-8 items-center justify-center py-10"
      style={{ backgroundImage: `url(${bgimage})` }}
    >
      <div className="basis-[552px] flex-grow w-[474px]">
        <h1 className="text-4xl py-8 font-semibold mt-6 ">
          Quenching Thirst, Klen Water For A Healthier World.
        </h1>
        <p className="mb-4 mt-4 font-light text-[#53535B] text-xs">
          From the source to your glass, we are committed to delivering crisp,
          refreshing goodness
        </p>
        <Link
          className="bg-[#3C1C6C] text-white font-light py-2 px-8 mt-5 rounded-md hover:scale-105 duration-300"
          to={"/SignUp"}
        >
          Get started
        </Link>
      </div>
      <img
        src={white}
        alt=""
        className="border-solid basis-[624px] rounded-lg mt-4 "
      />
    </div>
  );
};

export default Hero;
