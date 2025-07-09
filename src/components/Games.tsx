import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Gamepad2, ExternalLink, Trophy } from 'lucide-react';

const Games = () => {
  const navigate = useNavigate();

  const games = [
    {
      title: 'Chess Master',
      description: 'A fully functional chess game with AI opponent, move validation, and game history tracking.',
      image: 'https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      technologies: ['JavaScript', 'HTML5 Canvas', 'CSS3'],
      link: 'https://chess-game.example.com',
      difficulty: 'Expert',
      players: '1-2 Players'
    },
    {
      title: 'Checkers Champion',
      description: 'Classic checkers game with smooth animations, multiple difficulty levels, and online multiplayer.',
      image: 'https://images.pexels.com/photos/10002923/pexels-photo-10002923.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      technologies: ['React', 'Socket.io', 'Node.js'],
      link: 'https://checkers-game.example.com',
      difficulty: 'Intermediate',
      players: '1-2 Players'
    },
    {
      title: 'Snake Classic',
      description: 'The classic snake game with modern graphics, power-ups, and high score tracking.',
      image: 'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      technologies: ['JavaScript', 'HTML5 Canvas', 'Local Storage'],
      link: 'https://snake-game.example.com',
      difficulty: 'Easy',
      players: '1 Player'
    },
    {
      title: 'Flappy Bird Reborn',
      description: 'A recreation of the popular Flappy Bird game with improved graphics and smooth gameplay.',
      image: 'https://images.pexels.com/photos/1108701/pexels-photo-1108701.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      technologies: ['JavaScript', 'HTML5 Canvas', 'Web Audio API'],
      link: 'https://flappy-bird.example.com',
      difficulty: 'Hard',
      players: '1 Player'
    }
  ];

  return (
    <section id="games" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Game Collection
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Interactive games I've created to showcase my programming skills
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {games.map((game, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
              >
                <div className="relative">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-black/50 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
                      <Gamepad2 size={12} />
                      {game.difficulty}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-black/50 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
                      <Trophy size={12} />
                      {game.players}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {game.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {game.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {game.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a
                    href={game.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                  >
                    <Gamepad2 size={20} />
                    Play Now
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-400 mb-6">
              More games coming soon! Follow my progress on GitHub.
            </p>
            <button
              onClick={() => navigate('/games')}
              className="inline-flex items-center gap-2 border-2 border-purple-500 text-purple-500 px-8 py-3 rounded-full font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              View All Games
              <ExternalLink size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Games;