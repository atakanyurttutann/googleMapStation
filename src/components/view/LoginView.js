import React, { useEffect } from "react";
import { MainButton } from "../ui/button";
import { MainInput } from "../ui/input";
import { useSelector, useDispatch } from "react-redux";
import { ErrorCard } from "../ui/card";
import { loginAction } from "../../redux/actions/userActions";
import { useNavigate } from "react-router-dom";

const LoginView = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { userLogin, loginErrorMessage } = useSelector((state) => state.user);
  const loginSumbit = (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    dispatch(loginAction(data));
  };
  useEffect(() => {
    if (userLogin) {
      navigate("/home");
    }
  }, [navigate, userLogin]);

  return (
    <div>
      <div className="grid grid-cols-12 h-screen bg-[#f8f9f9]">
        <div className=" lg:col-span-5 col-span-12 flex   justify-center items-center  h-full lg:px-[80px] px-[30px]   w-full relative">
          <div className=" bg-white  w-full h-[570px] rounded  flex justify-center items-center  ">
            <div className="  flex justify-center items-center w-full">
              <div className=" w-full px-10">
                <form onSubmit={loginSumbit}>
                  <div className=" flex w-full justify-center items-center">
                    {" "}
                    <img src="/images/logo.png" />
                  </div>

                  <div className=" mt-20">
                    {loginErrorMessage && (
                      <ErrorCard text={loginErrorMessage} />
                    )}

                    <label className=" text-[#2d3339bf] text-[14px]">
                      Email
                    </label>
                    <MainInput type="email" name={"email"} required={"true"} />
                  </div>
                  <div className=" mt-10">
                    <label className="text-[#2d3339bf] text-[14px]">
                      Şifre
                    </label>
                    <MainInput
                      name={"password"}
                      required={"true"}
                      type="password"
                    />
                  </div>
                  <div className=" mt-8">
                    <MainButton type={"sumbit"} value={"Giriş Yap"} />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className=" absolute bottom-5 flex  w-full justify-center items-center text-[#2D3339BF] text-sm">
            Kenkart © 2022. Her hakkı saklıdır
          </div>
        </div>

        <div className=" lg:col-span-7 col-span-12">
          <div className="   b loginScreen  w-full h-full bg-center  bg-cover items-center flex lg:py-0 py-[80px]  lg:px-[100px] px-[30px]  text-white  justify-center  ">
            <div>
              <div className=" font-semibold lg:text-[40px] text-[30px] lg:leading-[58px] leading-[40px] lg:mb-0 mb-[40px] ">
                Kenkart
              </div>
              <div>
                Dünya standartlarında şehirlere özgü dünya Akıllı Ulaşım
                Sistemleri üretmekteyiz.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginView;
