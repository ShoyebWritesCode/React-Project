import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <HeroSection />
        <Routes></Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
