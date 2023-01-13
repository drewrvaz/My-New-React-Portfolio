import './App.css';
import Header from './components/header/index';
import Nav from './components/nav/index';
import About from './components/about/index';
import Experience from './components/experience/index';
import Portfolio from './components/portfolio/index';
import Contact from './components/contact/index';
import Footer from './components/footer/index';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <>
        <Nav />
        <Routes>
          <Route path='/My-New-React-Portfolio'element={<Header />} />
          <Route path='/My-New-React-Portfolio/about' element={<About />} />
          <Route path='/My-New-React-Portfolio/experience' element={<Experience />} />
          <Route path='/My-New-React-Portfolio/portfolio' element={<Portfolio />} />
          <Route path='/My-New-React-Portfolio/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </>
    </Router>
  )
}

export default App;
