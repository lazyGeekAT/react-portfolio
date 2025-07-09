import React from 'react';
import { Code, Database, Cloud, Smartphone } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code size={32} />,
      title: 'Full Stack Development',
      description: '3+ years of experience building end-to-end applications'
    },
    {
      icon: <Database size={32} />,
      title: 'Backend Technologies',
      description: 'Proficient in Java, Python, and Express.js'
    },
    {
      icon: <Cloud size={32} />,
      title: 'Cloud Computing',
      description: 'Experience with deployment and CI/CD pipelines'
    },
    {
      icon: <Smartphone size={32} />,
      title: 'Mobile Development',
      description: 'Flutter app development and responsive UI/UX design'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About Me
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A passionate developer dedicated to creating innovative solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors duration-300">
                <img
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                  alt="Arindam at work"
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
                <p className="text-gray-300 leading-relaxed">
                  Currently pursuing my undergraduate degree at KIIT University, I've been passionate about 
                  technology since the beginning of my academic journey. Over the past 3 years, I've immersed 
                  myself in various programming languages and frameworks, constantly learning and adapting to 
                  new technologies.
                </p>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">Education</h3>
                <div className="space-y-3">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="text-lg font-semibold text-white">KIIT University</h4>
                    <p className="text-gray-400">Undergraduate Student</p>
                    <p className="text-sm text-gray-500">2021 - Present</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="text-blue-400 mb-4">
                    {highlight.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;