import pp from '../assets/pp.jpeg'
import theme from '../utils/themeContext'
import { useContext } from 'react'

const MainBody = () => {
    const { isDarkMode } = useContext(theme);

    const handleSmoothScroll = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const headerHeight = 80;
            const elementPosition = element.offsetTop - headerHeight;
            
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className={`min-h-screen flex flex-col justify-center px-16 py-6 ${isDarkMode ? 'bg-gray-800' : ''}`}>
            {/* Main Content */}
            <div className="flex justify-between items-center mb-16">
                <div className="w-1/2 flex flex-col gap-6 pr-8">
                    <div className={`text-5xl font-bold leading-tight ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                        RITIK ROSHAN<br />NAGDEVE
                    </div>
                    <div className={`text-3xl font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Software Engineer</div>
                    <div className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Passionate full-stack developer with expertise in React, Node.js, and modern web technologies. 
                        I love creating scalable applications that solve real-world problems and deliver exceptional user experiences.
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-4 mt-6">
                        <button 
                            onClick={() => handleSmoothScroll('contact')}
                            className={`px-8 py-3 rounded-lg shadow-lg transition-colors font-medium ${
                                isDarkMode 
                                ? 'bg-gray-700 text-white hover:bg-gray-600' 
                                : 'bg-gray-600 text-white hover:bg-gray-700'
                            }`}
                        >
                            Contact Me
                        </button>
                        <button 
                            onClick={() => handleSmoothScroll('projects')}
                            className={`border-2 px-8 py-3 rounded-lg transition-colors font-medium ${
                                isDarkMode 
                                ? 'border-gray-600 text-gray-300 hover:bg-gray-800' 
                                : 'border-gray-600 text-gray-600 hover:bg-gray-50'
                            }`}
                        >
                            View Projects
                        </button>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-6 mt-8">
                        <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" 
                           className={`flex items-center gap-2 transition-colors ${
                               isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-700'
                           }`}>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                            <span>LinkedIn</span>
                        </a>
                        
                        <a href="mailto:your.email@gmail.com" 
                           className={`flex items-center gap-2 transition-colors ${
                               isDarkMode ? 'text-gray-400 hover:text-red-400' : 'text-gray-600 hover:text-red-500'
                           }`}>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.9.732-1.636 1.636-1.636h.749L12 10.545l9.615-6.724h.749c.904 0 1.636.732 1.636 1.636z"/>
                            </svg>
                            <span>Email</span>
                        </a>
                        
                        <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer"
                           className={`flex items-center gap-2 transition-colors ${
                               isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-800'
                           }`}>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            <span>GitHub</span>
                        </a>
                    </div>
                </div>
                
                <div className="w-1/2 flex justify-center items-center">
                    <img src={pp} alt="Ritik Roshan Nagdeve" className="w-2/3 max-w-md rounded-2xl object-cover shadow-2xl" />
                </div>
            </div>

            
        </div>
    )
}

export default MainBody