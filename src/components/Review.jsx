import mask from "../assets/Mask group.jpg";
import kingsley from "../assets/kingsley-osei-abrah-9KmzY22Tz-4-unsplash 1.jpg";
import king from "../assets/king.jpg";

const Review = () => {
  return (
    <div className="">
      <h1 className="text-[#3f206f] font-semibold text-3xl px-auto">
        What our customers are saying!
      </h1>
      <div className="text-[#232323] text-md px-10 mt-6 grid md:grid-cols-3 gap-4">
        <div className="bg-[#f8f3ff] rounded-lg p-6 ">
          <p className="mt-4 mb-8">
            Emerald company is the best in the business for quenching every
            thirst with excellence.
          </p>
          <div className="flex">
            <img src={mask} alt="" className="" />
            <p className="">Naomi wine store</p>
            <span>A wine store owner</span>
          </div>
        </div>
        <div className="bg-[#f8f3ff] rounded-lg p-6">
          <p className="mt-4 mb-8">
            Exceptional quality and unparalled veriety! from the purest water to
            a delightful array of drinks, their service set the standard
          </p>
          <div className="flex">
            <img src={kingsley} alt="" className="rounded-[50%]" />
            <p>Raymond Thusk</p>
          </div>
          <h4>professional freelancer</h4>
        </div>
        <div className="bg-[#f8f3ff] rounded-lg p-6">
          <p className="text-[#a8a4ad] mt-4 mb-4"></p>Our team has been working
          at frispes for almost 2 months because our office is still closed.
          During working at frispes, we feel a new experience.
          <div className="flex mt-2">
            <img src={king} alt="" className="rounded-[50%]" />
            <p>Mr Sanni</p>
          </div>
          <h4>A Freelancer</h4>
        </div>
      </div>
    </div>
  );
};

export default Review;
