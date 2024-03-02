import mask from "../assets/Mask group.png";
import kingsley from "../assets/kingsley-osei-abrah-9KmzY22Tz-4-unsplash 1.jpg";
import king from "../assets/king.jpg";

const Review = () => {
  return (
    <div className="container p-12">
      <h1 className="text-[#3f206f] font-semibold text-3xl p-8 text-center ">
        What our customers are saying!
      </h1>
      <div className="text-[#232323] text-md mt-6 grid md:grid-cols-3 gap-4">
        <div className="bg-[#f8f3ff] rounded-lg p-6 ">
          <p className="mt-4 mb-8 flex items-center justify-center">
            Emerald company is the best in the business for quenching every
            thirst with excellence.
          </p>
          <div className="flex mb-8 mt-6 gap-3 font-light">
            <img src={mask} alt="" className="mt-6" />
            <div className="mt-6">
              <p className=" text-sm mb-1">Naomi wine store</p>
              <h4 className="text-sm">A wine store owner</h4>
            </div>
          </div>
        </div>
        <div className="bg-[#f8f3ff] rounded-lg p-6">
          <p className="mt-4 mb-8">
            Exceptional quality and unparalled veriety! from the purest water to
            a delightful array of drinks, their service set the standard
          </p>
          <div className="flex mt-4 gap-3 font-light">
            <img src={kingsley} alt="" className="rounded-[50%] mt-6" />
            <div className="mt-6">
              <p className=" text-sm mb-1">Deolu's Farm</p>
              <h4 className="text-sm">Farm Manager</h4>
            </div>
          </div>
        </div>
        <div className="bg-[#f8f3ff] rounded-lg p-6">
          <p className="text-[#a8a4ad] mt-4 mb-4"></p>Our team has been working
          at frispes for almost 2 months because our office is still closed.
          During working at frispes, we feel a new experience.
          <div className="flex mt-4 gap-3 font-light">
            <img src={king} alt="" className="rounded-[50%] mt-6" />
            <div className="mt-6">
              <p className=" text-sm mb-1">Mr Sanni</p>
              <h4 className="text-sm">A Professional Freelancer</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
