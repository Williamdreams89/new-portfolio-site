import './App.css';
import About from './components/about/About';
import Home from './components/home/Home';
import Navigation from './components/navigation/Navigation';
import Portfolio from './components/portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <About />
      <Portfolio />
    </div>
  );
}

export default App;
