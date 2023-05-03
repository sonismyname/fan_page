import React, { useState } from "react";
import { BsMessenger } from "react-icons/bs";
import { VscChromeClose, VscCheck } from "react-icons/vsc";
import Scrollbars from "react-custom-scrollbars-2";
import { useEffect } from "react";
import firebase from "firebase/compat/app";
import { db, ref, push, onValue } from "../firebase";
import { child, get, set } from "firebase/database";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../store/actions";
import { toast } from "react-toastify";

const Chatbox = ({ name }) => {
  const [isShow, setIsShow] = useState(false);
  const dispatch = useDispatch();
  const [messages, setMassages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    onValue(ref(db, "messages"), (data) => {
      let getMsg = [];
      data.forEach((d) => {
        console.log(d.val());
        const data = {
          name: d.val().name,
          value: d.val().value,
        };
        getMsg.push(data);
      });
      dispatch(actions.setIdChat(getMsg.length + 1));
      setMassages(getMsg);
    });
  }, []);
  const handleSend = () => {
    // console.log(inputValue);
    if (inputValue == "") {
    } else {
      const lcData = JSON.parse(localStorage.getItem("persist:data_base_fake"));
      set(ref(db, `messages/${lcData.id_chat}`), {
        name: name,
        value: inputValue,
      });
      dispatch(actions.plusIdChat());
      setInputValue("");
    }
  };
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Enter') {
        const myButton = document.getElementById('myButton');
        if (myButton) {
          myButton.click();
        }
      }
    }
  
    document.addEventListener('keydown', handleKeyDown);
  
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="fixed bottom-10 right-10 rounded-full cursor-pointer hover:shadow-lg items-center justify-center z-50">
      <span>
        <BsMessenger
          onClick={(e) => setIsShow(true)}
          size={40}
          className="text-[#5bb6f7] animate-pulse"
        />
      </span>
      <div
        className={`fixed border bottom-10 rounded-lg right-10 bg-main-200 ${
          isShow ? "w-[350px] h-[450px]" : "w-0 h-0"
        } flex flex-col transition-all duration-500 ease-in-out`}
      >
        <span
          onClick={(e) => setIsShow(false)}
          className="flex justify-end hover:text-red-500"
        >
          <VscChromeClose size={24} />
        </span>
        <div className="flex w-[99%] h-[99%] m-auto bg-main-100 rounded-lg">
          {isShow ? (
            <div className="flex flex-col w-full">
              {name == "ADMIN" ? (
                <span className="text-center">Chat với chủ khách hàng</span>
              ) : (
                <span className="text-center">Chat với chủ shop</span>
              )}

              <Scrollbars style={{ width: "100%", height: 500 }}>
                {name == "ADMIN"
                  ? messages.map((element, index) => {
                      console.log(element.name);
                      if (element.name != "ADMIN") {
                        return (
                          <div
                            key={index}
                            className="flex m-2 gap-4 items-center"
                          >
                            <img
                              src="https://via.placeholder.com/400x400?text=Image%205"
                              className="w-10 h-10 object-contain rounded-full"
                            ></img>
                            {/* chat recive */}
                            <div className="flex flex-col">
                              <span className="text-[14px] font-medium">
                                {element.name}
                              </span>
                              <span className="text-[12px] font-thin border px-2 py-1 rounded-full">
                                {element.value}
                              </span>
                            </div>
                          </div>
                        );
                      } else {
                        return (
                          <div key={index} className="flex justify-end">
                            <span className="text-[12px] font-thin border px-2 py-1 rounded-full">
                              {element.value}
                            </span>
                          </div>
                        );
                      }
                    })
                  : messages.map((element, index) => {
                      if (element.name == "ADMIN") {
                        return (
                          <div
                            key={index}
                            className="flex m-2 gap-4 items-center"
                          >
                            <img
                              src="https://via.placeholder.com/400x400?text=Image%205"
                              className="w-10 h-10 object-contain rounded-full"
                            ></img>
                            {/* chat recive */}
                            <div className="flex flex-col">
                              <span className="text-[14px] font-medium">
                                {element.name}
                              </span>
                              <span className="text-[12px] font-thin border px-2 py-1 rounded-full">
                                {element.value}
                              </span>
                            </div>
                          </div>
                        );
                      } else {
                        return (
                          <div key={index} className="flex justify-end">
                            <span className="text-[12px] font-thin border px-2 py-1 rounded-full">
                              {element.value}
                            </span>
                          </div>
                        );
                      }
                    })}
                {/* <div className="flex m-2 gap-4 items-center">
                  <img
                    src="https://via.placeholder.com/400x400?text=Image%205"
                    className="w-10 h-10 object-contain rounded-full"
                  ></img>
                  <div className="flex flex-col">
                    <span className="text-[14px] font-medium">Admin</span>
                    <span className="text-[12px] font-thin border px-2 py-1 rounded-full">
                      Mua đii
                    </span>
                  </div>
                </div> */}
                {/* chat send */}
                {/* <div className="flex justify-end">
                  <span className="text-[12px] font-thin border px-2 py-1 rounded-full">
                    Bao nhiêu tiền?
                  </span>
                </div> */}
              </Scrollbars>
              <div className="flex">
                <input
                  value={inputValue}
                  onChange={(e) => {
                    setInputValue(e.target.value);
                  }}
                  type="text"
                  className="focus:outline-none border m-2 px-2 py-1 rounded-lg w-[80%]"
                ></input>
                <button
                  id="myButton"
                  onClick={handleSend}
                  className="bg-main-500 hover:shadow-md hover:text-[#fff] rounded-md px-2 h-8 my-auto"
                >
                  Gửi
                </button>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Chatbox;
