import React from "react";
import footer_logo from "../../assets/images/footer_logo.png";
import footer_img from "../../assets/images/footer_img.jpg";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center bg-bgFooter p-4 h-fit">
      <div className="grid md:grid-cols-4 w-fit md:w-full max-w-[1200px] gap-4 py-6">
        <div className="col-span-4 md:col-span-1 flex flex-col justify-center items-center">
          <div className="w-full flex justify-center items-center py-4">
            <img src={footer_logo} className="w-[170px]" alt="logo"></img>
          </div>
          <div className="w-full flex justify-center items-center">
            <img
              src={footer_img}
              className="w-full max-w-[260px]"
              alt="logo"
            ></img>
          </div>
          <div className="w-full text-center pt-4 py-8">
            <a href="." target="blank" className="text-white">
              Making HondaJet a Key Pillar of Honda’s Future
            </a>
          </div>
          <div className="flex flex-row md:flex-col justify-center items-center gap-4">
            <a
              href="."
              target="blank"
              className="flex justify-center items-center gap-2"
            >
              <Icon
                className="text-textGray w-6 h-6"
                icon="fa-brands:facebook-square"
              />
              <div className="flex justify-center items-center w-fit text-textGray">
                Facebook
              </div>
            </a>
            <a
              href="."
              target="blank"
              className="flex justify-center items-center gap-2"
            >
              <Icon
                className="text-textGray w-6 h-6"
                icon="simple-icons:instagram"
              />
              <div className="flex justify-center items-center w-fit text-textGray">
                Instagram
              </div>
            </a>
          </div>
        </div>

        <div className="border-y-[0.8px] border-solid md:border-y-0 border-divider col-span-4 md:col-start-3 md:col-span-1 flex flex-col items-center py-4 md:py-2 gap-4 text-white">
          <div className="h-fit">Corporate Profile</div>
          <div className="h-fit">Business & Innovation</div>
          <div className="h-fit">Brand</div>
          <div className="h-fit">Sustainability</div>
          <div className="h-fit">Investors</div>
          <div className="h-fit">Newsroom</div>
        </div>

        <div className="col-span-3 md:col-start-4 md:col-span-1 flex flex-col items-center gap-4 py-4 md:py-2 text-white">
          <div className="h-fit">World Links</div>
          <div className="h-fit">Motorsports</div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center md:w-full max-w-[1200px] border-t-[0.8px] border-solid border-divider pt-4 text-textGray gap-4 md:gap-8">
        <div className="text-sm text-center md:text-left">
          © Honda Motor Co., Ltd. and its subsidiaries and affiliates. All
          Rights Reserved.
        </div>
        <div className="flex flex-wrap justify-center items-center text-sm gap-4">
          <div className="w-fit h-fit hover:text-white hover:underline duration-200 cursor-pointer">
            Site
          </div>
          <div className="w-fit h-fit hover:text-white hover:underline duration-200 cursor-pointer">
            Terms and Conditions
          </div>
          <div className="w-fit h-fit hover:text-white hover:underline duration-200 cursor-pointer">
            Privacy Policy
          </div>
          <div className="w-fit h-fit hover:text-white hover:underline duration-200 cursor-pointer">
            Social Media Terms of Use
          </div>
          <div className="w-fit h-fit hover:text-white hover:underline duration-200 cursor-pointer">
            Cookie Policy
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
