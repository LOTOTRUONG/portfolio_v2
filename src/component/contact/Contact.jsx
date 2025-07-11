import React from "react";
import "./contact.css";
import { ArrowLeftIcon, ArrowRightIcon } from "../../assets/icons/Icons.jsx";
import { handleSend } from "./SendEmail.js";
import { useTranslation } from "react-i18next";

export default function Contact({ goTo, transition }) {
    const { t } = useTranslation();
    const contact = t("contact.list", { returnObjects: true })[0];

    return (
        <div className={`portfolio-section ${transition} fade-in`}>
            <div className="portfolio-main full-height">
                <div className="contact-header">
                    <h2 className="contact-title">{t("contact.title")}</h2>
                </div>

                <div className="contact-content">
                    <div className="contact-info">
                        <h2 className="orange">{t("contact.subtitle_contact")}</h2>
                        <p><strong>Email:</strong> {contact.email}</p>
                        <p><strong>{t("contact.locationLabel")}:</strong> {contact.location}</p>
                        <p><strong>{t("contact.workingDaysLabel")}: </strong> {contact.workingDays}</p>
                        <p><strong>{t("contact.workingHoursLabel")}: </strong> {contact.workingHours}</p>
                    </div>

                    <form className="contact-form" onSubmit={handleSend}>
                        <h2 className="orange">{t("contact.subtitle_message")}</h2>
                        <input type="text" name="name" placeholder={t("contact.form.name")} required />
                        <input type="email" name="email" placeholder={t("contact.form.email")} required />
                        <input type="text" name="subject" placeholder={t("contact.form.subject")} />
                        <textarea name="message" placeholder={t("contact.form.message")} rows="8" required />
                        <button type="submit" className="contact-submit">
                            {t("contact.form.submit")} ✈️
                        </button>
                    </form>
                </div>

                <div className="contact-nav">
                    <div className="arrow left" onClick={() => goTo("project")}>
                        <ArrowLeftIcon className="arrow-svg" />
                    </div>
                    <div className="arrow right" onClick={() => goTo("home")}>
                        <ArrowRightIcon className="arrow-svg" />
                    </div>
                </div>
            </div>
        </div>
    );
}
