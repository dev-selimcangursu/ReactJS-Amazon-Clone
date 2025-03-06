import React from "react";
import "./HeaderCategories.css";
function HeaderCategories() {
  return (
    <div className="header__categories">
      <div className="header__categories__list">
        <ul>
          <li>Çok Satanlar</li>
          <li>Günün Fırsatları</li>
          <li>Prime</li>
          <li>Yeni Çıkanlar</li>
          <li>Elektronik</li>
          <li>Kitap</li>
          <li>Hediye Fikirleri</li>
          <li>Moda</li>
          <li>Bilgisayar</li>
          <li>Amazon Ayrıcalıkları</li>
        </ul>
      </div>
      <div className="header_categories__advert">
         ScShop Reklam Alanı
      </div>
    </div>
  );
}

export default HeaderCategories;
