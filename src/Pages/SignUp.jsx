import { auth } from "../../firebase";
import people from "../assets/people.png";
import { useState } from "react";
import logo from "../assets/logo.png";
// import { createUserWithEmailAndPassword } from "firebase/app";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential);
      const user = userCredential.user;
      localStorage.setItem("token", user.accessToken);
      localStorage.setItem("user", JSON.stringify(user));
      Navigate("/Transactions");
    } catch (error) {
      console.log(error);
    }

    console.log("Submitted:", { email, password });
  };
  return (
    <div className="flex items-center px-8">
      <div className="flex items-center justify-between gap-6">
        <img src={people} alt="" className="hidden md:block" />
        <form onSubmit={handleSubmit} className="w-full gap-4 mb-16">
          <div className="flex gap-2">
            <img
              src={logo}
              alt=""
              className="h-[100%] bg-[#3C1C6C] rounded-lg mb-2"
            />
            <h1 className="text-3xl text-[#3C1C6C] font-bold ">EMERALD</h1>
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#3C1C6C]">
              Create Admin Account
            </h3>
            <p className="font-thin text-sm text-gray-400 mb-2 mt-4">
              Enter your details
            </p>
          </div>
          <input
            id="email"
            type="text"
            value={email}
            placeholder="johndoe@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-solid border-[#CED4DA] p-3 rounded-lg text-[#212529]"
          />
          <input
            id="create password"
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-solid border-[#CED4DA] capitalize p-3 rounded-lg text-[#212529] mt-4"
          />
          <Link className="text-xs text-blue-600" to={"/LogIn"}>
            Already have an account? login
          </Link>
          <button
            onSubmit={handleSubmit}
            className="bg-[#3C1C6C] text-white font-light py-2 px-10 rounded-lg mt-4 w-full"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
