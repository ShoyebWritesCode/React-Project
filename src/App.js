import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes></Routes>
      </div>
    </Router>
  );
}

export default App;
