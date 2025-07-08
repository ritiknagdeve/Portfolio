import theme from '../utils/themeContext';
import { useContext } from 'react';

const ExperienceCard = ({ 
    title, 
    company, 
    duration, 
    location, 
    technologies, 
    achievements 
}) => {
    const { isDarkMode } = useContext(theme);
    const techArray = technologies.split(', ');

    return (
        <div className={`border rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden ${
            isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
        }`}>
            {/* Header Section with Company Branding */}
            <div className={`p-6 text-white ${
                isDarkMode ? 'bg-gradient-to-r from-gray-700 to-gray-800' : 'bg-gradient-to-r from-gray-600 to-gray-700'
            }`}>
                <div className="flex justify-between items-start">
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-1">{title}</h3>
                        <div className="flex items-center gap-2 mb-2">
                            
                            <h4 className="text-xl font-medium text-gray-100">{company}</h4>
                        </div>
                    </div>
                    <div className="text-right text-gray-100">
                        <div className="flex items-center gap-1 mb-1">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm font-medium">{duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm">{location}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-6">
                {/* Technologies Section */}
                <div className="mb-6">
                    <h5 className={`text-sm font-semibold mb-3 flex items-center gap-2 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                        Technologies & Tools
                    </h5>
                    <div className="flex flex-wrap gap-2">
                        {techArray.map((tech, index) => (
                            <span 
                                key={index}
                                className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${
                                    isDarkMode 
                                    ? 'bg-gray-700 text-gray-300 border-gray-600 hover:bg-gray-600' 
                                    : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                                }`}
                            >
                                {tech.trim()}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Key Achievements Section */}
                <div>
                    
                    <div className="space-y-3">
                        {achievements.map((achievement, index) => (
                            <div key={index} className="flex items-start group">
                                <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 mr-3 transition-colors ${
                                    isDarkMode 
                                    ? 'bg-gray-700 group-hover:bg-gray-600' 
                                    : 'bg-gray-100 group-hover:bg-gray-200'
                                }`}>
                                    <div className={`w-2 h-2 rounded-full ${isDarkMode ? 'bg-gray-500' : 'bg-gray-600'}`}></div>
                                </div>
                                <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{achievement}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Accent Line */}
            <div className={`h-1 ${
                isDarkMode ? 'bg-gradient-to-r from-gray-700 to-gray-600' : 'bg-gradient-to-r from-gray-600 to-gray-400'
            }`}></div>
        </div>
    );
};

export default ExperienceCard;
