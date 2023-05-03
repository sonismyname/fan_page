import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import path from "../../utils/path";
import { useSelector } from "react-redux";
import { Carousel, Chatbox, ProductLeft, ProductRight, Testchat } from "../../components";

const Home = () => {
  const navigate = useNavigate();
  const { products } = useSelector((state) => state.app);
  const showForm = () => {
    navigate(path.FORM);
  };
  return (
    <div className="pt-[120px] px-5 h-[2000px] m-auto w-[80%] bg-main-100 flex flex-col gap-10 relative">
      <Carousel/>
      <Chatbox name='Người mua'/>
      <div className="flex flex-col gap-5 relative hover:shadow-lg rounded-lg">
        <img
          src={`${process.env.PUBLIC_URL}/sp1.png`}
          className="object-cover w-[40%] mx-auto rounded-md"
        />
        <div onClick={(e) => navigate(`/detail/1`)} className="absolute bottom-9 right-[200px] border rounded-lg border-red-500 p-2 animate-pulse cursor-pointer hover:bg-red-500 text-red-500 hover:text-[#fff]">
          Chi tiết sản phẩm
        </div>
      </div>
      <ProductLeft product={products[0]}/>
      <ProductRight product={products[1]}/>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
