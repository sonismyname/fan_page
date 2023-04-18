import React from "react";
import icons from "../../utils/icons";

const BackArrow = () => {
  const { AiOutlineRollback } = icons;
  return (
    <div
      onClick={(e) => {
        window.history.back();
      }}
      className="flex gap-2 items-center text-gray-500 cursor-pointer"
    >
      <AiOutlineRollback size={30} />
      <h1 className="text-[30px]">Quay về</h1>
    </div>
  );
};

export default BackArrow;
