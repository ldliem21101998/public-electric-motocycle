import React from "react";
import { Icon } from "@iconify/react";

const BlogCard = ({ item }) => {
  return (
    <div className="w-full lg:w-1/2 flex flex-col bg-neutral-100">
      <div className="w-full">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-auto object-fit"
        />
      </div>
      <div className="flex flex-col sm:p-2 md:p-6 lg:p-10 p-4">
        <div className="text-primary text-base md:text-xl font-semibold h-fit">
          {item.tag}
        </div>
        <div className="text-primary text-ellipsis text-base md:text-2xl font-semibold line-clamp-2 mt-3 mb-8">
          {item.title}
        </div>
        <div className="flex justify-center items-center bg-textBlue py-2 px-6 text-white rounded-full w-fit h-fit text-base font-semibold">
          Learn more
          <Icon className="text-white w-6 h-6 " icon="mingcute:right-fill" />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
