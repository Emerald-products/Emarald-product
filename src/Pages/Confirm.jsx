import email from "../assets/email-envelope.png";
import bgimage1 from "../assets/bgimage1.png";

const Confirm = () => {
  return (
    <div
      className=" h-screen flex flex-wrap gap-8 items-center justify-center py-10 px-24"
      style={{ backgroundImage: `url(${bgimage1} background: cover,)` }}
    >
      <div className="bg-white text-white rounded-lg p-6 px-10">
        <img src={email} alt="" className="mt-5 mb-4 pr-6" />
        <h3 className="text-[#232323] font-semibold text-lg">
          Confirm your email address
        </h3>
        <p className="text-xs text-[#4F4F4F] mt-2">
          A verification mail has been sent to tolo****@gmail.com
        </p>
        <p className="text-xs text-[#3C1C6C]">Didn't recieve the email?</p>
        <button className="bg-[#3C1C6C] py-2 px-8 rounded-lg mt-5">
          Continue
        </button>
      </div>
    </div>
  );
};

export default Confirm;
