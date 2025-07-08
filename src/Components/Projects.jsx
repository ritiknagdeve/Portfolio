import theme from '../utils/themeContext'
import { useContext } from 'react'

const Projects = () => {
    const { isDarkMode } = useContext(theme);
    const projects = [
        {
            title: "NextHIRE - AI Career Coach",
            category: "AI Platform",
            description: "Full-stack AI-powered career coaching platform that provides personalized guidance, interview preparation, and career development recommendations using advanced AI technologies.",
            techStack: [
                "Next.js", "React", "Tailwind CSS", "Prisma", "Neon DB", 
                "Clerk Auth", "Gemini API", "Shadcn UI", "Inngest"
            ],
            features: [
                "AI-powered career recommendations",
                "Personalized interview preparation", 
                "Career path guidance and analysis",
                "Real-time coaching sessions",
                "Progress tracking and analytics"
            ],
            githubUrl: "https://github.com/ritiknagdeve/NextHIRE",
            liveUrl: "#",
            icon: "🤖"
        },
        {
            title: "FlixGPT - AI Movie Recommender",
            category: "Entertainment App",
            description: "Netflix-inspired movie discovery platform enhanced with OpenAI's GPT technology for intelligent movie recommendations, reviews, and personalized content curation.",
            techStack: [
                "React", "Vite", "Tailwind CSS", "Firebase", "OpenAI API", 
                "TMDB API", "JavaScript", "Redux"
            ],
            features: [
                "GPT-powered movie search and recommendations",
                "Firebase authentication & user management",
                "Real-time movie data from TMDB API",
                "Internationalization support",
                "Advanced search and filtering",
                "Responsive Netflix-like UI"
            ],
            githubUrl: "https://github.com/ritiknagdeve/FlixGPT",
            liveUrl: "https://movies-gpt.netlify.app/",
            icon: "🎬"
        },
        {
            title: "Saturn - Meeting Summary Interface",
            category: "Productivity Tool",
            description: "Interactive meeting summary interface with advanced drag-and-drop functionality, transcript integration, and modular component architecture for efficient meeting management.",
            techStack: [
                "React", "Vite", "Tailwind CSS", "Hello Pangea DnD", 
                "JavaScript", "CSS3", "Modular Components"
            ],
            features: [
                "Drag-and-drop meeting summary reorganization",
                "Real-time transcript integration",
                "Contextual transcript panel with search",
                "Modular component architecture",
                "Responsive design implementation",
                "Interactive UI animations"
            ],
            githubUrl: "https://github.com/ritiknagdeve/saturnweb",
            liveUrl: "https://saturnweb-virid.vercel.app/",
            icon: "📝"
        }
    ];

    return (
        <div className={`px-16 py-12 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
            <div className="">
                <h1 className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Featured Projects</h1>
                <p className={`text-lg mb-12 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    A showcase of my recent work in full-stack development, AI integration, and modern web technologies
                </p>
                
                <div className="space-y-8">
                    {projects.map((project, index) => (
                        <div 
                            key={index}
                            className={`border rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden ${
                                isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                            }`}
                        >
                            {/* Project Header with Gradient */}
                            <div className={`px-6 py-4 ${
                                isDarkMode ? 'bg-gradient-to-r from-gray-700 to-gray-800' : 'bg-gradient-to-r from-gray-600 to-gray-700'
                            }`}>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center text-xl">
                                            {project.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                                            <span className="text-gray-200 text-sm">{project.category}</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <a 
                                            href={project.githubUrl} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center text-white hover:bg-gray-800 hover:bg-opacity-70 transition-all duration-200"
                                            title="View Source Code"
                                        >
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                            </svg>
                                        </a>
                                        {project.liveUrl !== "#" && (
                                            <a 
                                                href={project.liveUrl} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center text-white hover:bg-gray-800 hover:bg-opacity-70 transition-all duration-200"
                                                title="View Live Demo"
                                            >
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className="p-6">
                                <p className={`mb-6 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{project.description}</p>
                                
                                {/* Technology Stack */}
                                <div className="mb-6">
                                    <div className="flex items-center mb-3">
                                        <svg className={`w-5 h-5 mr-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                        </svg>
                                        <h4 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Tech Stack</h4>
                                        {/* <span className="ml-2 text-sm text-gray-500">({project.techStack.length} technologies)</span> */}
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.map((tech, techIndex) => (
                                            <span 
                                                key={techIndex} 
                                                className={`px-3 py-1 text-sm rounded-full font-medium border transition-colors ${
                                                    isDarkMode 
                                                    ? 'bg-gray-700 text-gray-300 border-gray-600 hover:bg-gray-600' 
                                                    : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200'
                                                }`}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                
                                {/* Key Features */}
                                <div>
                                    <div className="flex items-center mb-3">
                                        <svg className={`w-5 h-5 mr-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <h4 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Key Features</h4>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                        {project.features.map((feature, featureIndex) => (
                                            <div key={featureIndex} className="flex items-start">
                                                <div className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 ${
                                                    isDarkMode ? 'bg-gray-500' : 'bg-gray-500'
                                                }`}></div>
                                                <span className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{feature}</span>
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
                        
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Projects;
