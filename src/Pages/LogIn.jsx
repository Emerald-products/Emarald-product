import bgimage1 from "../assets/bgimage1.png";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const LogIn = () => {
  const [email, setUseremail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate(); // Initialize useNavigate

  const handleUseremailChange = (event) => {
    setUseremail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log("User has logged in:", userCredential.user);

      // Redirect to the Transactions page upon successful login
      Navigate("/Transactions");
    } catch (error) {
      console.error("Login error:", error);
      // Handle login error, you may want to show an error message to the user
    }
  };

  return (
    <div
      className="h-screen flex flex-wrap gap-8 items-center justify-center py-10 px-24 pr-4"
      style={{ backgroundImage: `url(${bgimage1})` }}
    >
      <div className="bg-white rounded-lg px-[150px] py-20">
        <h1 className="text-[#232323] text-2xl mb-2">Welcome Back</h1>
        <p className="text-xs text-[#4F4F4F] font-thin">
          Please enter your details{" "}
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col mt-6 rounded px-8 pt-6 pb-8 mb-4 w-full items-center"
        >
          <label className="pr-4" htmlFor="">
            Email
          </label>
          <input
            type="text"
            value={email}
            onChange={handleUseremailChange}
            placeholder="Email address"
            className="border-[#D9D9D9] rounded-lg bg-[#D9D9D9] text-xs text-[#232323] py-4 px-20 mb-2 pr-7"
          />
          <label className="pr-4" htmlFor="">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
            className="border-[#D9D9D9] rounded-lg w-full bg-[#D9D9D9] text-xs text-[#232323] py-4 px-20 pr-7 items-center justify-center"
          />
        </form>
        <button
          onClick={handleSubmit}
          type="submit"
          className="w-full bg-[#3C1C6C] rounded-lg text-white my-2 py-2 font-thin"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LogIn;
