import React from "react";
import { useParams } from "react-router-dom";
import { product } from "../data";
import "./ProductInfo.scss";
import { useTranslation } from "react-i18next";

const ProductInfo = () => {
  const { id } = useParams();
  const products = product.find((p) => p.id === parseInt(id));
  const { t, i18n } = useTranslation();

  console.log(t(products.material));

  if (!products) {
    return <p>Product not found</p>;
  }
  return (
    <div className="product_info">
      <div className="container">
        <div className="product_info_img">
          <img src={products.img} alt="" />
        </div>
        <div className="product_info_list">
          <h2>{product.title}</h2>
          <table class="single__left-table">
            <tbody>
              <tr>
                <td class="single__left-td">{t(products.material)}</td>
                <td class="single__left-td">100% paxta flanel</td>
              </tr>
              <tr>
                <td class="single__left-td">{t(products.title)}</td>
                <td class="single__left-td">50x70 sm (2 dona)</td>
              </tr>
              <tr>
                <td class="single__left-td">Choyshab::</td>
                <td class="single__left-td">260×280 sm (1 dona)</td>
              </tr>
              <tr>
                <td class="single__left-td">Ko'rpa-to'shak:</td>
                <td class="single__left-td">160x220 sm (2 dona)</td>
              </tr>
              <tr>
                <td class="single__left-td">Hajmi:</td>
                <td class="single__left-td">Maxsus o'lcham</td>
              </tr>
              <tr>
                <td class="single__left-td">Ishlab chiqaruvchi::</td>
                <td class="single__left-td">Buxoro tabiiy mahsuloti</td>
              </tr>
              <tr>
                <td class="single__left-td"></td>
                <td class="single__left-td"></td>
              </tr>
            </tbody>
          </table>
          <p class="single__left-text">Kategoriya: Qish kolleksiyasi</p>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
