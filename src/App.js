// import logo from './logo.svg';
import './App.css';
import Header from './components/header/index';
import Nav from './components/nav/index';
import About from './components/about/index';
import Experience from './components/experience/index';
import Portfolio from './components/portfolio/index';
import Contact from './components/contact/index';
import Footer from './components/footer/index';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
