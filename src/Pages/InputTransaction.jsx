import { useState } from "react";

// eslint-disable-next-line react/prop-types
const InputTransaction = ({ handleSubmit, isSubmitting }) => {
  const [input, setInput] = useState("");
  const handleSubmitInput = async (e) => {
    e.preventDefault();
    handleSubmit(Number(input));
    setInput("");
  };

  return (
    <div className="p-10 m-4">
      <h1 className="text-[#3C1C6C] font-semibold text-3xl">Hey There!</h1>
      <h1 className="text-xl mb-4 text-[#232323]">
        We are glad to have you here!
      </h1>
      <form className="flex flex-col items-start" onSubmit={handleSubmitInput}>
        <input
          type="number"
          name=""
          id="Transaction"
          placeholder="Enter this month income"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border-gray-400 outline rounded-md max-w-64 w-full h-10 px-6"
        />
        <button
          disabled={isSubmitting}
          type="submit"
          className="py-2 px-6 rounded-lg bg-[#3c1c6c] mt-4 text-white"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default InputTransaction;
