import {LikedProvider} from "./context/LikedContext"
import Layout from "./layout/Layout";
import ProductsDetails from "./products/ProductsDetails";
import { Route,Routes } from "react-router-dom";
import React from "react";
function App() {
  return (
    <LikedProvider>
      <Routes>
        <Route path="/" element={<Layout/>}/>
        <Route path="/products/:id" element={<ProductsDetails/>}/>
      </Routes>
    </LikedProvider>
  );
}

export default App;
