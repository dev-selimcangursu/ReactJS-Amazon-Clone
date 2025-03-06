import React from "react";
import MasterLayout from "./MasterLayout";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <MasterLayout>
      <div className="product__list">
        <Product
          id="1"
          title="HUAWEI MatePad 11.5S PaperMatte Edition 8GB+256GB Tablet, Nearlink ile Güçlendirilmiş M-Pencil, Çıkarılabilir Klavye"
          image="https://m.media-amazon.com/images/I/61Yj3qTu83L._AC_SX679_.jpg"
          stars="5"
          price="18499"
        />
      </div>
    </MasterLayout>
  );
}

export default Home;
