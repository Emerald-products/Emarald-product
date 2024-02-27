import { auth } from "../../firebase";
import people from "../assets/people.png";
import { useState } from "react";
// import { createUserWithEmailAndPassword } from "firebase/app";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

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
      Navigate("/");
    } catch (error) {
      console.log(error);
    }

    console.log("Submitted:", { email, password });
  };
  return (
    <div className="flex p-8 m-4">
      <img src={people} alt="" />
      <div className="">
        <h1 className="text-3xl text-[#3C1C6C]">Emerald</h1>
      </div>
      <p>Create Admin Account</p>
      <form onSubmit={handleSubmit} className="w-full gap-4">
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
        <a href="/LogIn">
          <button className="bg-[#3C1C6C] text-white font-light py-2 px-10 rounded-lg mt-4 w-full">
            Create Account
          </button>
        </a>
      </form>
    </div>
  );
};

export default SignUp;
