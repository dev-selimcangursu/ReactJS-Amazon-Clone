import React from "react";
import MasterLayout from "./MasterLayout";
import Product from "./Product";
import "./Home.css";



function Home() {
  return (
    <MasterLayout>
      <div className="product-banner">
        <img src="" alt="product-banner" />
      </div>
      <div className="product__list">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </MasterLayout>
  );
}

export default Home;
