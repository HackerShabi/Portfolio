import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, Zap } from 'lucide-react';
import ribbonBg from '../assets/vecteezy_ribbon-bow-stage-and-studio-product-display-stand-premium_7950631.jpg';
import hotelVideo from '../assets/hotel.mp4';
import ecommerceVideo from '../assets/ecommerce.mp4';
import travelVideo from '../assets/travelagency.mp4';
import mainVideo from '../assets/main.mp4';
import portfolioVideo from '../assets/portfolio.mp4';

const HERO_TEMPLATES = [
  {
    type: 'video',
    bg: mainVideo,
    heading: ['CRAFTING', 'YOUR DREAMS'],
    headingPosition: 'bottom-left',
    textColor: 'text-white',
    badgeColor: 'bg-gradient-to-r from-gray-700 to-blue-200 text-white',
    overlay: 'bg-black/60',
    duration: 8000,
  },
  {
    type: 'video',
    bg: hotelVideo,
    heading: ['Book Hotels at', 'Dream Destinations'],
    headingPosition: 'bottom-left',
    textColor: 'text-white',
    badgeColor: 'bg-gradient-to-r from-blue-900 to-blue-400 text-white',
    overlay: 'bg-black/60',
    duration: 8000,
  },
  {
    type: 'video',
    bg: ecommerceVideo,
    heading: ['Launch Your', 'E-Commerce Store'],
    headingPosition: 'bottom-left',
    textColor: 'text-white',
    badgeColor: 'bg-gradient-to-r from-indigo-900 to-pink-400 text-white',
    overlay: 'bg-black/60',
    duration: 8000,
  },
  {
    type: 'video',
    bg: travelVideo,
    heading: ['Travel Agency:', 'Explore the World'],
    headingPosition: 'bottom-left',
    textColor: 'text-white',
    badgeColor: 'bg-gradient-to-r from-teal-900 to-blue-400 text-white',
    overlay: 'bg-black/60',
    duration: 8000,
  },
  {
    type: 'video',
    bg: portfolioVideo,
    heading: ['Build Your', 'Portfolio Instantly'],
    headingPosition: 'bottom-left',
    textColor: 'text-white',
    badgeColor: 'bg-gradient-to-r from-gray-700 to-blue-200 text-white',
    overlay: 'bg-black/60',
    duration: 8000,
  },
];

