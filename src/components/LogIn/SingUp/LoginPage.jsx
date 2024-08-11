import { useForm } from "react-hook-form";
import { Button, Layout, Input } from "../../index";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUpPage() {
  const navigate = useNavigate();
  const {
    register: inputRef,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // data.preventDefault();
    try {
      const res = await axios.post(
        "https://restaurantmanagement.amitysoftcs.com/api/login",
        data
      );
      if (res.data) {
        console.log("Login  successful:", res.data);
        navigate("/");
      } else {
        console.log("Login failed:", res.data);
      }
    } catch (error) {
      console.log("Error during login:", error);
    }
  };

  return (
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
                Create an account?{" "}
                <Link
                  to="/sign-up"
                  title=""
                  className="font-semibold text-black transition-all duration-200 hover:underline"
                >
                  Register Here
                </Link>
              </p>
              <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor="email"
                      className="text-base font-medium text-gray-900"
                    >
                      Email
                    </label>
                    <div className="mt-2">
                      <Input
                        type="email"
                        placeholder="example@gmail.com"
                        inputRef={inputRef}
                        name="email"
                        errors={errors}
                      />
                      {errors.email && (
                        <p className="text-red-500">{errors.email.message}</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="text-base font-medium text-gray-900"
                    >
                      Password
                    </label>
                    <div className="mt-2">
                      <Input
                        type="password"
                        placeholder="Password"
                        inputRef={inputRef}
                        name="password"
                        errors={errors}
                      />
                      {errors.password && (
                        <p className="text-red-500">
                          {errors.password.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Button type="submit" btnName="Log in" />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="h-full w-full">
            <img
              className="mx-auto md:h-[35rem] md:w-[35rem] h-full w-full rounded-md object-cover"
              src="https://cdn.pixabay.com/photo/2020/09/21/14/07/meal-5590186_1280.jpg"
              alt=""
            />
          </div>
        </div>
      </section>
      {/* ends here */}
    </Layout>
  );
}

export default SignUpPage;
