import theme from '../utils/themeContext'
import { useContext } from 'react'

const Skills = () => {
    const { isDarkMode } = useContext(theme);
    const skillCategories = [
        {
            title: "Languages",
            icon: "💻",
            skills: ["JavaScript (ES6+)", "TypeScript", "Java", "SQL", "HTML5/CSS3"],
            color: "bg-gray-50 border-gray-200 text-gray-800"
        },
        {
            title: "Frontend",
            icon: "🎨",
            skills: ["React.js", "Redux Toolkit", "Next.js", "Tailwind CSS", "Webpack", "Jest", "SASS"],
            color: "bg-gray-50 border-gray-200 text-gray-800"
        },
        {
            title: "Backend & APIs",
            icon: "⚙️",
            skills: ["Node.js", "Express.js", "RESTful APIs", "GraphQL", "JWT Auth", "WebSockets"],
            color: "bg-gray-50 border-gray-200 text-gray-800"
        },
        {
            title: "Tools & Cloud",
            icon: "☁️",
            skills: ["Git", "Kibana", "Postman", "AWS", "Docker"],
            color: "bg-gray-50 border-gray-200 text-gray-800"
        },
        {
            title: "Software Engineering",
            icon: "🏗️",
            skills: ["System Design", "Distributed Systems", "Microservices"],
            color: "bg-gray-50 border-gray-200 text-gray-800"
        }
    ];

    return (
        <div className={`px-16 py-12 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
            <div className="">
                <h1 className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Technical Skills</h1>
                <p className={`text-lg mb-12 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    A comprehensive overview of my technical expertise and proficiencies
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <div 
                            key={index}
                            className={`flex flex-col border rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group ${
                                isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                            }`}
                        >
                            {/* Card Header with Icon */}
                            <div className={`p-6 text-white ${
                                isDarkMode ? 'bg-gradient-to-r from-gray-700 to-gray-800' : 'bg-gradient-to-r from-gray-600 to-gray-700'
                            }`}>
                                <div className="flex items-center">
                                    <div className="bg-white/20 rounded-lg p-3 mr-4">
                                        <span className="text-2xl">{category.icon}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{category.title}</h3>
                                        {/* <p className="text-gray-200 text-sm">{category.skills.length} technologies</p> */}
                                    </div>
                                </div>
                            </div>
                            
                            {/* Skills Content - Flex grow to fill space */}
                            <div className="p-6 flex-grow">
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, skillIndex) => (
                                        <span 
                                            key={skillIndex}
                                            className={`inline-flex items-center px-3 py-2 rounded-lg text-sm font-medium border transition-all duration-200 cursor-default ${
                                                isDarkMode 
                                                ? 'bg-gray-700 text-gray-300 border-gray-600 hover:bg-gray-600 hover:border-gray-500' 
                                                : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100 hover:border-gray-300'
                                            }`}
                                        >
                                            <span className={`w-2 h-2 rounded-full mr-2 ${isDarkMode ? 'bg-gray-500' : 'bg-gray-600'}`}></span>
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Bottom Accent Line - Always at bottom */}
                            <div className={`h-1 mt-auto ${
                                isDarkMode ? 'bg-gradient-to-r from-gray-700 to-gray-600' : 'bg-gradient-to-r from-gray-600 to-gray-400'
                            }`}></div>
                        </div>
                    ))}
                </div>

                {/* Additional Skills Summary */}
                <div className={`mt-16 rounded-lg p-8 shadow-md border ${
                    isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                }`}>
                    <div className="text-center">
                        <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Core Competencies</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>5+</div>
                                <div className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Programming Languages</div>
                            </div>
                            <div className="text-center">
                                <div className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>15+</div>
                                <div className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Technologies & Tools</div>
                            </div>
                            <div className="text-center">
                                <div className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>3+</div>
                                <div className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Years Experience</div>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
    )
}

export default Skills;