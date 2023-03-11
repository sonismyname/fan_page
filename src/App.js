import { Routes, Route } from "react-router-dom";
import path from "./utils/path";
import Home from "./containers/public/Home";
import Public from "./containers/public/Public";
import Form from "./components/Form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <>
      <div className="">
        <Routes>
          <Route path={path.PUBLIC} element={<Public />}>
            {/* // nằm trong rt khác thì lấy path cha + con */}
            <Route path={path.HOME} element={<Home />}>
              <Route path={path.FORM} element={<Form />}></Route>
              {/* <Route path={path.HOME} element={<Home />} /> */}
            </Route>
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
