import React from "react";

function Button({ type, btnName }) {
  return (
    <button
      type={type}
      className="w-full rounded-md bg-[#f38220] px-3 py-2 text-sm font-light font-sans-serif text-white shadow-sm"
    >
      {btnName}
    </button>
  );
}

export default Button;
