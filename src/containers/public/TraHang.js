import React from "react";
import BackArrow from "./BackArrow";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions";
const TraHang = () => {
  const { bills } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const stateString = {
    1: "Đơn hàng đã đặt",
    2: "Đóng gói đơn hàng",
    3: "Đã giao cho đơn vị vận chuyển",
    4: "Đang giao hàng",
    6: "Trả hàng",
    5: "Giao hàng thành công",
  };
  const { id } = useParams();
  const { detail_bills, products } = useSelector((state) => state.app);
  const handleTraHang = () => {
    const now = new Date();
    const options = {
      hour: "2-digit",
      minute: "2-digit",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    };
    const formattedDate = new Intl.DateTimeFormat("vi", options).format(now);
    dispatch(actions.changeStatus(id, stateString[6], formattedDate));
    const dtbills = detail_bills.filter((dt) => dt.id_bill == id);

    dtbills.forEach((element) => {
      dispatch(actions.updateQuatity(element.id_product, element.quatity + products[element.id_product - 1].quatity));
    });
    toast.success("Đã ghi nhận yêu cầu");
    navigate("/");
  };
  return (
    <div className="flex flex-col h-screen pt-[120px] w-[80%] mx-auto bg-main-100 text-center gap-4">
      <BackArrow></BackArrow>
      <h1 className="text-[30px] font-semibold">YÊU CẦU TRẢ HÀNG</h1>
      <div className="flex flex-col mx-auto gap-2">
        <label class="inline-flex items-center">
          <input
            type="radio"
            class="form-radio text-purple-600"
            name="radio-group"
            checked
          />
          <span class="ml-2 text-gray-700">Sản phẩm bị lỗi hoặc hư hỏng</span>
        </label>
        <label class="inline-flex items-center">
          <input
            type="radio"
            class="form-radio text-purple-600"
            name="radio-group"
          />
          <span class="ml-2 text-gray-700">Sản phẩm không giống như mô tả</span>
        </label>
        <label class="inline-flex items-center">
          <input
            type="radio"
            class="form-radio text-purple-600"
            name="radio-group"
          />
          <span class="ml-2 text-gray-700">
            Giao hàng sai hoặc không đầy đủ
          </span>
        </label>
        <label class="inline-flex items-center">
          <input
            type="radio"
            class="form-radio text-purple-600"
            name="radio-group"
          />
          <span class="ml-2 text-gray-700">Không hài lòng với sản phẩm</span>
        </label>
        <label class="inline-flex items-center">
          <input
            type="radio"
            class="form-radio text-purple-600"
            name="radio-group"
          />
          <span class="ml-2 text-gray-700">
            Đổi ý hoặc không muốn sản phẩm nữa
          </span>
        </label>
        <input
          className="focus-outline:none border px-2 py-1 rounded-lg"
          type="text"
          placeholder="lí do khác?"
        ></input>
        <button
          onClick={handleTraHang}
          className="border border-[#5bb6f7] hover:bg-main-600 py-1 rounded-lg"
        >
          Xác nhận yêu cầu
        </button>
      </div>
    </div>
  );
};

export default TraHang;
