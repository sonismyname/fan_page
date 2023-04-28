import React, { useState } from "react";
import icons from "../../utils/icons";
import { Outlet, useNavigate } from "react-router-dom";
import path from "../../utils/path";
import { Chatbox } from "../../components";

const Dashboard = () => {
  const { IoReorderThreeSharp, MdOutlineWarehouse, BsBoxes, BsFillBox2Fill } =
    icons;
  const [isOpen, setIsOpen] = useState(true);
  const [isLink1Open, setIsLink1Open] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="flex h-screen pt-[100px] bg-main-100">
      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "w-60" : "w-0"
        } transition-all duration-500 ease-in-out bg-main-600 text-white pt-10`}
      >
        {/* <h2 className="text-2xl font-bold p-4">SidebarLeft</h2> */}
        <ul className="p-4 justify-center flex flex-col">
          <li
            className={`my-2 gap-2 items-center ${
              isLink1Open ? "bg-main-600" : ""
            } cursor-pointer`}
            onClick={() => setIsLink1Open(!isLink1Open)}
          >
            <span className="my-2 flex gap-2 items-center">
              <MdOutlineWarehouse size={24} />
              NHÀ KHO
            </span>
            <ul
              className={`mt-2 transition-all duration-300 ease-in-out ${
                isLink1Open ? "max-h-96" : "max-h-0"
              } overflow-hidden`}
            >
              <li onClick={(e) => navigate(`/dashboard/store/kho_tong`)} className="my-2 flex gap-2 items-center pl-4">
                <BsFillBox2Fill size={20} />
                KHO TỔNG
              </li>
              <li onClick={(e) => navigate(`/dashboard/store/kho_a`)} className="my-2 flex gap-2 items-center pl-4">
                <BsFillBox2Fill size={20} />
                KHO A
              </li>
              {/* <li>Sublink 2</li>
              <li>Sublink 3</li> */}
            </ul>
          </li>
          <li onClick={(e) => navigate(path.ORDER)} className="my-2 flex gap-2 items-center cursor-pointer">
            <BsBoxes size={20} />
            ĐƠN HÀNG
          </li>

          {/* <li className="my-2">Link 3</li> */}
        </ul>
      </div>

      {/* Main content */}
      <div className="flex-1 bg-main-100 px-[80px] py-10">
        <Outlet></Outlet>
      </div>
      <Chatbox></Chatbox>

      {/* Toggle button */}
      <span
        onClick={() => setIsOpen(!isOpen)}
        className="absolute left-[-20px] top-[100px] m-4 text-black px-4 py-2 rounded-lg"
      >
        <IoReorderThreeSharp size={36} />
      </span>
    </div>
  );
};

export default Dashboard;
