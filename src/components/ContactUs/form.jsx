
import React from "react";

import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

 
  const InputComponent = ({ type, placeholder, register, name, errors, className, rows, cols }) => {
    if (type === "textarea") {
      return (
        <textarea
          placeholder={placeholder}
          {...register(name)}
          rows={rows}
          cols={cols}
          className={`border  p-2 rounded  w-[80%] h-20  ml-10 ${className} ${errors[name] ? 'border-[#696868]' : 'border-gray-300'}`}
        />
      );
    }

    return (
      <input
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className={`border p-2 rounded-xl w-[80%]  h-14  bg-[#f9f9f9] ml-10 ${className} ${errors[name] ? 'border-[#696868]' : 'border-[#afaeae]'}`}
      />
    );

    
  };

  const ButtonComponent = ({ type, btnName }) => (
    <button
      type={type}
      className="border p-2 rounded-full w-[80%] ml-10 bg-[#f38220] text-black font-semibold text-[20px]"
    >
      {btnName}
    </button>
  );

  return (
    <div className="h-auto w-full max-w-md xl:w-[460px] md:h-[475px]  bg-white border border-[#dfdfdf] rounded-xl flex flex-col items-center mt-8 md:mt-0 md:ml-8 shadow-lg pb-5">
    <div className="w-[90%]">
      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 flex flex-col">
        <div className="space-y-5 w-full">
          <InputComponent
            type="text"
            placeholder="Full Name*"
            register={register}
            name="Name"
            errors={errors}
           
          />
          <InputComponent
            type="email"
            placeholder="Email*"
            register={register}
            name="email"
            errors={errors}
            
          />
          <InputComponent
            type="text"
            placeholder="Phone Number*"
            register={register}
            name="number"
            errors={errors}
          />
          <InputComponent
            type="textarea"
            placeholder="Your message..."
            register={register}
            name="textArea"
            errors={errors}
            rows={5}
            cols={40}
          />
          <ButtonComponent type="submit" btnName="Send Message"/>
        </div>
      </form>
    </div>
  </div>
  );
};

export default Contact;