import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
    text: string;
    delay?: number;
    className?: string;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ text, delay = 0, className = "" }) => {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        let index = 0;
        const timer = setTimeout(() => {
            const interval = setInterval(() => {
                setDisplayedText((prev) => {
                    if (index >= text.length) {
                        clearInterval(interval);
                        return prev;
                    }
                    index++;
                    return text.slice(0, index);
                });
            }, 30);
            return () => clearInterval(interval);
        }, delay);
        return () => clearTimeout(timer);
    }, [text, delay]);

    return <span className={className}>{displayedText}</span>;
};

export default TypewriterText;
