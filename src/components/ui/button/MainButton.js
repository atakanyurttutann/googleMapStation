import React from "react";

const MainButton = ({ value, type }) => {
  return (
    <button
      type={type ? type : "submit"}
      className=" bg-[#227bbf]   text-white flex justify-center items-center w-full rounded py-3 "
    >
      {value}
    </button>
  );
};

export default MainButton;
