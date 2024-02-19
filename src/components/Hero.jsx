import bgimage from "../assets/bgimage.png";
import white from "../assets/white.png";

const Hero = () => {
  return (
    <div
      className="flex flex-wrap lg:flex-nowrap gap-8 items-center justify-center py-10 px-24"
      style={{ backgroundImage: `url(${bgimage})` }}
    >
      <div className="basis-[552px] flex-grow w-[474px] h-[349px]">
        <h1 className="text-4xl p-8 px-6 ">
          Quenching Thirst, Klen Water For A Healthier World.
        </h1>
        <p className="mb-4 mt-4 font-light text-[#53535B] text-xs">
          From the source to your glass, we are committed to delivering crisp,
          refreshing goodness
        </p>
        <a href="/Transacton">
          <button className="bg-[#3C1C6C] text-white font-light py-2 px-8 rounded-md hover:scale-105 duration-300">
            Pay Bills
          </button>
        </a>
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
