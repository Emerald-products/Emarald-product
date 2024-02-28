import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

const InputTransaction = ({ dataValue, onValueChange }) => {
  const navigate = useNavigate();

  const handleLogOut = async () => {
    await signOut(auth);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/Login");
  };

  return (
    <div className="p-10 m-4">
      <h1 className="text-[#3C1C6C] font-semibold text-3xl">Hey There!</h1>
      <h1 className="text-xl mb-4 text-[#232323]">
        We are glad to have you here!
      </h1>
      <form action="" className="">
        <input
          type="text"
          name=""
          id="Transaction"
          placeholder="Enter this month income"
          value={dataValue}
          onChange={(e) => onValueChange(Number(e.target.value))}
          className="border-gray-400 outline rounded-md max-w-64 w-full h-10 px-6"
        />
      </form>
      <button
        onClick={handleLogOut}
        className="py-2 px-6 rounded-lg bg-[#3c1c6D] mt-4 text-white"
      >
        Log out
      </button>
    </div>
  );
};

export default InputTransaction;
