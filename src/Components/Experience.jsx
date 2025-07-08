import { useContext } from 'react';
import theme from '../utils/themeContext';
import ExperienceCard from './ExperienceCard';

const Experience = () => {
    const { isDarkMode } = useContext(theme);
    const experiences = [
        {
            title: "Software Engineer",
            company: "IndiaMART InterMESH Ltd.",
            duration: "May 2023 – Present",
            location: "Noida, India",
            technologies: "React, React Libraries, JavaScript, NodeJS, Express, Redux, REST, SQL",
            achievements: [
                "Led the migration of critical SEO DIR pages (IndiaMART's core supplier listing platform) to React & Node.js setup with SSR and CSR hybrid architecture, ensuring reduced load times (-17%) & improved search rankings",
                "Implemented the CityBar feature, used for instant supplier lookup according to cities using React Router and Redux, reducing navigation latency by 165ms and ensuring seamless SPA transitions for improved UX",
                "Developed & Integrated UI for PhotoSearch, IndiaMART's AI-powered visual search engine, using React, Redux, & virtualized rendering, improving real-time search experience, leading to 12% increase in user engagement",
                "Engineered scalable REST API endpoints for DIR Listings with pagination and lazy loading, enhancing React hydration and reducing payload size with progressive data fetching",
                "Incorporated AI tools (Co-Pilot, Cursor, GPT-4) into daily development workflow to refactor codebases, debug complex UI issues, and suggest performance optimizations — enhancing modularity, maintainability, and responsiveness across critical frontend modules"
            ]
        },
        {
            title: "Associate Software Engineer",
            company: "IndiaMART InterMESH Ltd.",
            duration: "Jun. 2022 – May. 2023",
            location: "Remote, India",
            technologies: "React, React Libraries, Redux, Javascript, Tailwind, NodeJS, Express",
            achievements: [
                "Migrated high-traffic Enquiry and BuyLead forms—used to connect buyers with suppliers—from JS+PHP setup to React-Node.js architecture for improving performance, scalability, and maintainability",
                "Engineered & Optimized Ad integrations across IndiaMART using Google Ads and Amazon's Product API, implementing lazy-loading, optimized re-renders, and request throttling, increasing annual ad revenue by $50K",
                "Integrated IndiaMART's forms into Vyapar, a third-party billing platform, replicating form flows, authentication & state management while ensuring UX/UI coherence, resulting in a 5K monthly increase in enquiries"
            ]
        },
        {
            title: "Software Engineer Intern",
            company: "IndiaMART InterMESH Ltd.",
            duration: "Feb. 2022 – May. 2022",
            location: "Remote, India",
            technologies: "JavaScript, jQuery, AJAX, HTML, CSS",
            achievements: [
                "Enhanced enquiry and BuyLead form flows by integrating personalized product recommendations, using AJAX resulting in a 6% increase in high-intent leads",
                "Developed an attachment feature for documents related to specific enquiries, leading to a significant boost in BuyLead consumption by sellers"
            ]
        }
    ];

    return(
        
        <div className={`px-16 py-12 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
            <div className="">
                <h1 className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Professional Experience</h1>
                <p className={`text-lg mb-12 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    My journey as a software engineer, building scalable applications and driving innovation
                </p>
                
                <div className="space-y-8">
                    {experiences.map((experience, index) => (
                    <ExperienceCard
                        key={index}
                        title={experience.title}
                        company={experience.company}
                        duration={experience.duration}
                        location={experience.location}
                        technologies={experience.technologies}
                        achievements={experience.achievements}
                    />
                ))}
                </div>
            </div>
        </div>
    )
}

export default Experience;