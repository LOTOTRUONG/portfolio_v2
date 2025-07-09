import React, { useState } from "react";
import { FaMoon, FaSun, FaGlobe } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import i18n from "../../helps/i18n";
import "./header.css";

export default function Header({ section, setSection, isDarkMode, setIsDarkMode }) {
    const [selectedLang, setSelectedLang] = useState(i18n.language || "en");
    const [showLangMenu, setShowLangMenu] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { t } = useTranslation();

    const goTo = (target) => {
        setSection(target);
        setIsMenuOpen(false);
    };

    const isActive = (key) => (section === key ? "nav-active" : "");

    const handleLangSelect = (lang) => {
        setSelectedLang(lang);
        i18n.changeLanguage(lang);
        setShowLangMenu(false);
    };

    return (
        <header className="portfolio-header">
            <img className="portfolio-logo" src="img/logo_loto.png"/>

            <div className="hamburger" onClick={() => setIsMenuOpen((prev) => !prev)}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <nav className={`portfolio-nav nav-glow ${isMenuOpen ? "show" : ""}`}>
                {["home", "about", "education", "experience", "project", "contact"].map((key, index) => (
                    <a
                        key={key}
                        onClick={() => goTo(key)}
                        className={`nav-link ${isActive(key)}`}
                        style={{ animationDelay: `${index * 0.2}s` }}
                    >
                        {t(`nav.${key}`)}
                    </a>
                ))}
            </nav>

            <div className="header-actions">
                <div className="language-dropdown">
                    <button className="lang-button" onClick={() => setShowLangMenu((prev) => !prev)}>
                        <FaGlobe className="lang-icon" />
                        {selectedLang.toUpperCase()} <span className="lang-caret">▼</span>
                    </button>
                    {showLangMenu && (
                        <ul className="lang-menu">
                            {["en", "fr", "vi"].map((lang) => (
                                <li
                                    key={lang}
                                    onClick={() => handleLangSelect(lang)}
                                    className={lang === selectedLang ? "active" : ""}
                                >
                                    {lang.toUpperCase()}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <button className="theme-toggle" onClick={() => setIsDarkMode((prev) => !prev)}>
                    {isDarkMode ? <FaMoon /> : <FaSun />}
                </button>
            </div>
        </header>
    );
}
