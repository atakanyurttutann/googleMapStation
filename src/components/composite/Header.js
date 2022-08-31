import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import nookies from "nookies";
import { logoutAction } from "../../redux/actions/userActions";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const { userData, userLogin } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userLogin) {
      navigate("/");
    }
  }, [navigate, userLogin]);
  return (
    <div className=" w-full bg-white border-b flex justify-between lg:px-10 px-4  text-gray-800 font-semibold py-5 items-center">
      <div>
        <img
          className=" w-[100px]  lg:w-52 h-auto"
          alt=""
          src="/images/logo.png"
        />
      </div>
      <div className=" relative flex gap-3 items-center">
        <div>
          {userData.name} {userData.surname}
        </div>
        <div
          className=" cursor-pointer"
          onClick={() => {
            dispatch(logoutAction());
          }}
        >
          Çıkış Yap
        </div>
      </div>
    </div>
  );
};

export default Header;
