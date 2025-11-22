import React from 'react';

interface TerminalLayoutProps {
    children: React.ReactNode;
}

const TerminalLayout: React.FC<TerminalLayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-black text-gray-300 font-mono selection:bg-white selection:text-black overflow-x-hidden relative">
            {/* CRT Scanline & Vignette */}
            <div className="fixed inset-0 pointer-events-none z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,6px_100%] opacity-20"></div>
            <div className="fixed inset-0 pointer-events-none z-50 shadow-[inset_0_0_100px_rgba(0,0,0,0.9)]"></div>

            <main className="relative z-10">
                {children}
            </main>
        </div>
    );
};

export default TerminalLayout;
