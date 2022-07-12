import React from "react";
import Header from "./components/Header/Header";
import MainMenu from "./components/MainMenu/MainMenu";
import Orders from "./components/Orders/Orders";
import {
  Routes,
  Route
} from "react-router-dom";
import Home from "./components/Home/Home";
import CheckoutForm from "./components/CheckoutForm/CheckoutForm";
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <MainMenu/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/get-your-pizza" element={<CheckoutForm />} /> 
        <Route path="/orders" element={<Orders/>} />
      </Routes>
      <Footer/> 
    </div>
  );
}

export default App;
