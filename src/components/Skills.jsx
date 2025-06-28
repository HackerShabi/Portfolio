import React, { useState } from 'react';
import { 
  Code, 
  Database, 
  Server, 
  Settings, 
  GitBranch,
  Package,
  Monitor,
  Smartphone,
  Globe,
  Atom
} from 'lucide-react';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = [
    {
      title: "Frontend",
      icon: <Monitor size={24} />,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", level: 90, icon: <Atom size={20} /> },
        { name: "Next.js", level: 85, icon: <Code size={20} /> },
        { name: "Tailwind CSS", level: 95, icon: <Code size={20} /> },
        { name: "JavaScript", level: 92, icon: <Code size={20} /> },
        { name: "TypeScript", level: 80, icon: <Code size={20} /> },
        { name: "HTML/CSS", level: 95, icon: <Code size={20} /> }
      ]
    },
    {
      title: "Backend",
      icon: <Server size={24} />,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", level: 88, icon: <Server size={20} /> },
        { name: "Express", level: 85, icon: <Server size={20} /> },
        { name: "Django", level: 75, icon: <Server size={20} /> },
        { name: "REST APIs", level: 90, icon: <Globe size={20} /> },
        { name: "GraphQL", level: 70, icon: <Globe size={20} /> }
      ]
    },
    {
      title: "Database",
      icon: <Database size={24} />,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "MongoDB", level: 85, icon: <Database size={20} /> },
        { name: "Firebase", level: 80, icon: <Database size={20} /> },
        { name: "PostgreSQL", level: 75, icon: <Database size={20} /> },
        { name: "Redis", level: 70, icon: <Database size={20} /> }
      ]
    },
    {
      title: "Tools",
      icon: <Settings size={24} />,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Git", level: 90, icon: <GitBranch size={20} /> },
        { name: "GitHub", level: 88, icon: <GitBranch size={20} /> },
        { name: "VS Code", level: 95, icon: <Code size={20} /> },
        { name: "npm/yarn", level: 85, icon: <Package size={20} /> },
        { name: "Docker", level: 70, icon: <Settings size={20} /> }
      ]
    }
  ];

  React.useEffect(() => {
    const audiowideLink = document.createElement('link');
    audiowideLink.rel = 'stylesheet';
    audiowideLink.href = 'https://fonts.googleapis.com/css2?family=Audiowide&display=swap';
    document.head.appendChild(audiowideLink);
    return () => {
      document.head.removeChild(audiowideLink);
    };
  }, []);

  return (
    <section id="skills" className="section-padding bg-gray-800">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Audiowide, cursive' }}>
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-purple mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I've worked with a variety of technologies to create amazing web experiences. 
            Here are the tools and technologies I use to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="glass-effect rounded-xl p-6 card-hover"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-6">
                <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="relative group"
                    onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    {/* Skill Header */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <div className="text-gray-400 group-hover:text-primary-400 transition-colors duration-300">
                          {skill.icon}
                        </div>
                        <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-xs text-gray-500 group-hover:text-primary-400 transition-colors duration-300">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out ${
                          hoveredSkill === `${categoryIndex}-${skillIndex}` ? 'animate-pulse' : ''
                        }`}
                        style={{ 
                          width: hoveredSkill === `${categoryIndex}-${skillIndex}` ? `${skill.level}%` : '0%',
                          transitionDelay: hoveredSkill === `${categoryIndex}-${skillIndex}` ? '0s' : `${skillIndex * 0.1}s`
                        }}
                      ></div>
                    </div>

                    {/* Tooltip */}
                    {hoveredSkill === `${categoryIndex}-${skillIndex}` && (
                      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10">
                        {skill.level}% Proficiency
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8" style={{ fontFamily: 'Audiowide, cursive' }}>
            Also Familiar With
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Redux", "Context API", "Jest", "Cypress", "Webpack", "Vite", 
              "AWS", "Vercel", "Netlify", "Figma", "Adobe XD", "Postman"
            ].map((skill, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-gray-700/50 text-gray-300 rounded-full text-sm font-medium hover:bg-primary-500/20 hover:text-primary-400 transition-all duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6">
            Always learning and expanding my skill set to deliver the best solutions.
          </p>
          <button 
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            See My Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default Skills; 