import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

import "./Footer.scss";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="container">
        <div class="footer_start">
          <div class="footer_left">
            <NavLink to="/" aria-label="Company logo">
              <img src="/bnp.logo.png" alt="Company Logo" />
            </NavLink>
            <p class="footer_left_text">{t("footer_text")}</p>
          </div>
          <div class="footer_menu">
            <h2 id="footer-heading" class="footer_menu_title">
              {t("menu")}
            </h2>
            <nav aria-label="Footer Navigation">
              <ul class="footer_list">
                <li class="footer_list_item">
                  <NavLink
                    class="footer_list_link"
                    aria-label={t("home")}
                    to="/"
                  >
                    {t("home")}
                  </NavLink>
                </li>
                <li class="footer_list_item">
                  <NavLink
                    class="footer_list_link"
                    aria-label={t("collection")}
                    to="/shop"
                  >
                    {t("collection")}
                  </NavLink>
                </li>
                <li class="footer_list_item">
                  <NavLink
                    class="footer_list_link"
                    aria-label={t("about_us")}
                    to="/about_us"
                  >
                    {t("about_us")}
                  </NavLink>
                </li>
                <li class="footer_list_item">
                  <NavLink
                    class="footer_list_link"
                    aria-label={t("contact")}
                    to="/contact"
                  >
                    {t("contact")}
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div class="footer_contact">
            <h2 class="footer_contact_title">{t("contact")}</h2>
            <address
              class="footer_contact_info"
              aria-label="Contact Information"
            >
              <p class="footer_contact_text">{t("footer_destinition")}</p>

              <p class="footer_contact_text">
                <NavLink to="mailto:Bnpuz@bk.ru">Email: Bnpuz@bk.ru</NavLink>
              </p>
              <p class="footer_contact_text">
                <NavLink to="https://t.me/bnp_fabrik">
                  Telegram: bnp_fabrik
                </NavLink>
              </p>
              <p class="footer_contact_text">
                <NavLink to="mailto:info@bnpfabric.com">
                  Email: info@bnpfabric.com
                </NavLink>
              </p>
              <p class="footer_contact_text">
                <NavLink to="tel:+998933837585">+998 93 383 75 85</NavLink>
              </p>
            </address>
          </div>
          <div class="footer_right">
            <h4 class="footer_right_title">{t("footer_email_subcribes")}</h4>
            <form
              class="footer_right_form"
              aria-labelledby="email-subscription"
            >
              <input
                id="email-subscription"
                class="footer_right_input"
                type="email"
                placeholder={t("footer_email_subcribes")}
                required=""
                aria-label={t("footer_email_subcribes")}
              />
              <button type="submit" required class="footer_right_btn">
                {t("footer_button")}
              </button>
            </form>
            <p class="footer_right_text">{t("footer_required")}</p>
          </div>
        </div>
      </div>

      <div class="footer_end">
        <div className="container">
          <p class="footer_end_text">{t("footer_end")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
