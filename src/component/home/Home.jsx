import React, { useState } from "react";
import "./home.css";
import About from "../about/About.jsx";
import Contact from "../contact/Contact.jsx";
import Education from "../education/Education.jsx";
import { ArrowRightIcon, EmailIcon, GithubIcon, LinkedinIcon } from "../../assets/icons/Icons.jsx";
import Project from "../project/Project.jsx";
import Experience from "../experience/Experience.jsx";
import TypewriterText from "../../helps/TypewriterText.jsx";
import homeData from "../../data/homeData.json";
import {useTranslation} from "react-i18next";
import i18n from "../../helps/i18n.js"
import Header from "../header/Header.jsx";


export default function Home() {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [section, setSection] = useState("home");
    const [transition, setTransition] = useState("");
    const yearsOfExperience = new Date().getFullYear() - homeData.startYear + 1;

    const { t } = useTranslation();


    const goTo = (target) => {
        console.log("goTo target:", target);
        setTransition("slide-out-left");
        setTimeout(() => {
            setSection(target);
            setTransition("slide-in-right");
        }, 300);
    };


    const buttons = [
        { key: "getInTouch", type: "primary" },
        { key: "viewMyWork", type: "outline" }
    ];

    return (
        <div
            className={`portfolio-container ${isDarkMode ? "dark" : "light"} ${
                i18n.language === "vi" ? "lang-vi" : ""
            }`}
        >
            {/* Header */}
            <Header
                section={section}
                setSection={setSection}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
            />

            {/* Main section */}
            <main className="portfolio-main full-height">
                {section === "home" && (
                    <div className={`portfolio-section ${transition} fade-in`}>
                        <div className="home-intro">
                            <div className="home-left">
                                <h1 className="home-title">{t("home.Hi")} <br/><TypewriterText text={t("home.name")}/>
                                </h1>
                                <h2 className="home-role">{t("home.role")}</h2>
                                <p className="home-description">{t("home.description")}</p>
                                <div className="home-buttons">
                                    {buttons.map((btn, i) => {
                                        const handleClick = () => {
                                            if (btn.key === "getInTouch") goTo("contact");
                                            else if (btn.key === "viewMyWork") goTo("project");
                                        };

                                        return (
                                            <button key={i} className={`btn btn-${btn.type}`} onClick={handleClick}>
                                                {t(`home.buttons.${btn.key}`)}
                                            </button>
                                        );
                                    })}

                                </div>

                                <div className="social-icons">
                                    {homeData.socials.includes("github") && (
                                        <a href={homeData.links.github} target="_blank" rel="noopener noreferrer">
                                            <GithubIcon className="social-svg"/>
                                        </a>
                                    )}
                                    {homeData.socials.includes("linkedin") && (
                                        <a href={homeData.links.linkedin} target="_blank" rel="noopener noreferrer">
                                            <LinkedinIcon className="social-svg"/>
                                        </a>
                                    )}
                                    {homeData.socials.includes("email") && (
                                        <div onClick={() => goTo("contact")} style={{cursor: "pointer"}}>
                                            <EmailIcon className="social-svg"/>
                                        </div>
                                    )}
                                </div>

                            </div>

                            <div className="home-right">
                                <div className="avatar-circle">
                                    <img src={homeData.avatar} alt="Profile"/>
                                </div>
                                <div className="experience-badge">
                                    <strong>{yearsOfExperience}+ Years</strong>
                                    <div>Experience</div>
                                </div>
                            </div>
                        </div>
                        <div className="arrow right" onClick={() => goTo("about")}><ArrowRightIcon
                            className="arrow-svg"/></div>
                    </div>
                )}
                {section === "about" && <About goTo={goTo} transition={transition}/>}
                {section === "education" && <Education goTo={goTo} transition={transition}/>}
                {section === "experience" && <Experience goTo={goTo} transition={transition}/>}
                {section === "project" && <Project goTo={goTo} transition={transition}/>}
                {section === "contact" && <Contact goTo={goTo} transition={transition}/>}
            </main>
            <footer className="portfolio-footer">
                <p>Copyright © {new Date().getFullYear()} by Loan Truong. All rights reserved.</p>
            </footer>

        </div>
    );
}
