import React from "react";
import "./Item.css";
import { Context } from "./ContextApi";
import { useContext } from "react";

export default function Item(props) {
  const { setBasket } = useContext(Context);

  function increaseProductCount() {
    setBasket((prevBasket) =>
      prevBasket.map((item) =>
        item.id === props.product.id
          ? {
              ...item,
              count: item.count + 1,
              price: (item.price / item.count) * (item.count + 1),
            }
          : item
      )
    );
  }

  function decreaseProductCount() {
    setBasket((prevBasket) =>
      prevBasket.map((item) =>
        item.id === props.product.id
          ? {
              ...item,
              count: item.count > 1 ? item.count - 1 : 1,
              price:
                (item.price / item.count) *
                (item.count > 1 ? item.count - 1 : 1),
            }
          : item
      )
    );
  }

  return (
    <div className="item__wrapper">
      <div className="item__image">
        <img src={props.product.image} alt="" />
      </div>
      <div className="item__main">
        <div className="item__info">
          <h3>{props.product.title}</h3>
          <small>Kargo Bedava !</small>
          <div className="item__order">
            <div className="item__count_area">
              <a onClick={decreaseProductCount}>-</a>
              <small>{props.product.count}</small>
              <a onClick={increaseProductCount}>+</a>
            </div>
            <ul>
              <li>
                <div className="item__order_area"></div>
              </li>
              <li>
                <a href="#">Sil</a>
              </li>
              <li>
                <a href="#">Daha Sonrası İçin Kaydet</a>
              </li>
              <li>
                <a href="#">Paylaş</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="item__price">
          <h3>{props.product.price} ₺</h3>
        </div>
      </div>
    </div>
  );
}
