import React, { useEffect, useState } from 'react';

interface BootScreenProps {
    onBootComplete: () => void;
}

/** Matches the progress bar animation below. */
const BOOT_MS = 800;

const BootScreen: React.FC<BootScreenProps> = ({ onBootComplete }) => {
    const [currentTime] = useState(new Date());

    useEffect(() => {
        const timer = setTimeout(onBootComplete, BOOT_MS);
        return () => clearTimeout(timer);
    }, [onBootComplete]);

    return (
        <div className="min-h-screen bg-black flex items-center justify-center font-mono text-white">
            <div className="w-64">
                <div className="mb-2 text-xs text-gray-400"> BIOS DATE {currentTime.toLocaleDateString()} </div>
                <div className="mb-4"> SYSTEM CHECK... </div>
                <div className="h-1 w-full bg-gray-900 rounded overflow-hidden">
                    <div className="h-full bg-white animate-[width_0.8s_ease-in-out_forwards]" style={{ width: '100%' }}></div>
                </div>
                <div className="mt-2 text-xs text-gray-400">
                    LOAD_COMPLETE
                </div>
            </div>
        </div>
    );
};

export default BootScreen;
