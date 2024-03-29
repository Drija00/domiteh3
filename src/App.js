import Home from "./Pages/Home";
import ProductPage from "./Pages/ProductPage";
import {BrowserRouter, BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from "./Components/Navbar";
import { useEffect, useState } from "react";
import Cart from "./Pages/Cart";
import Context from "./Components/Context";
import TransactionPage from "./Pages/TransactionPage";
import Login from "./Pages/Login";

function App() {


  const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart'));
  const[cartData,setCartData] = useState([]);
  const[searchTerm,setSearchTerm] = useState("");
  const[orderType,setOrderType] = useState("");
  const[count,setCount] = useState(cartFromLocalStorage);
  const[subTotal,setSubTotal]=useState(0);


  return (
    <div className='main-wrapper'>
      <BrowserRouter>
        <Context.Provider value={{count,setCount,setSearchTerm,searchTerm,cartData,setCartData,setOrderType,orderType,subTotal,setSubTotal}}>
            <Navbar/>
                <Routes>
                        <Route path="/login" index element={<Login/>}/>
                        <Route path="/home" element={<Home/>}/>
                        <Route path=":id" element={<ProductPage/>}/>
                        <Route path="/cart" element={<Cart/>}/>
                        <Route path="/transactionPage" element={<TransactionPage cartData={cartData} subTotal={subTotal}/>}/>
                </Routes>
            </Context.Provider>
          </BrowserRouter>
    </div>
  );
}
export default App;
