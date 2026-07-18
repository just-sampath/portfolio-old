import React, { useState, useEffect } from 'react';
import { useInterval } from '../../hooks/useInterval';

interface HeaderProps {
    activeCommand: string;
    scrollTo: (id: string) => void;
}

const NAV_ITEMS = [
    { label: 'ABOUT', id: 'about' },
    { label: 'SKILLS', id: 'skills' },
    { label: 'EXPERIENCE', id: 'experience' },
    { label: 'HIGHLIGHTS', id: 'projects' },
    { label: 'CONTACT', id: 'contact' },
] as const;

const Header: React.FC<HeaderProps> = ({ activeCommand, scrollTo }) => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [scrolled, setScrolled] = useState(0);

    useInterval(() => setCurrentTime(new Date()), 1000);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-40 bg-black/90 backdrop-blur border-b border-white/10 h-14 flex items-center justify-between px-4 sm:px-8 text-xs uppercase tracking-widest transition-all duration-300 ${scrolled > 50 ? 'border-white/30 shadow-[0_5px_20px_rgba(255,255,255,0.05)]' : ''}`}>
            <div className="flex items-center gap-3">
                <div className="flex gap-1.5" aria-hidden="true">
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-800 border border-gray-600 hover:bg-white transition-colors"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-800 border border-gray-600 hover:bg-gray-400 transition-colors"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-800 border border-gray-600 hover:bg-gray-600 transition-colors"></div>
                </div>
                <span className="hidden sm:inline text-gray-500 ml-2">~/portfolio/main</span>
            </div>
            <nav aria-label="Primary" className="flex items-center gap-3 sm:gap-4 md:gap-6 overflow-x-auto">
                {NAV_ITEMS.map((item) => {
                    const isActive = activeCommand === item.id;
                    return (
                        <button
                            key={item.id}
                            type="button"
                            onClick={() => scrollTo(item.id)}
                            aria-current={isActive ? 'location' : undefined}
                            className={`hover:text-white hover:underline decoration-1 underline-offset-4 transition-all whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${isActive ? 'text-white font-bold' : 'text-gray-500'}`}
                        >
                            {item.label}
                        </button>
                    );
                })}
                <span className="hidden md:inline text-white bg-gray-900 px-2 py-1 border border-gray-800 ml-2" aria-hidden="true">
                    {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
            </nav>
        </header>
    );
};

export default Header;
