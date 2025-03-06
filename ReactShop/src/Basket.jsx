import React from "react";
import MasterLayout from "./MasterLayout";
import "./Basket.css";
import { Context } from "./ContextApi";
import { useContext } from "react";
import Item from "./Item";

function Basket() {
  const { basket, basketCount, basketTotalPrice } = useContext(Context);

  return (
    <MasterLayout>
      <div className="basket" id="basket">
        <div className="basket__product__list">
          <h2>Sepetindeki Ürünler </h2>
          <hr />
          {basket.map((product, index) => (
            <Item key={index} product={product} />
          ))}
        </div>
        <div className="basket__summary">
          <small>
            Siparişiniz Kargo BEDAVA kapsamındadır. Alışverişi tamamlama
            adımında bu seçeneği seçin. <a href="">Ayrıntılar</a>
          </small>
          <p>Toplam Ürün : {basketCount} Adet</p>
          <h3>Toplam Fiyat : {basketTotalPrice} ₺</h3>
          <button>Alışverişi Tamamla</button>
        </div>
      </div>
    </MasterLayout>
  );
}

export default Basket;
