import Header from './Components/Header'
import HomePage from './Components/HomePage'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Experience from './Components/Experience'
import Contact from './Components/Contact'
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import theme from './utils/themeContext'
import {useState} from 'react'




// Layout component to include Header on all pages
function Layout() {
  const [isDarkMode, setisDarkMode] = useState(true);
  return (
    <>
    <theme.Provider value={{isDarkMode, toggleTheme: () => setisDarkMode(!isDarkMode)}}>
      <Header />
      <Outlet />
    </theme.Provider>
    </>
  )
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/experience",
          element: <Experience />
        },
        {
          path: "/skills",
          element: <Skills />
        },
        {
          path: "/projects",
          element: <Projects />
        },      
        {
          path: "/contact",
          element: <Contact />
        },
      ]
    }
  ])
  
  return <RouterProvider router={router} />
}
  


export default App
