import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import BlogsPage from './pages/BlogsPage';
import GamesPage from './pages/GamesPage';

function App() {
  return (
    <Router>
      <div className="bg-gray-900 text-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/games" element={<GamesPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;