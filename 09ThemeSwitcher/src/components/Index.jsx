import React from 'react';
import useLocalStore from './useLocalStore';

const LightDarkMode = () => {
    const [theme, setTheme] = useLocalStore("theme", "dark");

    const handleToggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <div className={`${theme === "dark" ? "bg-black text-white" : "bg-white text-black"} w-full min-h-screen flex justify-center items-center`}>
            <div className='container flex flex-col justify-center items-center'>
                <p className='mb-4 text-4xl'>Hello World!</p>
                <button
                    onClick={handleToggleTheme}
                    className={`${theme === "dark" ? "bg-white text-black" : "bg-black text-white"} rounded-[8px] py-2 px-4 cursor-pointer text-center`}
                >
                    Change Theme
                </button>
            </div>
        </div>
    );
};

export default LightDarkMode;
