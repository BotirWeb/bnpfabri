import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

import { ServiceItem, ItemProduct } from "../";
import { product } from "../data";

import "./Main.scss";

// Quality items, img, alt, background, button color
const items = [
  {
    imgQuality: `${process.env.PUBLIC_URL}/imgQuality1.png`,
    imgAlt: "100%",
    bgQuality: "linear-gradient(0deg, #31384d 9%, #616884 50%)",
    buttonColor: "#31384d",
  },
  {
    imgQuality: `${process.env.PUBLIC_URL}/imgQuality2.png`,
    imgAlt: "100%",
    bgQuality: "linear-gradient(0deg, #2e2549 9%, #625686 50%)",
    buttonColor: "#625686",
  },
  {
    imgQuality: `${process.env.PUBLIC_URL}/imgQuality3.png`,
    imgAlt: "100%",
    bgQuality: "linear-gradient(0deg, #224f4d 9%, #307e7a 50%)",
    buttonColor: "#224f4d",
  },
];

const Main = () => {
  const { t, i18n } = useTranslation();

  // console.log(product[0].description[0].comment);
  console.log(product);

  return (
    <div className="container">
      {/* MAIN HERO START */}
      <section className="main_hero">
        <div className="main_hero_img">
          <img
            fetchpriority="high"
            decoding="async"
            src="https://www.bnpfabric.uz/wp-content/uploads/2024/02/111-copy.png"
            className="aux-attachment aux-featured-image aux-attachment-id-348"
            alt="111+ nusxa"
            data-ratio="1.71"
            data-original-w="1456"
          />
        </div>
        <div className="main_hero_title">
          <h2 className="hero_city">{t("buxoro")}</h2>
          <h1 className="hero_natural">{t("natural")}</h1>
          <span className="hero_product">{t("main_product")}</span>
        </div>
      </section>
      {/* MAIN HERO END */}

      {/* MAIN SERVICE START */}
      <section className="main_service">
        {/* Section item */}
        <ServiceItem />
      </section>
      {/* MAIN SERVICE END */}

      {/* MAIN QUALITY START */}
      <section
        className="main_quality"
        style={{ backgroundImage: items[0].bgQuality }}
      >
        {/* item quality */}
        <div className="item_top"></div>
        <div className="item_quality">
          <div className="quality_guarantee">
            <span className="left_quality">100%</span>
            <span className="left_quality_decription">
              {t("qualityProduct")}
            </span>
          </div>
          <div className="quality_img">
            <img src={items[0].imgQuality} alt="" />
          </div>
          <div className="quality_text">
            <div className="item_quality_title">"{t("qualityTitle")}"</div>
            <div className="item_quality_description">
              {t("qualityDecription")}
            </div>
            <div className="item_quality_button">
              <NavLink to="/shop">
                <button style={{ color: items[0].buttonColor }}>
                  {t("qualityButton")}
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
      {/* MAIN QUALITY END */}

      {/* SECTION TITLE */}
      <div className="section_title">
        <h1 className="title" title={t("section_title1")}>
          {t("section_title1")}
        </h1>
        <span className="description">{t("qualityTitle")}</span>
      </div>

      {/* MAIN PRODUCT START */}

      <section className="main_product">
        {product.map((product) => (
          <ItemProduct
            key={product.id}
            id={product.id}
            title={t(product.product_title)}
            img={product.img}
            alt={t(product.product_title)}
          />
        ))}
      </section>
      {/* MAIN PRODUCT END */}

      {/* MAIN QUALITY START */}
      <section
        className="main_quality"
        style={{ backgroundImage: items[1].bgQuality }}
      >
        {" "}
        {/* item quality */}
        <div className="item_top"></div>
        <div className="item_quality">
          <div className="quality_guarantee">
            <span className="left_quality">100%</span>
            <span className="left_quality_decription">
              {t("qualityProduct")}
            </span>
          </div>
          <div className="quality_img">
            <img src={items[1].imgQuality} alt="" />
          </div>
          <div className="quality_text">
            <div className="item_quality_title">"{t("qualityTitle")}"</div>
            <div className="item_quality_description">
              {t("qualityDecription")}
            </div>
            <div className="item_quality_button">
              <NavLink to="/shop">
                <button
                  className="first"
                  style={{ color: items[1].buttonColor }}
                >
                  {t("qualityButton")}
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
      {/* MAIN QUALITY END */}

      {/* MAIN PRODUCT START */}
      <section className="main_product"></section>
      {/* MAIN PRODUCT END */}

      {/* MAIN QUALITY START */}
      <section
        className="main_quality"
        style={{ backgroundImage: items[2].bgQuality }}
      >
        {" "}
        {/* item quality */}
        <div className="item_top"></div>
        <div className="item_quality">
          <div className="quality_guarantee">
            <span className="left_quality">100%</span>
            <span className="left_quality_decription">
              {t("qualityProduct")}
            </span>
          </div>
          <div className="quality_img">
            <img src={items[2].imgQuality} alt="" />
          </div>
          <div className="quality_text">
            <div className="item_quality_title">"{t("qualityTitle")}"</div>
            <div className="item_quality_description">
              {t("qualityDecription")}
            </div>
            <div className="item_quality_button">
              <NavLink to="/shop">
                <button
                  className="third"
                  style={{ color: items[2].buttonColor }}
                >
                  {t("qualityButton")}
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
      {/* MAIN QUALITY END */}

      {/* MAIN PRODUCT START */}
      <section className="main_product"></section>
      {/* MAIN PRODUCT END */}

      {/* MAIN NEWS START */}
      <section className="main_news"></section>
      {/* MAIN NEWS END */}
    </div>
  );
};

export default Main;
