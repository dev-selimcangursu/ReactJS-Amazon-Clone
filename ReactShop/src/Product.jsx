import React, { useContext } from "react";
import { FaStar } from "react-icons/fa";
import "./Product.css";
import { Context } from "./ContextApi";

function Product(props) {
  const { setBasket, basket } = useContext(Context);

  function addProductButton() {
    setBasket((prevBasket) => {
      const existingItem = prevBasket.find((item) => item.id === props.id);

      if (existingItem) {
        return prevBasket.map((item) =>
          item.id === props.id
            ? {
                ...item,
                count: item.count + 1,
                price: Number(props.price) * (item.count + 1),
              }
            : item
        );
      } else {
        return [
          ...prevBasket,
          {
            id: props.id,
            title: props.title,
            stars: props.stars,
            image: props.image,
            count: 1,
            price: Number(props.price),
          },
        ];
      }
    });
  }

  return (
    <div className="product">
      <div className="product__image">
        <img src={props.image} alt="product_image" />
      </div>
      <div className="product__body">
        <h4>{props.title}</h4>
        <div className="star__list">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} color={i < props.stars ? "gold" : "gray"} />
          ))}
        </div>
        <h2>{props.price}₺</h2>
        <small>
          Hızlı teslimat seçeneği ile yarın, 7 Mart tarihinde teslim alın.
          Standart teslimat ile Kargo BEDAVA
        </small>
      </div>
      <button type="button" onClick={addProductButton} className="addBasket">
        Sepete Ekle
      </button>
    </div>
  );
}

export default Product;
