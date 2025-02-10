import React from "react";
import "./App.css";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Body from "./components/body";
import Footer from "./components/footer";
import Laptops from "./components/laptopPage";
import Mobiles from "./components/mobilePage";
import Tablets from "./components/tabletPage";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Provider } from "./context";

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Header />
        <Navbar />
        <Body />
        <Routes>
          <Route exact path="/laptopPage" element={<Laptops />}></Route>
          <Route exact path="/mobilePage" element={<Mobiles />}></Route>
          <Route exact path="/tabletPage" element={<Tablets />}></Route>
          <Route exact path="/" element={<Footer />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
