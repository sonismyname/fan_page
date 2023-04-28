import React from "react";

const StateBox = (state) => {
  return (
    <div className="flex h-screen w-auto z-20">
      <div
        onClick={() => {
          window.history.back();
        }}
        className="fixed w-screen h-screen bottom-0 top-0 right-0 z-100 bg-[rgba(0,0,0,0.5)] justify-center"
      ></div>
      <div
        id="form"
        className="fixed flex flex-col top-0 right-0 left-0 w-[40%] h-[200px]  m-auto mt-[100px] rounded-[20px] bg-[#fff] animate-slide-right z-200"
      >
        <div className="flex flex-col text-[#622323] text-[16px] p-2 gap-4">
          <h1 className="text-[24px] font-semibold uppercase text-center">
            {state}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default StateBox;
