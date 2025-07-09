import React from "react";
import "./about.css";
import { ArrowLeftIcon, ArrowRightIcon } from "../../assets/icons/Icons.jsx";
import { useTranslation } from "react-i18next";

export default function About({ goTo, transition }) {
    const { t } = useTranslation();

    const description = t("about.description").split('\n\n');

    return (
        <div className={`portfolio-section ${transition}`}>
            <div className="portfolio-main full-height">
                <div className="about-section">
                    {/* Text Section */}
                    <div className="about-text">
                        <h2 className="about-title">{t("about.title")}</h2>
                        <p className="about-description">
                            <strong>{t("about.sectionTitle")}</strong>
                            <br/><br/>
                            {description.map((para, index) => (
                                <span key={index}>
                                    {para}
                                    <br/><br/>
                                </span>
                            ))}
                        </p>
                        <a
                            className="learn-more-button"
                            href={t("about.cvLink")}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {t("about.cvText")}
                        </a>
                    </div>

                    {/* Image */}
                    <div className="about-image-wrapper">
                        <div className="about-image-background" />
                        <img
                            src="/img/about.jpg"
                            alt="Loan Truong"
                            className="about-image-square"
                        />
                    </div>

                    {/* Arrows */}
                    <div className="arrow left" onClick={() => goTo("home")}>
                        <ArrowLeftIcon className="arrow-svg" />
                    </div>
                    <div className="arrow right" onClick={() => goTo("education")}>
                        <ArrowRightIcon className="arrow-svg" />
                    </div>
                </div>
            </div>
        </div>
    );
}
