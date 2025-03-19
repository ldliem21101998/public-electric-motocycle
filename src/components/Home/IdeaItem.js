import React from "react";

const IdeaItem = ({ idea, index }) => {
  return (
    <div className="flex flex-col justify-center items-center text-center px-4 md:px-0">
      <div className="w-9 h-9 rounded-full border-2 border-primary text-primary text-semibold flex justify-center items-center">
        <p className="text-[21px] text-center">{index + 1}</p>
      </div>
      <div className="text-primary text-[18px] font-semibold h-max w-2/3 mt-4 mb-2">
        {idea.title}
      </div>
      <p className="text-center line-clamp-4">{idea.describe}</p>
    </div>
  );
};

export default IdeaItem;
