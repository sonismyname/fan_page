import React, { useState } from "react";
import icons from "../../utils/icons";
import { useParams } from "react-router-dom";
import Scrollbars from "react-custom-scrollbars-2";
import { useSelector } from "react-redux";

const Store = () => {
  const { AiOutlineAppstoreAdd, AiFillEdit, AiFillDelete } = icons;
  const { slug } = useParams();
  const [isStore, setIsStore] = useState(true);
  const { products, materials} = useSelector(state => state.app);
  console.log(products);
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1
          onClick={(e) => setIsStore(true)}
          className={`text-[30px] cursor-pointer rounded-full hover:shadow-lg ${
            isStore ? "border shadow-md bg-main-600 px-4 rounded-full" : ""
          } font-semibold text-center`}
        >
          QUẢN LÝ KHO {slug === "kho_tong" ? "TỔNG" : "A"}
        </h1>
        <h1
          onClick={(e) => setIsStore(false)}
          className={`text-[30px] cursor-pointer rounded-full hover:shadow-lg ${
            !isStore ? "border shadow-md bg-main-600 px-4 rounded-full" : ""
          } font-semibold text-center`}
        >
          NGUYÊN LIỆU
        </h1>
        <AiOutlineAppstoreAdd
          title="thêm sản phẩm"
          className="cursor-pointer hover:shadow-lg"
          size={24}
        />
      </div>
      {isStore ? (
        <div>
          <div className="flex h-12 shadow-lg bg-main-300 font-bold items-center">
            <span className="text-center w-[10%] border-l-2 border-r-2 border-gray-400">
              Ảnh
            </span>
            <span className="text-center w-[30%] border-r-2 border-gray-400">
              Tên sản phẩm
            </span>
            <span className="text-center w-[30%] border-r-2 border-gray-400">
              Giá
            </span>
            <span className="text-center w-[25%] border-r-2 border-gray-400">
              Số lượng
            </span>
            <span className="text-center w-[5] border-r-2 border-gray-400">
              Chỉnh sửa
            </span>
          </div>
          <div className="flex flex-col">
            {/* list đơn hàng */}
            <Scrollbars style={{ width: "100%", height: 480 }}>
              {products?.map((el, index) => {
                return (
                  <div
                    key={index}
                    className="flex cursor-pointer text-center mt-2 hover:bg-main-300 border border-gray-300 hover:shadow-lg rounded-md items-center text-[#622323] group"
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/${el?.img[0]}`}
                      alt="ảnh sản phẩm"
                      className="w-[10%] h-auto object-contain"
                    ></img>
                    <span className="w-[30%]">{el?.name}</span>
                    <span className="w-[30%]">Giá: {el?.price} 000 vnđ</span>
                    <span className="w-[25%]">{el?.quatity}</span>
                    <div className="hidden w-[5%] gap-2 pr-2 group-hover:flex">
                      <AiFillEdit size={30} />
                      <AiFillDelete size={30} />
                    </div>
                  </div>
                );
              })}
            </Scrollbars>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex h-12 shadow-lg bg-main-300 font-bold items-center">
            <span className="text-center w-[5%] border-l-2 border-r-2 border-gray-400">
              STT
            </span>
            <span className="text-center w-[30%] border-r-2 border-gray-400">
              Tên nguyên liệu
            </span>
            <span className="text-center w-[30%] border-r-2 border-gray-400">
              Đơn giá
            </span>
            <span className="text-center w-[15%] border-r-2 border-gray-400">
              Số lượng
            </span>
            <span className="text-center w-[10%] border-r-2 border-gray-400">
              Đơn vị
            </span>
            <span className="text-center w-[10%] border-r-2 border-gray-400">
              Chỉnh sửa
            </span>
          </div>
          {materials?.map((el, index) => (
            <div
              key={index}
              className="flex cursor-pointer h-10 text-center mt-2 hover:bg-main-300 border border-gray-300 hover:shadow-lg rounded-md items-center text-[#622323] group"
            >
              <h1 className="w-[5%]">{el.id}</h1>
              <span className="w-[30%]">{el.name}</span>
              <span className="w-[30%]">Giá: {el.price} 000 vnđ</span>
              <span className="w-[15%]">{el.quatity}</span>
              <span className="w-[10%]">{el.unit}</span>
              <div className="hidden w-[10%] gap-2 pr-2 group-hover:flex">
                <AiFillEdit size={24} />
                <AiFillDelete size={24} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Store;
