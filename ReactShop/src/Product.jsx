import React from "react";
import { FaStar } from "react-icons/fa";
import "./Product.css";

function Product() {
  return (
    <div className="product">
      <div className="product__image">
        <img
          src="https://m.media-amazon.com/images/I/61yWf1JdErL._AC_UL640_FMwebp_QL65_.jpg"
          alt="product_image"
        />
      </div>
      <div className="product__body">
        <h4>
          Samsung Galaxy Tab S10 Ultra Yapay Zeka (AI) Tablet, 16GB RAM, 1TB
          Hafıza, AMOLED Ekran, S Pen Dahil, Gri
        </h4>
        <div className="star__list">
          <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
        </div>
        <h2>36.000 TL</h2>
        <small>
          {" "}
          Hızlı teslimat seçeneği ile yarın, 7 Mart tarihinde teslim alın.
          Standart teslimat ile Kargo BEDAVA
        </small>
      </div>
      <button className="addBasket">Sepete Ekle</button>
    </div>
  );
}

export default Product;
