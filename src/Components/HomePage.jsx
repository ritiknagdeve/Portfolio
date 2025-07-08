import MainBody from './MainBody'
import Skills from './Skills'
import Projects from './Projects'
import Experience from './Experience'
import Contact from './Contact'

const HomePage = () => {
    return (
        <div className="pt-20 bg-gray-50"> {/* Add padding for fixed header */}
            <section id="home" className="min-h-screen">
                <MainBody />
            </section>
            <section id="experience" className="min-h-screen">
                <Experience />
            </section>
            <section id="skills" className="min-h-screen">
                <Skills />
            </section>
            <section id="projects" className="min-h-screen">
                <Projects />
            </section>  
            <section id="contact" className="min-h-screen">
                <Contact />
            </section>
        </div>
    )
}

export default HomePage
