import './App.css';
import About from './components/about/About';
import Home from './components/home/Home';
import Navigation from './components/navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <About />
    </div>
  );
}

export default App;
