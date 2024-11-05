import React from "react";
import "./Service.scss";
import { useTranslation } from "react-i18next";

// SectionItem komponenti
const ServiceItem = ({ imgSrc, imgAlt, title, description }) => {
  return (
    <div className="service_item">
      <img
        decoding="async"
        width="69"
        height="40"
        src={imgSrc}
        alt={imgAlt}
        className="aux-attachment aux-featured-image aux-attachment-id-51 aux-blank ls-is-cached aux-preloaded"
        style={{ height: "auto" }}
      />
      <div className="service_text">
        <span className="service_title">{title}</span>
        <p className="service_description">{description}</p>
      </div>
    </div>
  );
};

// Section komponenti - to'rtta turli elementni ko'rsatish uchun
const Service = () => {
  const { t, i18n } = useTranslation();

  // Elementlar uchun ma'lumotlar
  const items = [
    {
      imgSrc:
        "https://www.bnpfabric.uz/wp-content/uploads/2019/09/noun_delivery_1095359.svg",
      imgAlt: t("service_title"),
      title: t("service_title"),
      description: t("service_description"),
    },
    {
      imgSrc:
        "https://www.bnpfabric.uz/wp-content/uploads/2019/09/noun_guarantee_952398.svg",
      imgAlt: t("service_title2"),
      title: t("service_title2"),
      description: t("service_description2"),
    },
    {
      imgSrc:
        "https://www.bnpfabric.uz/wp-content/uploads/2019/09/Group-995.svg",
      imgAlt: t("service_title3"),
      title: t("service_title3"),
      description: t("service_description3"),
    },
    {
      imgSrc:
        "https://www.bnpfabric.uz/wp-content/uploads/2019/09/noun_Wallet_745515.svg",
      imgAlt: t("service_title4"),
      title: t("service_title4"),
      description: t("service_description4"),
    },
  ];

  return (
    <div className="service_wrapper">
      {items.map((item, index) => (
        <ServiceItem
          key={index}
          imgSrc={item.imgSrc}
          imgAlt={item.imgAlt}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default Service;
