import React from "react";
import { useForm } from "react-hook-form";
import { Button, Layout, Input } from "../../index";
import { Link } from "react-router-dom";

function LoginPage() {
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
        {/* login start  */}
        <section className="md:mt-12 mb-12 md:mb-0">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
              <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                <h2 className="text-2xl font-normal leading-tight text-black sm:text-4xl font-sans-serif">
                  Welcome Back
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                  Don&apos;t have an account?{" "}
                  <Link
                    to="/sign-up"
                    title=""
                    className="font-semibold text-black transition-all duration-200 hover:underline"
                  >
                    Create an account
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
                      <Button type="submit" btnName="Sign in" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="h-auto w-full mb-12 ">
              <img
                className="mx-auto md:h-[35rem] md:w-[35rem] h-full w-full rounded-md object-cover"
                src="https://cdn.pixabay.com/photo/2020/09/21/14/07/meal-5590186_1280.jpg"
                alt=""
              />
            </div>
          </div>
        </section>
        {/* login ends */}
      </Layout>
    </>
  );
}

export default LoginPage;
