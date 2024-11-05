import React from "react";
import { useTranslation } from "react-i18next";

import "./AboutUs.scss";

const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <section className="about_us">
      <div className="container">
        <div class="about_start">
          <div class="about_left">
            <h1 id="about-heading" class="about_title">
              {t("qualityTitle")}
            </h1>
            <article class="about_content">
              <p class="about_text">{t("aboutUS description")}</p>
              <p class="about_text">{t("aboutUS description")}</p>
              <p class="about_text">{t("aboutUS description")}</p>
              <p class="about_text">{t("aboutUS description")}</p>
              <p class="about_text">{t("aboutUS description")}</p>
              <p class="about_text">{t("aboutUS description")}</p>
              <p class="about_text">{t("aboutUS description")}</p>
              <p class="about_text">{t("aboutUS description")}</p>
              <p class="about_text">{t("aboutUS description")}</p>
              <p class="about_text">{t("aboutUS description")}</p>
              <p class="about_text">{t("aboutUS description")}</p>
            </article>
          </div>
          <img
            class="about_img"
            src="/aboutUs.png"
            alt="About our product and team"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
