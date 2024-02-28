import { FaTimes, FaBars } from "react-icons/fa";
import { useState } from "react";

const links = [
  {
    id: 1,
    title: "Home",
    to: "/Home",
  },

  {
    id: 2,
    title: "Contact Us",
    to: "/Contact Us",
  },

  {
    id: 2,
    title: "FAQS",
    to: "/FAQS",
  },
];

const Hero = () => {
  const [nav, setNavBar] = useState(false);
  return (
    <div className="container flex gap-2 justify-between items-center h-20 sticky top-0 w-full bg-white">
      <h1 className="text-[#3C1C6C] text-3xl font-bold  cursor-pointer flex justify-between items-center h-20 hover:scale-105 duration-300">
        EMERALD
      </h1>
      <ul className=" hidden md:flex ml-auto cursor-pointer">
        {links.map(({ id, title, to }) => (
          <li
            key={id}
            className=" px-4 cursor-pointer py-4 font-xs text-sm text-slate-600 hover:scale-105 duration-300"
          >
            <a href={to}>{title}</a>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNavBar(!nav)}
        className="cursor-pointer z-10 md:hidden"
      >
        {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
      </div>
      {nav && (
        <ul className="flex md:hidden flex-col justify-center items-center absolute top-0 left-0 h-screen w-full text-slate-600 bg-white">
          {links.map(({ id, title, to }) => (
            <li key={id} className="cursor-pointer py-6 font-sm text-xl">
              <a href={to}>{title}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Hero;
