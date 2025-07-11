import React, { useEffect, useState } from "react";
import "./typewriter.css";

export default function TypewriterText({ text }) {
    const [displayed, setDisplayed] = useState("");
    const [index, setIndex] = useState(0);
    const [typing, setTyping] = useState(true);

    useEffect(() => {
        const speed = 250;
        const interval = setInterval(() => {
            if (typing) {
                if (index < text.length) {
                    setDisplayed((prev) => prev + text[index]);
                    setIndex((prev) => prev + 1);
                } else {
                    setTyping(false); // bắt đầu xóa
                }
            } else {
                if (index > 0) {
                    setDisplayed((prev) => prev.slice(0, -1));
                    setIndex((prev) => prev - 1);
                } else {
                    setTyping(true); // bắt đầu gõ lại
                }
            }
        }, speed);

        return () => clearInterval(interval);
    }, [index, typing, text]);

    return (
        <h1 className="portfolio-typewriter">
            {displayed}
            <span className="caret" />
        </h1>
    );
}
