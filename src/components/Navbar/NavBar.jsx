import { NavDetials } from "../index";
import Logo from "../../assets/logo.png";
import React from "react";
import { Menu, X } from "lucide-react";

const menuItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Menu",
    href: "/our_menu",
  },
  {
    name: "About",
    href: "/about_us",
  },
  {
    name: "Contact",
    href: "/contact_us",
  },
  {
    name: "Blog",
    href: "/blog_and_news",
  },
];

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative w-full bg-red-40">
      <NavDetials />
      <div className="mx-auto flex max-w-7xl h-16 items-center justify-between px-4 py-2  sm:px-6 lg:px-8 ">
        <div className="inline-flex items-center space-x-2 px-8 ml-12">
          <img src={Logo} alt="logo" className="h-[5rem] w-[4rem] object-fit" />
        </div>
        <div className="hidden grow items-start lg:flex ml-12">
          <ul className="ml-12 inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="inline-flex items-center text-[13px] font-thin text-gray-800 mx-3  hover:text-[#F38220]"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden space-x-2 mr-32 lg:block">
          <button
            type="button"
            className="text-[#F38220] font-medium rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center me-2  "
          >
            <svg
              className="w-3.5 h-3.5 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 21"
            >
              <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
            </svg>
            Cart
          </button>

          <button
            type="button"
            className="py-3 px-5 me-2 mb-2 text-sm font-medium text-gray-100 focus:outline-none bg-[#F38220] rounded-lg "
          >
            Login/Register
          </button>
        </div>
        <div className="lg:hidden">
          <Menu
            onClick={toggleMenu}
            className="h-6 w-6 cursor-pointer text-[#f38220]"
          />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <img
                      src={Logo}
                      alt="logo"
                      className="w-16 h-16 object-fit"
                    />
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X
                        className="h-6 w-6 text-[#f38220] "
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900 font-sans-serif">
                          {item.name}
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
                <div className="mt-2 space-y-2">
                  <button
                    type="button"
                    className="w-full rounded-md bg-[#f38220] px-3 py-2 text-sm font-semibold font-sans-serif text-white shadow-sm hover:bg-[#381f09]"
                  >
                    Log In/Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
