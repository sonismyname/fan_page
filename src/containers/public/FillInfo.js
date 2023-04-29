import React, { useState } from "react";
import { BackArrow } from "./";
import { address } from "../../utils/devData";
import { useNavigate } from "react-router-dom";
import path from "../../utils/path";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions";

const FillInfo = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [inputAddress, setInputAddress] = useState("");
  const navigate = useNavigate();
  const [district, setDistrict] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [wards, setWards] = useState([]);
  // information
  const { users, bills, detail_bills, carts } = useSelector(
    (state) => state.app
  );

  const handleSelectChange = (event) => {
    setSelectedCity(event.target.value);
    // console.log(selectedCity);
    const districts = address.find((p) => p.name === event.target.value);
    if (districts !== undefined) {
      setDistrict(districts.districts);
    } else {
      setDistrict([]);
    }
  };
  const handleSelectDistrictChange = (e) => {
    setSelectedDistrict(e.target.value);
    // console.log(e.target.value);
    const wards = district.find((p) => p.name === e.target.value);
    if (wards !== undefined) {
      setWards(wards.wards);
    } else {
      setWards([]);
    }
  };
  // console.log(address);
  const [validAddress, setValiaAddress] = useState(false);
  const [addressToBill, setAddressToBill] = useState("");
  const [validAddressOption, setValiaAddressOption] = useState(false);
  const dispatch = useDispatch();
  const handleOrder = () => {
    if (validAddress && validAddressOption) {
      navigate("/");
      // tạo bill và detail bill
      const now = new Date();
      const options = {
        hour: "2-digit",
        minute: "2-digit",
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      };
      const formattedDate = new Intl.DateTimeFormat("vi", options).format(now);
      const bill = {
        id: bills.length + 1,
        id_user: 2,
        date: formattedDate,
        address: inputAddress,
        address_option: addressToBill,
        status: "Đơn hàng đã đặt",
      };
      const detail_bills_add = [];
      for (let i = 0; i < carts.length; i++) {
        const detail_bill = {
          id: detail_bills.length + (1 + i),
          id_bill: bill.id,
          id_product: carts[i].id_product,
          name: carts[i].name,
          img: [...carts[i].img],
          price: carts[i].price,
          quatity: carts[i].quatity,
        };
        detail_bills_add.push(detail_bill);
      }
      dispatch(actions.addDetailBills(detail_bills_add));
      dispatch(actions.buyProducts(bill));
      dispatch(actions.removeCart());
      toast.success("Đặt hàng thành công!!");
    } else {
      toast.warning("kiểm tra lại thông tin");
    }
  };
  
  console.log(carts);
  return (
    <div className="pt-[120px] px-5 py-10 m-auto w-[80%] flex flex-col bg-main-100 gap-5 text-[#622323] text-[18px]">
      <BackArrow></BackArrow>
      <div className="flex flex-col h-[500px] w-[60%] border border-red-500 bg-[#e48245] rounded-lg mx-auto p-4 gap-5 text-center sh">
        <h1>Thông tin người nhận đơn hàng</h1>
        <div className="flex justify-between text-center">
          <span className="w-[30%]">Họ và tên: </span>
          <input
            value={users[1]?.name}
            className="border rounded-md p-1 w-[60%]"
            type="text"
          ></input>
        </div>
        <div className="flex justify-between text-center">
          <span className="w-[30%]">Số điện thoại: </span>
          <input
            value={users[1]?.phone}
            className="border rounded-md p-1 w-[60%]"
            type="text"
          ></input>
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
            <select
              onChange={(e) => {
                if (e.target.value !== "") {
                  setValiaAddressOption(true);
                  setAddressToBill(e.target.value);
                } else {
                  setValiaAddressOption(false);
                }
              }}
              className="border border-gray-300 rounded-md p-1 w-[30%] text-[12px]"
            >
              <option value="">--Phường/Xã--</option>
              {wards?.length !== 0 ? (
                wards?.map((element, index) => {
                  return (
                    <option key={index} value={element.name}>
                      {element.name}
                    </option>
                  );
                })
              ) : (
                <option value="">Hãy chọn quận/huyện trước</option>
              )}
            </select>
          </div>
        </div>
        {!validAddressOption ? (
          <span className="text-red-800 text-[14px]">
            Hãy chọn địa chỉ nhận hàng
          </span>
        ) : (
          ""
        )}

        <div className="flex justify-between text-center items-center">
          <span className="w-[30%]">Địa chỉ cụ thể(*): </span>
          <textarea
            value={inputAddress}
            onChange={(e) => {
              if (e.target.value) {
                setValiaAddress(true);
              } else {
                setValiaAddress(false);
              }
              setInputAddress(e.target.value);
            }}
            className="border text-[12px] rounded-md p-1 w-[60%]"
            type="text"
          ></textarea>
        </div>
        {!validAddress ? (
          <span className="text-red-800 text-[14px]">Không được để trống</span>
        ) : (
          ""
        )}

        <div className="flex justify-between text-center items-center">
          <span>Phương thức thanh toán: </span>
          <select className="border border-gray-300 rounded-md p-1 w-[60%] text-[12px] text-center">
            <option value="">--Phương thức thanh toán--</option>
            <option value="Tiền mặt">Tiền mặt</option>
            <option value="Thanh toán qua thẻ ngân hàng">
              Thanh toán qua thẻ ngân hàng
            </option>
            {/* <option value="option3">Tùy chọn 3</option> */}
          </select>
        </div>
        <div className="flex text-center justify-end ">
          <div
            onClick={handleOrder}
            className="border border-gray-700 bg-main-300 hover:bg-main-100 p-2 rounded-lg cursor-pointer"
          >
            Xác nhận đặt hàng
          </div>
        </div>
      </div>
    </div>
  );
};

export default FillInfo;
