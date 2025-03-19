import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import logo from "../../assets/images/logo.png";

const Header = () => {
  // { img: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Honda_Logo.svg", title: "", path: "" },

  const data = [
    { img: "", title: "Corporate Profile", path: "" },
    { img: "", title: "Business and Innovation", path: "" },
    { img: "", title: "Brand", path: "" },
    { img: "", title: "Sustainability", path: "" },
    { img: "", title: "Investors", path: "" },
    { img: "", title: "Newsroom", path: "" },
  ];

  const seconddata = [
    { img: "", title: "World Links", path: "" },
    { img: "", title: "Motorsports", path: "" },
  ];

  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      // Scroll down - hide header
      setIsVisible(false);
      console.log("scroll down");
    } else {
      // Scroll up - show header
      setIsVisible(true);
      console.log("scroll up");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header className="w-full text-white z-10 top-0 bg-black">
      <nav className="mx-auto px-[30px] flex items-center justify-between fixed top-0 h-[60px] bg-black z-10 w-full">
        <div className="flex items-center gap-10 lg:max-xl:gap-2 w-full lg:w-[80%] relative">
          <div className="h-[60px] w-full lg:w-[90px] flex items-center justify-center cursor-pointer">
            <img src={logo} className="w-[70px]" />
          </div>
          <ul className="lg:max-xl:text-sm list-none flex items-center justify-start gap-6 hidden lg:flex">
            {data.map((item, index) => {
              return (
                <li className="header_menu_item whitespace-nowrap w-fit flex items-center cursor-pointer justify-center">
                  {item.title}
                </li>
              );
            })}
          </ul>
          <div className="absolute top-[50%] absolute_center_vertical right-0 w-[30px] h-[30px] lg:hidden">
            <Icon
              className="w-[30px] h-[30px]"
              icon={click ? "la:times" : "la:bars"}
              onClick={() => handleClick()}
            />
          </div>
        </div>
        <div className="w-[19%] hidden lg:block">
          <ul className="text-sm list-none flex items-center justify-evenly">
            {seconddata.map((item, index) => {
              return (
                <li className="header_menu_item w-fit flex items-center cursor-pointer justify-center">
                  {item.title}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Mobile */}
        <div
          className={`lg:hidden bg-[#1f3d4738] backdrop-blur-xl absolute top-[60px] ${
            click ? "left-[0]" : "left-[-100%]"
          } w-[100vw] p-4 h-[100vh] duration-1000`}
        >
          <ul className="list-none flex items-center justify-start gap-10 flex-col">
            {data.concat(seconddata).map((item, index) => {
              return (
                <li className="w-fit h-fit flex items-center cursor-pointer justify-center hover:border-b-[1px] hover:border-red-400 text-white">
                  {item.title}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
      <div
        className={`fixed top-[60px] w-full h-[50px] bg-white duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      ></div>
    </header>
  );
};

export default Header;
