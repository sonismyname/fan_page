import { Routes, Route } from "react-router-dom";
import path from "./utils/path";
import Home from "./containers/public/Home";
import Public from "./containers/public/Public";
import Cart from "./components/Cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "./store/actions";
import Detail from "./components/Detail";
import FillInfo from "./containers/public/FillInfo";
import {
  Dashboard,
  Deliver,
  DetailDash,
  DetailDeliver,
  Login,
  Order,
  Store,
} from "./containers/public";
import {
  users_dev,
  products_dev,
  stores_dev,
  materials_dev,
} from "./utils/devData";
import { useEffect } from "react";
import { Testchat } from "./components";
import TraHang from "./containers/public/TraHang";

function App() {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.app);
  useEffect(() => {
    if (users.length === 0) {
      dispatch(actions.addUser(users_dev));
      dispatch(actions.addProducts(products_dev));
      dispatch(actions.addStore(stores_dev));
      dispatch(actions.addMaterial(materials_dev));
    }
  }, []);
  return (
    <>
      <div className="">
        <Routes>
          <Route path={path.PUBLIC} element={<Public />}>
            {/* // nằm trong rt khác thì lấy path cha + con */}
            <Route path={path.HOME} element={<Home />}>
              <Route path={path.CART} element={<Cart />}></Route>
              <Route path={path.DETAIL} element={<Detail />}></Route>
              {/* <Route path={path.HOME} element={<Home />} /> */}
            </Route>
            <Route path={path.FILLINFOR} element={<FillInfo />}></Route>
            <Route path={path.DELIVER} element={<Deliver />}></Route>
            <Route
              path={path.DETAIL_DELIVER}
              element={<DetailDeliver />}
            ></Route>
            <Route path={path.ADMIN} element={<Login />}></Route>
            <Route path={path.DASHBOARD} element={<Dashboard />}>
              <Route path={path.STORE} element={<Store />}></Route>
              <Route path={path.ORDER} element={<Order />}></Route>
              <Route
                path={path.DETAIL_DELIVER_DASHBOARD}
                element={<DetailDash />}
              ></Route>
            </Route>
            <Route path={path.TRA_HANG} element={<TraHang />}></Route>
          </Route>
        </Routes>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </>
  );
}

export default App;