const Hero = () => {
  const heroRef = useRef(null);
  const videoRefs = useRef([]);
  const [templateIndex, setTemplateIndex] = useState(0);
  const [typing, setTyping] = useState([false, false]);
  const [videosLoaded, setVideosLoaded] = useState({});
  const [nextVideoPreloaded, setNextVideoPreloaded] = useState(false);

  // Initialize video refs
  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, HERO_TEMPLATES.length);
    
    // Preload all videos
    const preloadVideos = async () => {
      const loadPromises = HERO_TEMPLATES.filter(t => t.type === 'video').map((template, index) => {
        return new Promise((resolve) => {
          const video = document.createElement('video');
          video.src = template.bg;
          video.preload = 'auto';
          video.muted = true;
          video.onloadeddata = () => {
            setVideosLoaded(prev => ({ ...prev, [index]: true }));
            resolve();
          };
          video.onerror = () => {
            console.error(`Error loading video ${index}`);
            resolve();
          };
        });
      });
      
      try {
        await Promise.all(loadPromises);
      } catch (error) {
        console.error('Error preloading videos:', error);
      }
    };
    
    preloadVideos();
  }, []);

  // Rotating templates with custom durations
  useEffect(() => {
    setTyping([false, false]);
    const t = HERO_TEMPLATES[templateIndex];
    
    // Preload next video
    const nextIndex = (templateIndex + 1) % HERO_TEMPLATES.length;
    const nextVideo = document.createElement('video');
    nextVideo.src = HERO_TEMPLATES[nextIndex].bg;
    nextVideo.preload = 'auto';
    nextVideo.muted = true;
    nextVideo.onloadeddata = () => setNextVideoPreloaded(true);
    
    const timeout = setTimeout(() => {
      setTemplateIndex(nextIndex);
    }, t.duration);
    
    setTimeout(() => setTyping([true, false]), 500);
    setTimeout(() => setTyping([true, true]), 1500);
    
    return () => clearTimeout(timeout);
  }, [templateIndex]);

  // Parallax effect for floating elements
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;
      const floatingElements = document.querySelectorAll('.floating-element');
      floatingElements.forEach((element, index) => {
        const speed = (index + 1) * 0.5;
        element.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Material Symbols and styles
  useEffect(() => {
    // Add Material Symbols font
    const materialSymbolsLink = document.createElement('link');
    materialSymbolsLink.rel = 'stylesheet';
    materialSymbolsLink.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=chat';
    document.head.appendChild(materialSymbolsLink);

    const style = document.createElement('style');
    style.innerHTML = `
      .whatsapp-float {
        position: fixed;
        right: 1.5rem;
        bottom: 1.5rem;
        z-index: 50;
        background: #25D366;
        color: white;
        border-radius: 50%;
        width: 60px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 24px 0 #25d36655;
        animation: whatsapp-bounce 2s infinite;
        transition: transform 0.2s;
      }
      .whatsapp-float:hover {
        transform: scale(1.1) rotate(-6deg);
        box-shadow: 0 8px 32px 0 #25d36699;
      }
      @keyframes whatsapp-bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
      }
      .typewriter {
        overflow: hidden;
        border-right: .15em solid orange;
        white-space: nowrap;
        margin: 0 auto;
        letter-spacing: .15em;
        animation: typing 2.2s steps(40, end), blink-caret .75s step-end infinite;
      }
      .typewriter2 {
        overflow: hidden;
        border-right: .15em solid orange;
        white-space: nowrap;
        margin: 0 auto;
        letter-spacing: .15em;
        animation: typing 2.2s 1.2s steps(40, end) forwards, blink-caret .75s step-end infinite;
      }
      @keyframes typing {
        from { width: 0 }
        to { width: 100% }
      }
      @keyframes blink-caret {
        from, to { border-color: transparent }
        50% { border-color: orange; }
      }
      .fixed-badge {
        position: fixed;
        top: 1rem;
        right: 1rem;
        z-index: 50;
        font-weight: bold;
        color: white;
        text-shadow: 0 1px 3px rgba(0,0,0,0.5);
      }
      .glowy-underline {
        position: relative;
        text-shadow: 0 0 8px #7f5af0, 0 0 16px #7f5af0;
      }
      .glowy-underline:after {
        content: '';
        display: block;
        width: 100%;
        height: 3px;
        background: linear-gradient(90deg, #7f5af0 0%, #00c6fb 100%);
        border-radius: 2px;
        margin-top: 2px;
        box-shadow: 0 0 8px #7f5af0, 0 0 16px #00c6fb;
      }
      .animate-slogan-slide-in {
        animation: slogan-slide-in 1.2s cubic-bezier(0.4,0,0.2,1) both;
      }
      @keyframes slogan-slide-in {
        0% { opacity: 0; transform: translateY(-30px) scale(0.95); }
        60% { opacity: 1; transform: translateY(8px) scale(1.05); }
        100% { opacity: 1; transform: translateY(0) scale(1); }
      }
      .animate-pulse-slow {
        animation: pulse-slow 2.5s infinite;
      }
      @keyframes pulse-slow {
        0%, 100% { box-shadow: 0 0 8px #7f5af0, 0 0 16px #00c6fb; }
        50% { box-shadow: 0 0 24px #00c6fb, 0 0 32px #7f5af0; }
      }
      .floating-slogan { animation: floating-slogan 3.5s infinite ease-in-out alternate; }
      @keyframes floating-slogan { 0% { transform: translateY(0); } 100% { transform: translateY(-8px); } }
      .slogan-rotator { position: relative; overflow: hidden; min-width: 160px; min-height: 1.5em; }
      .slogan-text { display: inline-block; white-space: nowrap; animation: slogan-rotate 3.5s linear infinite; }
      @keyframes slogan-rotate {
        0%, 40% { opacity: 1; transform: translateY(0); }
        45%, 55% { opacity: 0; transform: translateY(-1.5em); }
        60%, 100% { opacity: 1; transform: translateY(0); }
      }
      .banner-ticker-container { pointer-events: none; }
      .banner-ticker { position: relative; width: 100vw; min-height: 3.5rem; display: flex; align-items: center; justify-content: flex-start; }
      .banner-ticker-content { display: inline-block; animation: banner-scroll 12s linear infinite; }
      @keyframes banner-scroll {
        0% { transform: translateX(100vw); }
        100% { transform: translateX(-100vw); }
      }
    `;
    document.head.appendChild(style);

    const orbitronLink = document.createElement('link');
    orbitronLink.rel = 'stylesheet';
    orbitronLink.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap';
    document.head.appendChild(orbitronLink);

    return () => { 
      document.head.removeChild(style);
      document.head.removeChild(materialSymbolsLink);
      document.head.removeChild(orbitronLink);
    };
  }, []);

  // Render background (image or video)
  const renderBackground = () => {
    const t = HERO_TEMPLATES[templateIndex];
    if (t.type === 'image') {
      return <img src={t.bg} alt="Hero" className="absolute inset-0 w-full h-full object-cover z-0 transition-all duration-1000" />;
    }
    if (t.type === 'video') {
      return (
        <video 
          ref={el => videoRefs.current[templateIndex] = el}
          src={t.bg}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover z-0 transition-all duration-1000"
          onError={(e) => console.error('Video error:', e)}
        />
      );
    }
    return null;
  };

  // Heading position classes
  const headingPos = {
    'center': 'items-center justify-center text-center',
    'bottom-left': 'items-end justify-start text-left pl-8 pb-36 md:pb-40',
    'top-left': 'items-start justify-start text-left pl-8 pt-16 md:pt-24',
  };

  const t = HERO_TEMPLATES[templateIndex];

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: t.type === 'image' ? '#e6ecf5' : '#000' }}
    >
      {/* Global Top Banner */}
      <div className="fixed top-0 left-0 w-full z-[100] banner-ticker-container">
        <div className="banner-ticker bg-gradient-to-r from-primary-500/40 to-accent-purple/40 text-white font-bold text-lg md:text-2xl py-3 px-2 flex items-center overflow-hidden" style={{backdropFilter:'blur(6px)', opacity:0.65, letterSpacing:'0.04em'}}>
          <div className="banner-ticker-content whitespace-nowrap" style={{fontSize:'2.1rem', fontWeight:700, textShadow:'0 2px 8px #7f5af0'}}>
            Proud Owner Of Your Website In Next 48 hours
          </div>
        </div>
      </div>
      {/* Company Name and Slogan */}
      <div className="fixed top-20 left-8 z-50 select-none">
        <div className="bebas-neue-regular text-3xl md:text-4xl text-primary-500 glowy-underline">Daliweb</div>
      </div>
      
      {/* Dynamic Background */}
      {renderBackground()}
      
      {/* Overlay */}
      <div className={`absolute inset-0 ${t.overlay} z-10 transition-all duration-1000`}></div>
      
      {/* Animated Floating Elements */}
      <div className="absolute inset-0 overflow-hidden z-20 pointer-events-none">
        <div className="floating-element absolute top-20 left-10 w-20 h-20 bg-primary-500/20 rounded-full blur-xl animate-float"></div>
        <div className="floating-element absolute top-40 right-20 w-32 h-32 bg-accent-purple/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="floating-element absolute bottom-20 left-1/4 w-24 h-24 bg-accent-teal/20 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="floating-element absolute bottom-40 right-1/3 w-16 h-16 bg-accent-orange/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* Main Content - Headings at bottom center */}
      <div 
        className="container-custom relative z-30 flex flex-col w-full px-4 h-full items-start justify-end min-h-[60vh]"
        style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
      >
        <div className="flex flex-col gap-2 w-full max-w-4xl mb-20" style={{alignItems:'flex-start'}}>
          <span
            className={`orbitron-font ${t.textColor} tracking-tight transition-all duration-500 ${typing[0] ? 'typewriter' : 'opacity-0'} drop-shadow-lg`}
            style={{ fontSize: '2.6rem', minHeight: '1.2em', display: 'inline-block', textShadow: '0 2px 4px rgba(0,0,0,0.5)', fontFamily: 'Orbitron, sans-serif', letterSpacing: '0.04em' }}
          >
            {t.heading[0]}
          </span>
          <span
            className={`orbitron-font ${t.textColor} tracking-tight transition-all duration-500 ${typing[1] ? 'typewriter2' : 'opacity-0'} drop-shadow-lg`}
            style={{ fontSize: '2.1rem', minHeight: '1.2em', display: 'inline-block', textShadow: '0 2px 4px rgba(0,0,0,0.5)', fontFamily: 'Orbitron, sans-serif', letterSpacing: '0.04em' }}
          >
            {t.heading[1]}
          </span>
        </div>
        
        {/* CTA Buttons (center bottom) */}
        <div className="flex flex-col sm:flex-row gap-4 items-center mb-12 animate-slide-up mx-auto" style={{ animationDelay: '0.8s' }}>
          <button
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary flex items-center space-x-2"
          >
            <Zap size={20} />
            <span>View My Work</span>
          </button>
          <button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="btn-secondary flex items-center space-x-2"
          >
            <span>Get In Touch</span>
          </button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-40">
        <button
          onClick={scrollToAbout}
          className="text-gray-400 hover:text-white transition-colors duration-300"
        >
          <ChevronDown size={24} />
        </button>
      </div>
      
      {/* WhatsApp Floating Icon with Material Symbols */}
      <a
        href="https://wa.me/923290091255"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>chat</span>
      </a>
    </section>
  );
};

export default Hero; 