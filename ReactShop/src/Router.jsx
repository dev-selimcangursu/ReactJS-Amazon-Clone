import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Basket from "./Basket";
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/basket" element={<Basket />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
