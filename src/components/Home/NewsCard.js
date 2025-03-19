import React from "react";
import { Icon } from "@iconify/react";

const NewsCard = ({ item }) => {
  return (
    <div className="w-full h-fit flex flex-col cursor-pointer justify-center">
      <img
        src={item.img}
        alt={item.title}
        className="w-full h-auto object-fit mb-3"
      />
      <div className="flex flex-col h-fit mt-1 mb-2">
        <div className="font-semibold text-lg text-textGray">{item.tag}</div>
        <h1 className="text-base xl:text-2xl font-semibold h-full overflow-hidden text-primary">
          {item.title}
        </h1>
      </div>
      <div className="flex justify-center items-center w-fit cursor-pointer">
        <div className="uppercase font-semibold text-textBlue">Learn more</div>
        <Icon className="text-textBlue w-6 h-6 " icon="mingcute:right-fill" />
      </div>
    </div>
  );
};

export default NewsCard;
