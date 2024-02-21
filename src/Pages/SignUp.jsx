import people from "../assets/people.png";
import logo from "../assets/logo.png";
import { useState } from "react";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log("Submitted:", { fullName, email, password });
  };
  return (
    <div className="p-8 m-4">
      <img src={people} alt="" />
      <div className="flex">
        <h1 className="text-3xl text-[#3C1C6C]">Emerald</h1>
      </div>
      <p>Create Admin Account</p>
      <form onSubmit={handleSubmit} className="w-[50%] gap-4">
        <label htmlFor="full-name" className="text-[#3B3B3B] text-sm font-thin">
          Full Name
        </label>
        <input
          id="full-name"
          type="text"
          value={fullName}
          placeholder="John Oseni"
          onChange={(e) => setFullName(e.target.value)}
          className="w-full border border-solid border-[#CED4DA] capitalize p-3 rounded-lg text-[#212529]"
        />
        <label
          htmlFor="Email address"
          className="text-[#3B3B3B] text-sm font-thin"
        >
          Email address
        </label>
        <input
          id="email"
          type="text"
          value={email}
          placeholder="johndoe@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-solid border-[#CED4DA] capitalize p-3 rounded-lg text-[#212529]"
        />
        <label
          htmlFor="Email address"
          className="text-[#3B3B3B] text-sm font-thin"
        >
          Email address
        </label>
        <input
          id="Phone Number"
          type="number"
          placeholder="08069xxxx"
          className="w-full border border-solid border-[#CED4DA] capitalize p-3 rounded-lg text-[#212529] mt-4"
        />
        <label
          htmlFor="Phone Number"
          className="text-[#3B3B3B] text-sm font-thin"
        >
          Create Password
        </label>
        <input
          id="create password"
          type="text"
          value={password}
          placeholder="xxxxxx"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-solid border-[#CED4DA] capitalize p-3 rounded-lg text-[#212529] mt-4"
        />
        <button
          type="submit"
          className="bg-[#3C1C6C] text-white font-light py-2 px-10 rounded-lg mt-4 w-full"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignUp;
