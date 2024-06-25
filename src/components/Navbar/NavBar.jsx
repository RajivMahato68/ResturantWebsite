import React from "react";
import NavDetials from "./NavDetials";
import momoStreet from "../../assets/logo.png";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";

const menuItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Menu",
    href: "#",
    subItems: [
      { name: "Main Course", href: "#" },
      { name: "Appetizers", href: "#" },
      { name: "Desserts", href: "#" },
      { name: "Drink", href: "#" },
    ],
  },
  {
    name: "About",
    href: "#",
    subItems: [
      { name: "History", href: "#" },
      { name: "Contact Us", href: "#" },
      { name: "Blog & News", href: "#" },
    ],
  },
  {
    name: "OrderOnline",
    href: "#",
  },
];

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeDesktopItem, setActiveDesktopItem] = React.useState(null);
  const [activeMobileItem, setActiveMobileItem] = React.useState(null);
  const [activeItem, setActiveItem] = React.useState("Home");
  const chevronItems = ["Menu", "About"]; // Items to show ChevronDown

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDesktopItemClick = (itemName) => {
    setActiveDesktopItem(activeDesktopItem === itemName ? null : itemName);
    setActiveItem(itemName);
  };

  const handleMobileItemClick = (itemName) => {
    setActiveMobileItem(activeMobileItem === itemName ? null : itemName);
    setActiveItem(itemName);
  };

  return (
    <>
      <header className="w-full md:h-28 h-20 bg-[#ffffff]">
        <NavDetials />
        {/* desktop view start here */}
        <div className="relative w-full ">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
            <div className="inline-flex md:pl-20 pl-auto items-center space-x-2">
              <img
                className="md:h-16 md:w-16 h-12 w-12 object-fit object-cover"
                src={momoStreet}
                alt="MoMo Street"
              />
            </div>
            <div className="hidden grow pl-12 items-start lg:flex">
              <ul className="ml-32 inline-flex items-center space-x-16">
                {/* menu map start here */}
                {menuItems.map((item) => (
                  <li
                    key={item.name}
                    className="relative ml-32"
                    onClick={() => handleDesktopItemClick(item.name)}
                  >
                    <a
                      href={item.href}
                      className={`inline-flex items-center text-md font-normal font-sans-serif hover:text-[#f38221] ${
                        activeItem === item.name
                          ? "text-[#f38221]"
                          : "text-gray-800"
                      }`}
                    >
                      {item.name}
                      {/* showing and hiding arrow for menu and about */}
                      {chevronItems.includes(item.name) && (
                        <span>
                          {activeDesktopItem === item.name ? (
                            <ChevronUp className="ml-2 h-6 w-6 text-[#f38221]" />
                          ) : (
                            <ChevronDown className="ml-2 h-6 w-6" />
                          )}
                        </span>
                      )}
                      {/* show and hide menu ends here */}
                    </a>
                    {/* subitems for menu and about start here */}
                    {activeDesktopItem === item.name && item.subItems && (
                      <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                        {item.subItems.map((subItem) => (
                          <li key={subItem.name}>
                            <a
                              href={subItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#f38221]"
                            >
                              {subItem.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                    {/* ends here of subItems */}
                  </li>
                ))}
                {/* login and singup buttons */}
                <button
                  type="button"
                  className="rounded-md bg-[#f38221] hover:bg-[#E9252F] border border-[#f38221]  hover:border-[#e9252f] px-2 py-2 text-md font-normal font-sans-serif text-gray-100 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f38221]"
                >
                  Login/Register
                </button>
              </ul>
            </div>
            {/* desktop view ends here */}
            {/* for mobile view start here */}
            <div className="lg:hidden">
              <Menu
                onClick={toggleMenu}
                className="h-6 w-6 cursor-pointer text-[#f38221]"
              />
            </div>
            {isMenuOpen && (
              <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
                <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="px-5 pb-6 pt-5">
                    <div className="flex items-center justify-between">
                      <div className="-mr-2">
                        <button
                          type="button"
                          onClick={toggleMenu}
                          className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >
                          <span className="sr-only">Close menu</span>
                          <X
                            className="h-6 w-6 text-[#f38221]"
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                    </div>
                    <div className="mt-6">
                      <nav className="grid gap-y-4">
                        {menuItems.map((item) => (
                          <div key={item.name}>
                            <a
                              href={item.href}
                              className={`-m-3 flex items-center justify-between rounded-md p-3 text-sm font-semibold hover:bg-gray-50 ${
                                activeItem === item.name
                                  ? "text-[#f38221]"
                                  : "text-gray-900"
                              }`}
                              onClick={() => handleMobileItemClick(item.name)}
                            >
                              <span className="ml-3 text-base font-medium">
                                {item.name}
                              </span>
                              {chevronItems.includes(item.name) && (
                                <span>
                                  {activeMobileItem === item.name ? (
                                    <ChevronUp className="ml-2 h-4 w-4" />
                                  ) : (
                                    <ChevronDown className="ml-2 h-4 w-4" />
                                  )}
                                </span>
                              )}
                            </a>
                            {activeMobileItem === item.name &&
                              item.subItems && (
                                <ul className="ml-6 mt-2 shadow-xl shadow-gray-200 rounded-xl border border-gray-200">
                                  {item.subItems.map((subItem) => (
                                    <li key={subItem.name}>
                                      <a
                                        href={subItem.href}
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                      >
                                        {subItem.name}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              )}
                          </div>
                        ))}
                      </nav>
                    </div>
                    <div className="mt-2 space-y-2">
                      <button
                        type="button"
                        className="w-full rounded-md bg-[#f38221] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#E9252F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E9252F]"
                      >
                        Login/Register
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* mobile view ends here */}
          </div>
        </div>
      </header>
    </>
  );
}

export default NavBar;
