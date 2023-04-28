import React, { useState } from "react";
import path from "../../utils/path";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [inputUserName, setInputUserName] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const handleLogin = () => {
    navigate(`${path.DASHBOARD}/order`);
  };
  return (
    <div className="flex h-screen w-auto z-20">
      <div
        onClick={() => {
          navigate(path.PUBLIC);
        }}
        className="fixed w-screen h-screen bottom-0 top-0 right-0 z-100 bg-[rgba(0,0,0,0.5)] justify-center"
      ></div>
      <div
        id="form"
        className="fixed flex flex-col top-0 right-0 left-0 w-[40%] h-[200px]  m-auto mt-[120px] rounded-[20px] bg-[#fff] animate-slide-right z-200"
      >
        <div className="flex flex-col text-[#622323] text-[16px] p-2 gap-4">
          <h1 className="text-[24px] font-semibold uppercase text-center">
            Đăng nhập ADMIN
          </h1>
          <div className="flex">
            <label className="w-[30%]">Tên ADIMIN:</label>
            <input
              value={inputUserName}
              onChange={(e) => setInputUserName(e.target.value)}
              type="text"
              className="w-[60%] focus:outline-none py-1 px-2 rounded-lg border border-[#622323]"
            />
          </div>
          <div className="flex">
            <label className="w-[30%]">Mật khẩu:</label>
            <input
              value={inputPassword}
              onChange={(e) => setInputPassword(e.target.value)}
              type="password"
              className="w-[60%] focus:outline-none py-1 px-2 border border-[#622323] rounded-lg"
            />
          </div>
          <button
            onClick={handleLogin}
            className="flex m-auto text-center border border-[#622323] rounded-lg hover:text-[#fff] hover:bg-[#622323] px-10 py-1"
          >
            Đăng nhập
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
