import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import path from "../utils/path";
import { toast } from "react-toastify";

const Form = () => {
  const navigate = useNavigate();
  const form = useRef(null);
  useEffect(() => {
    const form_el = form.current;
    console.log(form_el); // 'Hello world!'
    // form_el.addEventListener("mousedown", (event) => {
    //   console.log(event);
    //   //   window.history.back();
    // });
    // form_el.addEventListener("click", (event) => {
    //     console.log('click')
    // });
  }, []);

  //   console.log(form);
  //   form?.addEventListener("mousedown", (event) => {
  //     if (!form?.contains(event.target)) {
  //       // Người dùng đã nhấp chuột ra khỏi form
  //       // Thực hiện hành động tương ứng
  //       console.log("out form");
  //     }
  //     console.log(form)
  //   });
  const handleSubmit = (e) => {
    console.log("Nộp");
    const form = document.getElementById("form");
    console.log(form);
    form?.classList?.remove("animate-slide-right");
    form?.classList?.add("animate-slide-left");
    setTimeout(() => {
      navigate(path.PUBLIC);
      toast.success('Gửi thành công!!')
    }, 400);
};
  return (
    <div className="flex h-screen w-auto">
      <div
        onClick={() => {
          navigate(path.PUBLIC);
        }}
        className="absolute w-screen h-screen bottom-0 top-0 right-0 z-100 bg-[rgba(0,0,0,0.5)] justify-center"
      ></div>
      <div
        ref={form}
        id="form"
        className="absolute flex flex-col top-0 right-0 left-0 w-[60%] h-[600px] border border-red-500 m-auto mt-[100px] bg-main-200 animate-slide-right z-200"
      >
        Form
        <button onClick={handleSubmit} className="border border-red-400 p-4">
          Nộp
        </button>
      </div>
    </div>
  );
};

export default Form;
