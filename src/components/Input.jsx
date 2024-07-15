import React from "react";

function Input({ type, placeholder, register, name, errors }) {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        {...register(name, {
          required: `${
            name.charAt(0).toUpperCase() + name.slice(1)
          } is required`,
        })}
        className={`flex h-10 w-full rounded-md border ${
          errors[name] ? "border-red-500" : "border-gray-300"
        } bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50`}
      />
      {errors[name] && (
        <span className="text-red-500 text-sm mt-1">
          {errors[name].message}
        </span>
      )}
    </>
  );
}

export default Input;
