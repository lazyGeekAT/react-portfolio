import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent hover:from-blue-300 hover:to-purple-500 transition-all duration-200"
          >
            DevCrewX
          </button>
          
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => navigate('/')}
              className={`transition-colors duration-200 relative group ${
                location.pathname === '/' ? 'text-white' : 'text-gray-300 hover:text-white'
              }`}
            >
              Home
              <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-600 transition-all duration-300 ${
                location.pathname === '/' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </button>
            
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-300 hover:text-white transition-colors duration-200 relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            
            <button
              onClick={() => navigate('/blogs')}
              className={`transition-colors duration-200 relative group ${
                location.pathname === '/blogs' ? 'text-white' : 'text-gray-300 hover:text-white'
              }`}
            >
              Blog
              <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-600 transition-all duration-300 ${
                location.pathname === '/blogs' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </button>
            
            <button
              onClick={() => navigate('/games')}
              className={`transition-colors duration-200 relative group ${
                location.pathname === '/games' ? 'text-white' : 'text-gray-300 hover:text-white'
              }`}
            >
              Games
              <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-600 transition-all duration-300 ${
                location.pathname === '/games' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/ArindamTripathi619" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-200">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/arindam-tripathi-962551349/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-200">
              <Linkedin size={20} />
            </a>
            <a href="mailto:devcrewx@gamil.com" className="text-gray-300 hover:text-white transition-colors duration-200">
              <Mail size={20} />
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white transition-colors duration-200"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-gray-800/95 backdrop-blur-md rounded-lg">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => navigate('/')}
                className="text-gray-300 hover:text-white transition-colors duration-200 text-left px-4"
              >
                Home
              </button>
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-left px-4"
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => navigate('/blogs')}
                className="text-gray-300 hover:text-white transition-colors duration-200 text-left px-4"
              >
                Blog
              </button>
              <button
                onClick={() => navigate('/games')}
                className="text-gray-300 hover:text-white transition-colors duration-200 text-left px-4"
              >
                Games
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;