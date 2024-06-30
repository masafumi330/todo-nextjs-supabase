import React from "react";

const Input: React.FC = () => {
  return <div>
    <form className="flex items-center my-4">
      <input
        className="shadow border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:bg-gray-100 focus:bg-white"
        type="text"
        placeholder="todo" />
      <button type="submit" className="rounded-lg bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 focus:outline-none focus:shadow-outline">+</button>
    </form>
  </div>;
};

export default Input;