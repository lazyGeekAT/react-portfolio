import React, { useState } from 'react';
import { Gamepad2, ExternalLink, Trophy, Star, Users, Clock, Filter } from 'lucide-react';

const GamesPage = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [selectedPlayers, setSelectedPlayers] = useState('All');

  const games = [
    {
      title: 'Chess Master',
      description: 'A fully functional chess game with AI opponent, move validation, and game history tracking. Features multiple difficulty levels and beautiful 3D board graphics.',
      image: 'https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      technologies: ['JavaScript', 'HTML5 Canvas', 'CSS3', 'AI Algorithm'],
      link: 'https://chess-game.example.com',
      github: 'https://github.com/ArindamTripathi619/chess-master',
      difficulty: 'Expert',
      players: '1-2 Players',
      rating: 4.8,
      playTime: '30-60 min',
      featured: true,
      category: 'Strategy'
    },
    {
      title: 'Checkers Champion',
      description: 'Classic checkers game with smooth animations, multiple difficulty levels, and online multiplayer support. Includes tournament mode and statistics tracking.',
      image: 'https://images.pexels.com/photos/10002923/pexels-photo-10002923.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
      link: 'https://checkers-game.example.com',
      github: 'https://github.com/ArindamTripathi619/checkers-champion',
      difficulty: 'Intermediate',
      players: '1-2 Players',
      rating: 4.6,
      playTime: '15-30 min',
      featured: true,
      category: 'Strategy'
    },
    {
      title: 'Snake Classic',
      description: 'The classic snake game with modern graphics, power-ups, and high score tracking. Features multiple game modes and customizable themes.',
      image: 'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      technologies: ['JavaScript', 'HTML5 Canvas', 'Local Storage', 'Web Audio API'],
      link: 'https://snake-game.example.com',
      github: 'https://github.com/ArindamTripathi619/snake-classic',
      difficulty: 'Easy',
      players: '1 Player',
      rating: 4.4,
      playTime: '5-15 min',
      featured: false,
      category: 'Arcade'
    },
    {
      title: 'Flappy Bird Reborn',
      description: 'A recreation of the popular Flappy Bird game with improved graphics, smooth gameplay, and additional challenges. Includes leaderboards and achievements.',
      image: 'https://images.pexels.com/photos/1108701/pexels-photo-1108701.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      technologies: ['JavaScript', 'HTML5 Canvas', 'Web Audio API', 'CSS3'],
      link: 'https://flappy-bird.example.com',
      github: 'https://github.com/ArindamTripathi619/flappy-bird-reborn',
      difficulty: 'Hard',
      players: '1 Player',
      rating: 4.2,
      playTime: '2-10 min',
      featured: false,
      category: 'Arcade'
    },
    {
      title: 'Tic Tac Toe Pro',
      description: 'Enhanced tic-tac-toe with AI opponent, different board sizes, and multiplayer mode. Features beautiful animations and sound effects.',
      image: 'https://images.pexels.com/photos/8111357/pexels-photo-8111357.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      technologies: ['React', 'TypeScript', 'CSS3', 'Minimax Algorithm'],
      link: 'https://tictactoe-pro.example.com',
      github: 'https://github.com/ArindamTripathi619/tictactoe-pro',
      difficulty: 'Easy',
      players: '1-2 Players',
      rating: 4.3,
      playTime: '2-5 min',
      featured: false,
      category: 'Strategy'
    },
    {
      title: 'Memory Card Game',
      description: 'Test your memory with this engaging card matching game. Multiple themes, difficulty levels, and time challenges to keep you entertained.',
      image: 'https://images.pexels.com/photos/8111264/pexels-photo-8111264.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      technologies: ['JavaScript', 'CSS3', 'HTML5', 'Local Storage'],
      link: 'https://memory-game.example.com',
      github: 'https://github.com/ArindamTripathi619/memory-card-game',
      difficulty: 'Intermediate',
      players: '1 Player',
      rating: 4.5,
      playTime: '5-15 min',
      featured: false,
      category: 'Puzzle'
    }
  ];

  const difficulties = ['All', 'Easy', 'Intermediate', 'Hard', 'Expert'];
  const playerOptions = ['All', '1 Player', '1-2 Players'];

  const filteredGames = games.filter(game => {
    const matchesDifficulty = selectedDifficulty === 'All' || game.difficulty === selectedDifficulty;
    const matchesPlayers = selectedPlayers === 'All' || game.players === selectedPlayers;
    return matchesDifficulty && matchesPlayers;
  });

  const featuredGames = games.filter(game => game.featured);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-400 bg-green-500/20';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-500/20';
      case 'Hard': return 'text-orange-400 bg-orange-500/20';
      case 'Expert': return 'text-red-400 bg-red-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Game Collection
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Interactive games showcasing programming skills and creativity
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 bg-gray-800/50 px-4 py-2 rounded-full">
                <Gamepad2 className="text-purple-400" size={20} />
                <span className="text-gray-300">{games.length} Games Available</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-800/50 px-4 py-2 rounded-full">
                <Star className="text-yellow-400" size={20} />
                <span className="text-gray-300">All Free to Play</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Games */}
      {featuredGames.length > 0 && (
        <section className="py-16 bg-gray-800">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-2">
                <Star className="text-yellow-400" size={28} />
                Featured Games
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {featuredGames.map((game, index) => (
                  <div
                    key={index}
                    className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 border border-yellow-500/20"
                  >
                    <div className="relative">
                      <img
                        src={game.image}
                        alt={game.title}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm font-semibold">
                          Featured
                        </span>
                      </div>
                      <div className="absolute top-4 right-4 flex gap-2">
                        <span className={`px-2 py-1 rounded-full text-xs flex items-center gap-1 ${getDifficultyColor(game.difficulty)}`}>
                          <Trophy size={12} />
                          {game.difficulty}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                        <div className="flex items-center gap-1 bg-black/50 px-2 py-1 rounded-full text-white text-xs">
                          <Users size={12} />
                          {game.players}
                        </div>
                        <div className="flex items-center gap-1 bg-black/50 px-2 py-1 rounded-full text-white text-xs">
                          <Clock size={12} />
                          {game.playTime}
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {game.title}
                      </h3>
                      
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={16}
                              className={i < Math.floor(game.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'}
                            />
                          ))}
                        </div>
                        <span className="text-gray-400 text-sm">({game.rating})</span>
                      </div>
                      
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
                      
                      <div className="flex gap-3">
                        <a
                          href={game.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                        >
                          <Gamepad2 size={18} />
                          Play Now
                        </a>
                        <a
                          href={game.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-3 border-2 border-gray-600 text-gray-300 rounded-full hover:border-gray-500 hover:text-white transition-all duration-300 flex items-center justify-center"
                        >
                          <ExternalLink size={18} />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Filter Section */}
      <section className="py-8 bg-gray-900 border-b border-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <Filter className="text-gray-400" size={20} />
              <span className="text-gray-300 font-semibold">Filter Games:</span>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Difficulty Level:</label>
                <div className="flex flex-wrap gap-2">
                  {difficulties.map((difficulty) => (
                    <button
                      key={difficulty}
                      onClick={() => setSelectedDifficulty(difficulty)}
                      className={`px-3 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                        selectedDifficulty === difficulty
                          ? 'bg-purple-500 text-white'
                          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      {difficulty}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Number of Players:</label>
                <div className="flex flex-wrap gap-2">
                  {playerOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => setSelectedPlayers(option)}
                      className={`px-3 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                        selectedPlayers === option
                          ? 'bg-purple-500 text-white'
                          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Games */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-white">
                All Games ({filteredGames.length})
              </h2>
            </div>
            
            {filteredGames.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-gray-400 text-lg">No games found matching your criteria.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredGames.map((game, index) => (
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
                        <span className={`px-2 py-1 rounded-full text-xs flex items-center gap-1 ${getDifficultyColor(game.difficulty)}`}>
                          <Trophy size={12} />
                          {game.difficulty}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="bg-black/50 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
                          <Users size={12} />
                          {game.players}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {game.title}
                      </h3>
                      
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={14}
                              className={i < Math.floor(game.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'}
                            />
                          ))}
                        </div>
                        <span className="text-gray-400 text-xs">({game.rating})</span>
                        <span className="text-gray-500 text-xs">•</span>
                        <span className="text-gray-400 text-xs">{game.playTime}</span>
                      </div>
                      
                      <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                        {game.description.substring(0, 100)}...
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {game.technologies.slice(0, 2).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                        {game.technologies.length > 2 && (
                          <span className="bg-gray-700 text-gray-400 px-2 py-1 rounded-full text-xs">
                            +{game.technologies.length - 2} more
                          </span>
                        )}
                      </div>
                      
                      <div className="flex gap-2">
                        <a
                          href={game.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-gradient-to-r from-purple-500 to-pink-600 text-white px-3 py-2 rounded-full font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 text-sm"
                        >
                          <Gamepad2 size={16} />
                          Play
                        </a>
                        <a
                          href={game.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-2 border border-gray-600 text-gray-300 rounded-full hover:border-gray-500 hover:text-white transition-all duration-300 flex items-center justify-center"
                        >
                          <ExternalLink size={16} />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              More Games Coming Soon!
            </h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              I'm constantly working on new games and improving existing ones. 
              Follow my progress on GitHub and stay tuned for updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/ArindamTripathi619/games"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                View Game Repository
                <ExternalLink size={20} />
              </a>
              <a
                href="mailto:arindam.tripathi@example.com"
                className="inline-flex items-center gap-2 border-2 border-purple-500 text-purple-500 px-8 py-3 rounded-full font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Suggest a Game
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GamesPage;