import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";

import "./ContactUs.scss";

const ContactUs = () => {
  //LOADING
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();

  // TOKEN
  const botToken = process.env.REACT_APP_BOT_TOKEN;
  const userToken = process.env.REACT_APP_CHAT_ID;

  console.log(botToken);

  // STATE ORQALI QIYMATLARNI BOSHQARISH
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    message: "",
  });

  // Xabar yuborish funksiyasi
  const sendMessage = (event) => {
    event.preventDefault();
    setLoading(true);

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const textMessage = `
      Name: ${formData.name}
      Phone: ${formData.number}
      Message: ${formData.message}
    `;

    // Axios orqali Telegram botga so'rov yuborish
    axios
      .post(url, {
        chat_id: userToken,
        text: textMessage,
      })
      .then((res) => {
        alert(t("contact_alert"));

        // Formani tozalash
        setFormData({
          name: "",
          number: "",
          message: "",
        });
      })
      .catch((error) => {
        console.log(t("contact_error"), error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Input qiymatlarini yangilash
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="contact" id="link" aria-labelledby="contact-heading">
      <div className="container">
        <div className="contact_top">
          <form
            className="contact_form aos-init aos-animate"
            data-aos="fade-right"
            aria-describedby="form-description"
            onSubmit={sendMessage}
          >
            <h3 id="contact-heading" className="contact_form_title">
              {t("contact_address")}
            </h3>
            <input
              type="text"
              name="name"
              placeholder={t("contact_email")}
              required
              aria-label="User Name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="number"
              placeholder={t("contact_phone")}
              required
              aria-label="User Phone Number"
              value={formData.number}
              onChange={handleChange}
            />
            <textarea
              name="message"
              rows="6"
              maxLength="200"
              placeholder={t("contact_textarea")}
              value={formData.message}
              onChange={handleChange}
              aria-label="User Message"
            ></textarea>
            <button
              type="submit"
              disabled={loading}
              className="contact_form-btn"
            >
              {loading
                ? `${t("contact_input_btn_loader")}...`
                : t("contact_send")}
            </button>
          </form>
          <iframe
            className="contact_map"
            src="https://maps.google.com/maps?q=39.747452957301974%2C%2064.45996439941372&amp;t=m&amp;z=17&amp;output=embed&amp;iwloc=near"
            title="Location Map"
            aria-label="Location Map Coordinates 39.747452957301974, 64.45996439941372"
          ></iframe>
        </div>
        <div className="contact_bottom">
          <ul className="contact_list" aria-label="Contact Information">
            {/* Contact info */}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
