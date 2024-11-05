import React from "react";
import { useTranslation } from "react-i18next";
// import LangeageDropdown from "./LanguageDropdown";// To'g'ri: LanguageDropdown nomi bilan import qiling
import LanguageDropdown from "./LanguageDropdown";
import { NavLink } from "react-router-dom";
import HeaderDrawer from "./Drawer";
import "./Header.css";

const Header = () => {
  const { t, i18n } = useTranslation();

  const languages = localStorage.getItem("i18nextLng");

  return (
    <div className="container">
      {/* header log */}
      <div className="header_logo">
        <NavLink to="/">
          <img src="bnp.logo.png" alt="bnp logo" />
        </NavLink>
      </div>
      {/* header list */}
      <div className="header_nav header_nav_temporary">
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active">
              {t("home")}
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop" activeClassName="active">
              {t("collection")}
            </NavLink>
          </li>
          <li>
            <NavLink to="/about_us" activeClassName="active">
              {t("about_us")}
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">
              {t("contact")}
            </NavLink>
          </li>
        </ul>
      </div>
      {/* header switcher */}
      <div className="header_dropdown">
        <LanguageDropdown />
      </div>
      <div className="header_drawer">
        <HeaderDrawer />
      </div>
    </div>
  );
};

export default Header;
