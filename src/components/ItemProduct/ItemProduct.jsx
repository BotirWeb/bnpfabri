import React from "react";

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./ItemProduct.scss";

const ItemProduct = ({ id, title, img }) => {
  const { t, i18n } = useTranslation();
  console.log(img);

  return (
    <Link
      to={`/product/${id}`}
      className="product-item"
      style={{ textDecoration: "none" }}
    >
      <div className="item_product">
        <div className="item_product_img">
          <img src={img} alt={t(title)} />
        </div>
        <div className="item_product_text">{t(title)}</div>
      </div>
    </Link>
  );
};

export default ItemProduct;
