import {Link, useLocation} from 'react-router-dom';
import {useState} from 'react';
import theme from '../utils/themeContext';
import{useContext} from 'react';

const Header = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const { isDarkMode, toggleTheme } = useContext(theme);
    
    

    const handleSmoothScroll = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const headerHeight = 80; // Height of fixed header
            const elementPosition = element.offsetTop - headerHeight;
            
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className={`flex justify-between items-center px-16 py-6 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} shadow-sm fixed w-full top-0 z-50`}>
            <div><Link to="/" className={isDarkMode ? 'text-white hover:text-gray-300' : 'text-gray-800 hover:text-gray-600'}>RITIK ROSHAN NAGDEVE</Link></div>
            <div className="flex justify-between items-center gap-6">
                <div className="flex gap-6">
                    {isHomePage ? (
                        <>
                            <div className={`cursor-pointer ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-600'}`} onClick={() => handleSmoothScroll('home')}>About</div>
                            <div className={`cursor-pointer ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-600'}`} onClick={() => handleSmoothScroll('experience')}>Experience</div>
                            <div className={`cursor-pointer ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-600'}`} onClick={() => handleSmoothScroll('skills')}>Skills</div>
                            <div className={`cursor-pointer ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-600'}`} onClick={() => handleSmoothScroll('projects')}>Projects</div>
                            <div className={`cursor-pointer ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-600'}`} onClick={() => handleSmoothScroll('contact')}>Contact</div>
                        </>
                    ) : (
                        <>
                            <div><Link to="/about" className={isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-600'}>About</Link></div>
                            <div><Link to="/experience" className={isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-600'}>Experience</Link></div>
                            <div><Link to="/skills" className={isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-600'}>Skills</Link></div>
                            <div><Link to="/projects" className={isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-600'}>Projects</Link></div>
                            <div><Link to="/contact" className={isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-600'}>Contact</Link></div>
                        </>
                    )}
                </div>
                <button onClick={toggleTheme}
                    className={`ml-4 p-2 rounded-lg transition-colors ${isDarkMode ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'}`}
                    aria-label="Toggle theme"
                >
                    {isDarkMode ? (
                        // Sun icon for light mode
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m0 13.5V21m8.25-9H21M3 12H4.75m15.364-6.364l-1.591 1.591M6.227 17.773l-1.591 1.591m0-13.182l1.591 1.591m13.182 13.182l-1.591-1.591M12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" />
                        </svg>
                    ) : (
                        // Moon icon for dark mode
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0112 21.75c-5.385 0-9.75-4.365-9.75-9.75 0-4.136 2.664-7.64 6.442-9.049a.75.75 0 01.908.911A7.501 7.501 0 0019.5 15.84a.75.75 0 01.911.911z" />
                        </svg>
                    )}
                </button>
            </div>
        </div>
    );
};

export default Header;