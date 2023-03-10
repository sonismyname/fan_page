import { Routes, Route } from "react-router-dom";
import path from "./utils/path";
import Home from "./containers/public/Home";
import Public from "./containers/public/Public";
function App() {
  return (
    <>
      <div className="">
        <Routes>
          <Route path={path.PUBLIC} element={<Public />}>
            // nằm trong rt khác thì lấy path cha + con
            <Route path={path.HOME} element={<Home />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
