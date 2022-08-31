import React from "react";

const MainInput = ({
  type = "text",
  required,
  name,
  placeholder,
  value,
  id,
}) => {
  return (
    <input
      id={id}
      placeholder={placeholder}
      required={required ? required : false}
      type={type}
      name={name}
      value={value}
      className="border-b p-2 disabled:text-fittyGrayPale leading-6 w-full pb-[10px] appearance-none text-[#2D3339]  font-medium outline-none  bg-white  text-[16px] "
    />
  );
};

export default MainInput;
