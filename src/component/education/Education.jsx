import React from "react";
import "./education.css";
import { ArrowLeftIcon, ArrowRightIcon } from "../../assets/icons/Icons.jsx";
import { useTranslation } from "react-i18next";

export default function Education({ goTo, transition }) {
    const { t } = useTranslation();

    const educationList = t("education.list", { returnObjects: true });

    return (
        <div className={`portfolio-section ${transition}`}>
            <div className="portfolio-main full-height">
                <div className="education-header">
                    <img src="/img/education.jpg" alt="Education" className="education-cover" />
                    <h2 className="education-title">{t("education.title")}</h2>
                </div>

                <div className="education-content">
                    {educationList.map((edu, index) => (
                        <div key={index} className="edu-card">
                            <h3 className="edu-year">{edu.year}</h3>
                            <h4 className="edu-school">{edu.school}</h4>
                            <p className="edu-text">{edu.text}</p>
                            <p className="edu-site">{edu.site}</p>
                        </div>
                    ))}
                </div>

                <div className="edu-nav">
                    <div className="arrow left" onClick={() => goTo("about")}>
                        <ArrowLeftIcon className="arrow-svg" />
                    </div>
                    <div className="arrow right" onClick={() => goTo("experience")}>
                        <ArrowRightIcon className="arrow-svg" />
                    </div>
                </div>
            </div>
        </div>
    );
}
