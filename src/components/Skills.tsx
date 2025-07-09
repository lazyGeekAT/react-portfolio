import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Java', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'C', level: 80 },
        { name: 'JavaScript', level: 85 },
        { name: 'TypeScript', level: 80 }
      ]
    },
    {
      title: 'Frontend Technologies',
      skills: [
        { name: 'React', level: 90 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'Flutter', level: 85 },
        { name: 'Responsive Design', level: 90 }
      ]
    },
    {
      title: 'Backend & Tools',
      skills: [
        { name: 'Express.js', level: 85 },
        { name: 'Node.js', level: 80 },
        { name: 'Git/GitHub', level: 90 },
        { name: 'CI/CD', level: 75 },
        { name: 'Cloud Computing', level: 80 }
      ]
    }
  ];

  const SkillBar = ({ skill }: { skill: { name: string; level: number } }) => (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-white font-medium">{skill.name}</span>
        <span className="text-blue-400 text-sm">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Technical Skills
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Technologies I've mastered through years of hands-on experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar key={skillIndex} skill={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;