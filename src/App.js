import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <HeroSection />
        <Routes></Routes>
      </div>
    </Router>
  );
}

export default App;
