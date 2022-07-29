import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import Navigation from './components/navigation/Navigation';
import Portfolio from './components/portfolio/Portfolio';
import Services from './components/services/Services';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <About />
      <Portfolio />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
