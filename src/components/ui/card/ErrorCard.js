import { ErrorIcon } from "../../../commons/icons/index";

const ErrorCard = ({ text }) => {
  return (
    <div className=" w-full p-4 border border-[#FF3D3D] my-4  items-center rounded-[5px] flex">
      <div className="  mr-2 ">
        <ErrorIcon />
      </div>{" "}
      {text}
    </div>
  );
};

export default ErrorCard;
