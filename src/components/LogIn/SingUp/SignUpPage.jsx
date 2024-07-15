import React from "react";

import { useForm } from "react-hook-form";
import { Button, Layout, Input } from "../../index";

import { Link } from "react-router-dom";

function SignUpPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Handle form submission logic here
    console.log(data);
  };
  return (
    <>
      <Layout>
        {/* Register Form start here */}
        <section className="md:mt-12 mb-12 md:mb-0">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
              <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                <h2 className="text-2xl font-normal leading-tight text-black sm:text-4xl font-sans-serif">
                  Welcome Back
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                  Already Have an account?{" "}
                  <Link
                    to="/login"
                    title=""
                    className="font-semibold text-black transition-all duration-200 hover:underline"
                  >
                    Login Here
                  </Link>
                </p>
                <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
                  <div className="space-y-5">
                    <div>
                      <label
                        htmlFor="email"
                        className="text-base font-medium text-gray-900"
                      >
                        {" "}
                        Name{" "}
                      </label>
                      <div className="mt-2">
                        <Input
                          type="text"
                          placeholder="Virat Kohli"
                          register={register}
                          name="Name"
                          errors={errors}
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="text-base font-medium text-gray-900"
                      >
                        {" "}
                        Email{" "}
                      </label>
                      <div className="mt-2">
                        <Input
                          type="email"
                          placeholder="example@gmail.com"
                          register={register}
                          name="email"
                          errors={errors}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="password"
                          className="text-base font-medium text-gray-900"
                        >
                          {" "}
                          Password{" "}
                        </label>
                      </div>
                      <div className="mt-2">
                        <Input
                          type="password"
                          placeholder="Password"
                          register={register}
                          name="password"
                          errors={errors}
                        />
                      </div>
                    </div>
                    <div>
                      <Button type="submit" btnName="Create An Account" />
                    </div>
                  </div>
                </form>
                <div className="mt-3 space-y-3">
                  <button
                    type="button"
                    className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                  >
                    <span className="mr-2 inline-block">
                      <svg
                        className="h-6 w-6 text-rose-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                      </svg>
                    </span>
                    Sign in with Google
                  </button>
                  <button
                    type="button"
                    className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                  >
                    <span className="mr-2 inline-block">
                      <svg
                        className="h-6 w-6 text-[#2563EB]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                      </svg>
                    </span>
                    Sign in with Facebook
                  </button>
                </div>
              </div>
            </div>
            <div className="h-full w-full">
              <img
                className="mx-auto md:h-[40rem] md:w-[35rem] h-full w-full rounded-md object-cover"
                src="https://cdn.pixabay.com/photo/2020/09/21/14/07/meal-5590186_1280.jpg"
                alt=""
              />
            </div>
          </div>
        </section>
        {/* ends here */}
      </Layout>
    </>
  );
}

export default SignUpPage;
