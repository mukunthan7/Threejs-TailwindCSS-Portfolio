import './App.css'
import { BrowserRouter } from "react-router-dom"
import { AnimeCanvas, HeroPage, Navbar, Skills, About, Contact, Footer } from './components/'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <HeroPage />
        <AnimeCanvas />
        <About />
        <Skills />
        <Contact />
        <Footer />
      </BrowserRouter >
    </>
  )
}

export default App
