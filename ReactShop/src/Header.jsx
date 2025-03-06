import { RiShoppingBasketFill } from "react-icons/ri";
import { MdLocationOn } from "react-icons/md";
import React from "react";
import "./Header.css";
import HeaderCategories from "./HeaderCategories";
import { Context } from "./ContextApi";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const { basketCount } = useContext(Context);

  return (
    <>
      <div className="header" id="header">
        <div className="header__logo">
          <h3>ScSHop</h3>
        </div>

        <div className="header__location">
          <div className="header__location_icon">
            <MdLocationOn fontSize={24} />
          </div>
          <div className="header__location_main">
            <small>Teslimat konumu : İstanbul 34080</small>
            <a href="">Konumu Güncelle</a>
          </div>
        </div>

        <div className="header__search">
          <input type="text" placeholder="Amazon.com.tr araması yapın ..." />
        </div>

        <div className="header__navigations">
          <div className="navigation__login_area">
            <small>Merhaba,Giriş Yapın!</small>
            <small>Hesap Ve Listeler</small>
          </div>

          <div className="navigation__return">
            <small>İadeler ve</small>
            <small>Siparişler</small>
          </div>

          <div className="navigation__basket">
            <Link style={{ color: "whitesmoke" }} to="/basket">
              <RiShoppingBasketFill fontSize={22} />
            </Link>

            <small>{basketCount}</small>
          </div>
        </div>
      </div>
      <HeaderCategories />
    </>
  );
}
