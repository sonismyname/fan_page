import React, { useState, useEffect } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { database, ref, push, onValue } from "../firebase";
const Testchat = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  useEffect(() => {
    onValue(ref(database, "message"), (data) => {
      let getMsg = [];
      data.forEach((msg) => {
        getMsg.push(msg.val());
      });
      setMessages(getMsg);
    });
  }, []);
  const handleSendMessage = () => {
    push(ref(database, "message"), {
      name: "hải",
      message: inputMessage,
    });
  };
  return (
    <div className="flex flex-col w-full h-[600px]">
      <span className="text-center">Chat với chủ shop</span>
      <div className="flex flex-col">
        <ul>
          {messages.map((el, index) => (
            <li key={index}>{el}</li>
          ))}
        </ul>
        <div className="flex">
          <input
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            type="text"
            className="focus:outline-none border m-2 px-2 py-1 rounded-lg w-[80%]"
          ></input>
          <button
            onClick={handleSendMessage}
            className="bg-main-500 hover:shadow-md hover:text-[#fff] rounded-md px-2 h-8 my-auto"
          >
            Gửi
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testchat;
