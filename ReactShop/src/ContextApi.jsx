import { createContext, useState } from "react";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);
  const basketCount = basket.length;
  const basketTotalPrice = basket.reduce((total, product) => {
    return Number(total) + Number(product.price);
  }, 0);
  const productCount = basket.count;

  return (
    <Context.Provider
      value={{ basket, setBasket, basketCount, basketTotalPrice, productCount }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
