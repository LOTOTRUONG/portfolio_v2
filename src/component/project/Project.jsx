import React, { useState } from "react";
import "./project.css";
import { ArrowLeftIcon, ArrowRightIcon } from "../../assets/icons/Icons.jsx";
import { colorsMap } from "./ColorsMap.js";
import { useTranslation } from "react-i18next";

export default function Project({ goTo, transition }) {
    const { t } = useTranslation();
    const projectData = t("project.list", { returnObjects: true });

    const [category, setCategory] = useState("all");
    const [currentPage, setCurrentPage] = useState(0);
    const projectsPerPage = 3;

    const categoryKeys = ["all", "web", "app"];
    const categoryLabels = {
        all: t("project.tabs.all"),
        web: t("project.tabs.web"),
        app: t("project.tabs.app"),
    };

    const filteredProjects =
        category === "all"
            ? projectData
            : projectData.filter((project) => project.category === category);


    const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
    const currentProjects = filteredProjects.slice(
        currentPage * projectsPerPage,
        currentPage * projectsPerPage + projectsPerPage
    );

    const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 0));
    const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));

    const handleCategoryChange = (newCategoryKey) => {
        setCategory(newCategoryKey);
        setCurrentPage(0);
    };

    return (
        <div className={`portfolio-section ${transition}`}>
            <div className="portfolio-main full-height">
                <h2 className="project-title">{t("project.title")}</h2>

                <div className="project-tabs">
                    {categoryKeys.map((key) => (
                        <button
                            key={key}
                            onClick={() => handleCategoryChange(key)}
                            className={category === key ? "active" : ""}
                        >
                            {categoryLabels[key]}
                        </button>
                    ))}
                </div>

                <div className="project-grid">
                    {currentProjects.map((project, index) => (
                        <div key={index} className="project-card-v2">
                            <div className="project-card-header">
                                <div className="project-icon-wrapper" style={{ color: project.color }}>
                                    <img src={project.image} alt="icon" className="project-icon" />
                                </div>
                            </div>

                            <div className="project-card-body">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-tags">
                                    {project.techs.map((tech, i) => {
                                        const key = tech.toLowerCase().replace(/\s+/g, "");
                                        const style = colorsMap[key] || { background: "#f1f5f9", color: "#334155" };
                                        return (
                                            <span key={i} style={style}>
                                            {tech}
                                          </span>
                                        );
                                    })}
                                </div>

                                <div className="project-links">
                                    <a href={project.demo}>Live Demo</a>
                                    <a href={project.source}>Source Code</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="project-pagination">
                    <button onClick={handlePrev} disabled={currentPage === 0}>◀</button>
                    <span>{currentPage + 1} / {totalPages}</span>
                    <button onClick={handleNext} disabled={currentPage === totalPages - 1}>▶</button>
                </div>

                <div className="edu-nav">
                    <div className="arrow left" onClick={() => goTo("experience")}>
                        <ArrowLeftIcon className="arrow-svg" />
                    </div>
                    <div className="arrow right" onClick={() => goTo("contact")}>
                        <ArrowRightIcon className="arrow-svg" />
                    </div>
                </div>
            </div>
        </div>
    );
}
