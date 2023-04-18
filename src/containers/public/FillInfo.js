import React, { useState } from "react";
import { BackArrow } from "./";
import { address } from "../../utils/devData";

const FillInfo = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [district, setDistrict] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState("");
	const [wards, setWards] = useState([]);
  const handleSelectChange = (event) => {
    setSelectedCity(event.target.value);
    console.log(selectedCity);
    const districts = address.find((p) => p.name === event.target.value);
    if (districts !== undefined) {
      setDistrict(districts.districts);
    } else {
      setDistrict([]);
    }
    // console.log(districts)
  };
	const handleSelectDistrictChange = (e) => {
		setSelectedDistrict(e.target.value);
		console.log(e.target.value)
		// const wards = 
	}
	console.log(address)
  return (
    <div className="pt-[80px] px-5 h-[2000px] m-auto w-[80%] border border-yellow-500 flex flex-col gap-5">
      <BackArrow></BackArrow>
      <div className="flex flex-col h-[500px] w-[60%] border border-red-500 mx-auto p-4 gap-2">
        <h1>Thông tin người nhận đơn hàng</h1>
        <div className="flex justify-between text-center">
          <span className="w-[30%]">Họ và tên: </span>
          <input className="border rounded-md p-1 w-[60%]" type="text"></input>
        </div>
        <div className="flex justify-between text-center">
          <span className="w-[30%]">Số điện thoại: </span>
          <input className="border rounded-md p-1 w-[60%]" type="text"></input>
        </div>
        <div className="flex justify-between text-center">
          <span className="w-[30%]">Địa chỉ: </span>
          {/* <input className='border rounded-md p-1 w-[60%]' type='text'></input> */}
          <div className="flex w-[60%] justify-between">
            <select
              value={selectedCity}
              onChange={(e) => handleSelectChange(e)}
              className="border border-gray-300 rounded-md p-1 w-[35%] text-[12px]"
            >
              <option value="">--Tỉnh/Thành phố--</option>
              {/* <option value="option1">Tùy chọn 1</option>
              <option value="option2">Tùy chọn 2</option>
              <option value="option3">Tùy chọn 3</option> */}
              {address.map((el, index) => {
                return (
                  <option key={index} value={el.name}>
                    {el.name}
                  </option>
                );
              })}
            </select>
            <select
              value={selectedDistrict}
              onChange={(e) => handleSelectDistrictChange(e)}
              className="border border-gray-300 rounded-md p-1 w-[30%] text-[12px]"
            >
              <option value="">--Quận/Huyện--</option>
              {district?.length !== 0 ? (
                district?.map((element, index) => {
                  return (
                    <option key={index} value={element.name}>
                      {element.name}
                    </option>
                  );
                })
              ) : (
                <option value="">Lựa chọn tỉnh/thành phố trước</option>
              )}
            </select>
            <select className="border border-gray-300 rounded-md p-1 w-[30%] text-[12px]">
              <option value="">--Phường/Xã--</option>
              <option value="option1">Tùy chọn 1</option>
              <option value="option2">Tùy chọn 2</option>
              <option value="option3">Tùy chọn 3</option>
            </select>
          </div>
        </div>
        <div className="flex justify-between text-center items-center">
          <span className="w-[30%]">Địa chỉ cụ thể: </span>
          <textarea
            className="border rounded-md p-1 w-[60%]"
            type="text"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default FillInfo;
