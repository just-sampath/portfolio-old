import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
    text: string;
    delay?: number;
    className?: string;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ text, delay = 0, className = "" }) => {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        let cancelled = false;
        let intervalId: ReturnType<typeof setInterval> | undefined;

        // Clear previous text on the next macrotask (avoids sync setState-in-effect lint).
        // Registered before the type timer so delay=0 still resets before the first tick.
        const resetTimer = setTimeout(() => {
            if (!cancelled) setDisplayedText('');
        }, 0);

        const timerId = setTimeout(() => {
            if (cancelled) return;
            let index = 0;
            intervalId = setInterval(() => {
                if (cancelled) return;
                index += 1;
                setDisplayedText(text.slice(0, index));
                if (index >= text.length && intervalId) clearInterval(intervalId);
            }, 30);
        }, delay);

        return () => {
            cancelled = true;
            clearTimeout(resetTimer);
            clearTimeout(timerId);
            if (intervalId) clearInterval(intervalId);
        };
    }, [text, delay]);

    return (
        <span className={className}>
            <span className="sr-only">{text}</span>
            <span aria-hidden="true">{displayedText}</span>
        </span>
    );
};

export default TypewriterText;
