import React from "react";
import "./experience.css";
import { ArrowLeftIcon, ArrowRightIcon } from "../../assets/icons/Icons.jsx";
import {useTranslation} from "react-i18next";

export default function Experience({ goTo, transition }) {
    const { t } = useTranslation();
    const experienceList = t("experience.list", { returnObjects: true });

    const getPositionClass = (index) => (index % 2 === 0 ? "timeline-item above-line" : "timeline-item below-line");
    const getCardClass = (index) => (index % 2 === 0 ? "card-orange" : "card-light");

    return (
        <div className={`portfolio-section ${transition}`}>
            <h2 className="experience-title-floating">{t("experience.title")}</h2>
            <div className="portfolio-main full-height">
                <div className="timeline-container">
                    <div className="timeline-line"/>
                    <div className="timeline-items">
                        {experienceList.map((exp, index) => (
                            <div
                                key={index}
                                className={getPositionClass(index)}
                            >
                                <div className={`experience-card ${getCardClass(index)}`}>
                                    <div className="experience-header">
                                        <h4 className="experience-company">{exp.company}</h4>
                                        <h3 className="experience-year">{exp.year}</h3>
                                    </div>
                                    <p className="experience-city">{exp.city}</p>
                                    <p className="experience-desc">{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="experience-footer">
                    <div className="arrow left" onClick={() => goTo("education")}>
                        <ArrowLeftIcon className="arrow-svg"/>
                    </div>
                    <div className="arrow right" onClick={() => goTo("project")}>
                        <ArrowRightIcon className="arrow-svg"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
