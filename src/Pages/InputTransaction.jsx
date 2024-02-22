import { useState } from "react";

const InputTransaction = ({ dataValue, onValueChange, onButtonClick }) => {
  const [changes, setChanges] = useState(false);

  const handleClick = () => {
    setChanges(!changes);
    onButtonClick(!changes);
  };

  return (
    <div className="p-4">
      <h1 className="text-[#232323] font-semibold text-3xl">Hey There!</h1>
      <h1 className="text-4xl mb-4 text-[#232323]">
        We are glad to have you here!
      </h1>
      <form action="" className="border-gray outline rounded-lg w-[50%]">
        <input
          type="text"
          name=""
          id="Transaction"
          placeholder="Enter this month income"
          value={dataValue}
          onChange={(e) => onValueChange(Number(e.target.value))}
        />
      </form>
      <button
        onClick={handleClick}
        className="py-2 px-6 rounded-lg bg-[#3c1c6D] mt-4 text-white"
      >
        Enter
      </button>
    </div>
  );
};

export default InputTransaction;
