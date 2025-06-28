import React from 'react';
import { User, Award, Target, Heart } from 'lucide-react';
import pic from '../assets/pic.png';
import ribbonBg from '../assets/vecteezy_ribbon-bow-stage-and-studio-product-display-stand-premium_7950631.jpg';

const About = () => {
  const features = [
    {
      icon: <Target size={24} />,
      title: "Problem Solver",
      description: "We approach every project with a solution-oriented mindset, finding creative ways to solve complex challenges."
    },
    {
      icon: <Award size={24} />,
      title: "Quality Focused",
      description: "Every line of code is written with attention to detail, ensuring high-quality, maintainable solutions."
    },
    {
      icon: <Heart size={24} />,
      title: "Passionate",
      description: "We love what I do and it shows in my work. I'm constantly learning and improving my skills."
    },
    {
      icon: <User size={24} />,
      title: "Team Player",
      description: "We thrive in collaborative environments and enjoy working with others to achieve great results."
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
    <section id="about" className="section-padding bg-gray-900">
      <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <div className="flex justify-center items-center">
          <div className="rounded-2xl overflow-hidden shadow-2xl bg-white/10 p-4 relative animate-bip-glow">
            <div className="absolute inset-0 z-0 rounded-2xl pointer-events-none" style={{boxShadow:'0 0 120px 40px #7f5af0, 0 0 240px 80px #00c6fb', filter:'blur(24px)', opacity:0.85}}></div>
            <div className="absolute top-2 left-1/2 -translate-x-1/2 z-20 text-white text-lg md:text-2xl font-bold" style={{fontFamily:'Audiowide, cursive', letterSpacing:'0.04em', textShadow:'0 2px 8px #7f5af0'}}>
              ITS TIME TO
            </div>
            <img src={pic} alt="About Daliweb" className="w-72 h-72 object-contain relative z-10" />
          </div>
        </div>
        {/* Right: Content */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Audiowide, cursive' }}>
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-purple mb-6"></div>
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            Turning Ideas Into <span className="text-gradient">Digital Reality</span>
          </h3>
          <p className="text-lg text-gray-300 leading-relaxed">
            We build professional websites in just 48 hours, with lifetime support and at a very considerable price. Our process is fast, reliable, and tailored to your business needs.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Specializing in modern web technologies, we deliver seamless user experiences that look great and perform exceptionally well. Let us help you elevate your business online!
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="glass-effect rounded-lg p-6 card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="text-primary-400">
                    {feature.icon}
                  </div>
                  <h4 className="font-semibold text-white">{feature.title}</h4>
                </div>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="pt-6">
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              Let's Work Together
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 