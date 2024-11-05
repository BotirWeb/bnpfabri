import React, { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import i18n from "i18next";
import "./Header.scss";

const LanguageSelector = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  // Default qiymat: til kodi va bayroq rasmi manzili
  const [selectedLanguage, setSelectedLanguage] = useState({
    code: "uz",
    label: "Uz",
    flag: "https://cdn.gtranslate.net/flags/svg/uz.svg",
  });

  // img o'lchamini boshqarish uchun state
  const [imgSize, setImgSize] = useState(25);

  // Ekran kengligini kuzatish
  useEffect(() => {
    const handleResize = () => {
      // Agar ekran kengligi 500px dan kichik bo'lsa, img o'lchamini 18px kamaytiramiz
      setImgSize(window.innerWidth < 500 ? 18 : 25);
    };

    // Bir marta dastlabki renderda va har bir o'lcham o'zgarganda qayta ishlaydi
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSelect = (language) => {
    i18n.changeLanguage(language.code);
    setSelectedLanguage(language); // Til kodi va flagni yangilash
    setShowDropdown(false);
  };

  return (
    <Dropdown
      show={showDropdown}
      onToggle={() => setShowDropdown(!showDropdown)}
    >
      <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
        <img
          src={selectedLanguage.flag}
          height={imgSize}
          width={imgSize}
          alt={selectedLanguage.code}
          className="me-2"
        />
        {selectedLanguage.label}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item
          eventKey="uz"
          onClick={() =>
            handleSelect({
              code: "uz",
              label: "Uz",
              flag: "https://cdn.gtranslate.net/flags/svg/uz.svg",
            })
          }
        >
          <span className="me-2">
            <img
              src="https://cdn.gtranslate.net/flags/svg/uz.svg"
              height={imgSize}
              width={imgSize}
              alt="uz"
              className="me-2"
            />
            Uz
          </span>
        </Dropdown.Item>
        <Dropdown.Item
          eventKey="ru"
          onClick={() =>
            handleSelect({
              code: "ru",
              label: "Ru",
              flag: "https://cdn.gtranslate.net/flags/svg/ru.svg",
            })
          }
        >
          <span className="me-2">
            <img
              src="https://cdn.gtranslate.net/flags/svg/ru.svg"
              height={imgSize}
              width={imgSize}
              alt="ru"
              className="me-2"
            />
            Ru
          </span>
        </Dropdown.Item>
        <Dropdown.Item
          eventKey="eng"
          onClick={() =>
            handleSelect({
              code: "eng",
              label: "Eng",
              flag: "https://cdn.gtranslate.net/flags/svg/en.svg",
            })
          }
        >
          <img
            src="https://cdn.gtranslate.net/flags/svg/en.svg"
            height={imgSize}
            width={imgSize}
            alt="en"
            className="me-2"
          />
          Eng
        </Dropdown.Item>
        <Dropdown.Item
          eventKey="polish"
          onClick={() =>
            handleSelect({
              code: "polish",
              label: "Polish",
              flag: "https://cdn.gtranslate.net/flags/svg/pl.svg",
            })
          }
        >
          <img
            src="https://cdn.gtranslate.net/flags/svg/pl.svg"
            height={imgSize}
            width={imgSize}
            alt="pl"
            className="me-2"
          />
          Polish
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default LanguageSelector;
