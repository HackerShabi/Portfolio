import React, { useState, useRef, useEffect } from 'react';
import { 
  ExternalLink, 
  Github, 
  Code, 
  Globe, 
  Smartphone, 
  Database,
  X,
  ArrowRight,
  ShoppingCart,
  Calendar,
  Search,
  Menu,
  User,
  Mail,
  Phone,
  MapPin,
  ChevronRight
} from 'lucide-react';
import ecommerceLanding from '../assets/ecommerce-landing.jpg';
import ribbonBg from '../assets/vecteezy_ribbon-bow-stage-and-studio-product-display-stand-premium_7950631.jpg';
import hotelVideo from '../assets/hotel.mp4';
import ecommerceVideo from '../assets/ecommerce.mp4';
import travelVideo from '../assets/travelagency.mp4';
import mainVideo from '../assets/main.mp4';
import portfolioVideo from '../assets/portfolio.mp4';
import studentvisa from '../assets/person-wearing-colorful-fashion.jpg';
import chatapppic from '../assets/3929637.jpg';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showLandingPage, setShowLandingPage] = useState(false);
  const [currentLandingPage, setCurrentLandingPage] = useState(null);
  const videoRefs = useRef([]);

  // Initialize video refs
  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, projects.length);
  }, []);

  useEffect(() => {
    const audiowideLink = document.createElement('link');
    audiowideLink.rel = 'stylesheet';
    audiowideLink.href = 'https://fonts.googleapis.com/css2?family=Audiowide&display=swap';
    document.head.appendChild(audiowideLink);
    return () => {
      document.head.removeChild(audiowideLink);
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: "Hotel Booking Website",
      description: "A comprehensive hotel booking platform with real-time availability, payment integration, and admin dashboard.",
      image: ribbonBg,
      category: "Full Stack",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "Socket.io"],
      features: [
        "Real-time room availability",
        "Secure payment processing",
        "Admin dashboard",
        "User reviews & ratings",
        "Email notifications"
      ],
      liveDemo: "#",
      github: "#",
      color: "from-blue-500 to-cyan-500",
      landingPage: {
        video: hotelVideo,
        heading: ['Book Hotels at', 'Dream Destinations'],
        subheading: 'Find and book your perfect stay with our exclusive deals',
        features: [
          'Exclusive member discounts',
          'Free cancellation on most rooms',
          'Price match guarantee',
          'Verified guest reviews'
        ],
        cta: 'Book Now',
        secondaryCta: 'Explore Destinations',
        navItems: ['Home', 'Hotels', 'Destinations', 'Deals', 'Contact']
      }
    },
    {
      id: 2,
      title: "E-Commerce Store",
      description: "Modern e-commerce platform with product catalog, shopping cart, and order management system.",
      image: ecommerceLanding,
      category: "Full Stack",
      tech: ["Next.js", "PostgreSQL", "Stripe", "Redux", "Tailwind CSS"],
      features: [
        "Product catalog & search",
        "Shopping cart functionality",
        "Order tracking",
        "User authentication",
        "Admin panel"
      ],
      liveDemo: "#",
      github: "#",
      color: "from-green-500 to-emerald-500",
      landingPage: {
        video: ecommerceVideo,
        heading: ['Launch Your', 'E-Commerce Store'],
        subheading: 'Premium products delivered to your doorstep',
        features: [
          'Free shipping on orders over $50',
          '30-day money back guarantee',
          'Secure checkout process',
          '24/7 customer support'
        ],
        cta: 'Shop Now',
        secondaryCta: 'View Collections',
        navItems: ['Home', 'Shop', 'Categories', 'Sale', 'Account']
      }
    },
    {
      id: 3,
      title: "Travel Agency Site",
      description: "Beautiful travel booking website with destination guides, booking system, and travel blog.",
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
      category: "Frontend",
      tech: ["React", "Tailwind CSS", "Framer Motion", "Firebase", "Mapbox"],
      features: [
        "Interactive destination guides",
        "Booking system",
        "Travel blog",
        "Interactive maps",
        "Responsive design"
      ],
      liveDemo: "#",
      github: "#",
      color: "from-purple-500 to-pink-500",
      landingPage: {
        video: travelVideo,
        heading: ['Travel Agency:', 'Explore the World'],
        subheading: 'Unforgettable experiences and adventures await',
        features: [
          'Customized travel packages',
          'Best price guarantee',
          'Expert travel advisors',
          'Exclusive tour experiences'
        ],
        cta: 'Plan Your Trip',
        secondaryCta: 'Explore Destinations',
        navItems: ['Home', 'Destinations', 'Tours', 'Blog', 'Contact']
      }
    },
    {
      id: 4,
      title: "Student Visa Consultancy",
      description: "Professional website for visa consultancy services with appointment booking and document upload.",
      image: require('../assets/person-wearing-colorful-fashion.jpg'),
      category: "Full Stack",
      tech: ["React", "Node.js", "MongoDB", "AWS S3", "Email.js"],
      features: [
        "Appointment booking",
        "Document upload",
        "Progress tracking",
        "Email notifications",
        "Admin dashboard"
      ],
      liveDemo: "#",
      github: "#",
      color: "from-orange-500 to-red-500",
      landingPage: {
        video: mainVideo,
        heading: ['Student Visa', 'Consultancy Services'],
        subheading: 'Your pathway to international education success',
        features: [
          'Visa application assistance',
          'University placement services',
          'Document verification',
          'Interview preparation'
        ],
        cta: 'Book Consultation',
        secondaryCta: 'Learn More',
        navItems: ['Home', 'Services', 'Countries', 'Success Stories', 'Contact']
      }
    },
    {
      id: 5,
      title: "Portfolio Builder Tool",
      description: "Drag-and-drop portfolio builder with customizable templates and real-time preview.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
      category: "Frontend",
      tech: ["React", "TypeScript", "DND Kit", "Tailwind CSS", "Vercel"],
      features: [
        "Drag & drop interface",
        "Customizable templates",
        "Real-time preview",
        "Export functionality",
        "Responsive design"
      ],
      liveDemo: "#",
      github: "#",
      color: "from-indigo-500 to-purple-500",
      landingPage: {
        video: portfolioVideo,
        heading: ['Build Your', 'Portfolio Instantly'],
        subheading: 'Create a professional online presence in minutes',
        features: [
          'Professional templates',
          'Custom domain support',
          'SEO optimization',
          'Analytics integration'
        ],
        cta: 'Start Building',
        secondaryCta: 'View Templates',
        navItems: ['Home', 'Templates', 'Features', 'Pricing', 'Support']
      }
    },
    {
      id: 6,
      title: "Real-Time Chat App",
      description: "Modern chat application with real-time messaging, file sharing, and user presence.",
      image: require('../assets/3929637.jpg'),
      category: "Full Stack",
      tech: ["React", "Socket.io", "Node.js", "MongoDB", "AWS S3"],
      features: [
        "Real-time messaging",
        "File sharing",
        "User presence",
        "Message history",
        "Group chats"
      ],
      liveDemo: "#",
      github: "#",
      color: "from-teal-500 to-cyan-500",
      landingPage: {
        video: mainVideo,
        heading: ['Real-Time', 'Chat Application'],
        subheading: 'Seamless communication for teams and individuals',
        features: [
          'End-to-end encryption',
          'File sharing & storage',
          'Voice & video calls',
          'Cross-platform sync'
        ],
        cta: 'Get Started',
        secondaryCta: 'See Features',
        navItems: ['Home', 'Features', 'Pricing', 'Enterprise', 'Support']
      }
    }
  ];

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    setShowLandingPage(false);
  };

  const showProjectLanding = (project) => {
    setCurrentLandingPage(project.landingPage);
    setShowLandingPage(true);
  };

  // Handle mouse enter for video preview
  const handleMouseEnter = (index) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].play();
    }
  };

  // Handle mouse leave for video preview
  const handleMouseLeave = (index) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].pause();
      videoRefs.current[index].currentTime = 0;
    }
  };

  return (
    <section id="projects" className="section-padding bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Work</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-purple mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a unique 
            challenge and showcases different aspects of my development skills.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="glass-effect rounded-xl overflow-hidden card-hover group"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              {/* Project Video/Image Preview */}
              <div className="relative overflow-hidden h-48">
                <video 
                  ref={el => videoRefs.current[index] = el}
                  src={project.landingPage.video}
                  muted
                  playsInline
                  loop
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                
                {/* Preview Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                  <h3 className="text-lg font-bold mb-1 drop-shadow-md">
                    {project.landingPage.heading[0]}
                  </h3>
                  <p className="text-sm text-white/80 drop-shadow-md">
                    {project.landingPage.heading[1]}
                  </p>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Preview Badge */}
                <div className="absolute top-4 right-4">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      showProjectLanding(project);
                    }}
                    className="px-3 py-1 bg-primary-500/80 text-white text-xs font-medium rounded-full flex items-center gap-1 hover:bg-primary-500 transition-colors"
                  >
                    <Globe size={12} />
                    <span>Preview</span>
                  </button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-primary-500/20 text-primary-400 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 bg-gray-600/20 text-gray-400 text-xs rounded">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
                
                {/* Action Buttons */}
                <div className="flex items-center justify-between">
                  <button 
                    onClick={() => openProjectModal(project)}
                    className="flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors duration-300 text-sm font-medium"
                  >
                    <span>View Details</span>
                    <ArrowRight size={16} />
                  </button>
                  
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => showProjectLanding(project)}
                      className="p-2 bg-gray-700/50 hover:bg-primary-500/20 text-gray-400 hover:text-primary-400 rounded-lg transition-all duration-300"
                      title="Preview Landing Page"
                    >
                      <Globe size={16} />
                    </button>
                    <a 
                      href={project.github}
                      className="p-2 bg-gray-700/50 hover:bg-primary-500/20 text-gray-400 hover:text-primary-400 rounded-lg transition-all duration-300"
                      title="GitHub"
                    >
                      <Github size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="mt-24 mb-16">
          <h3 className="text-3xl font-bold text-center text-white mb-10" style={{ fontFamily: 'Audiowide, cursive' }}>Testimonials</h3>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
            {[
              {
                name: 'Ava Smith',
                role: 'Product Manager, TechCorp',
                photo: 'https://randomuser.me/api/portraits/women/44.jpg',
                quote: 'Shabi delivered our project on time with exceptional quality. The UI/UX was beyond our expectations!'
              },
              {
                name: 'Liam Johnson',
                role: 'CEO, StartupX',
                photo: 'https://randomuser.me/api/portraits/men/32.jpg',
                quote: 'Professional, creative, and highly skilled. Highly recommend for any web development needs.'
              },
              {
                name: 'Sophia Lee',
                role: 'CTO, Innovatech',
                photo: 'https://randomuser.me/api/portraits/women/65.jpg',
                quote: 'Working with Shabi was a pleasure. The communication and results were top-notch.'
              }
            ].map((t, i) => (
              <div key={i} className="glass-effect rounded-xl p-8 flex-1 flex flex-col items-center card-hover">
                <img src={t.photo} alt={t.name} className="w-20 h-20 rounded-full mb-4 border-4 border-primary-500 shadow-lg" />
                <h4 className="text-lg font-bold text-white mb-1">{t.name}</h4>
                <p className="text-primary-400 text-sm mb-2">{t.role}</p>
                <p className="text-gray-300 text-center italic">"{t.quote}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* Get Hired Section */}
        <div className="my-16 flex flex-col items-center justify-center">
          <h3 className="text-3xl font-bold text-white mb-4">Ready to Elevate Your Online Presence?</h3>
          <p className="text-gray-300 mb-6 text-center max-w-xl">Let's work together to build something amazing. Click below to get in touch and hire me for your next project!</p>
          <button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary text-lg px-8 py-4"
          >
            Hire Me
          </button>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6">
            Interested in working together? Let's discuss your next project!
          </p>
          <button 
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            Get In Touch
          </button>
        </div>
      </div>

      {/* Project Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="relative">
              <video 
                src={selectedProject.landingPage.video}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-2xl font-bold drop-shadow-md">{selectedProject.landingPage.heading[0]}</h3>
                <p className="text-lg drop-shadow-md">{selectedProject.landingPage.heading[1]}</p>
              </div>
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors duration-300"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-3xl font-bold text-white">{selectedProject.title}</h3>
                <span className="px-4 py-2 bg-gradient-to-r from-primary-500 to-accent-purple text-white text-sm font-medium rounded-full">
                  {selectedProject.category}
                </span>
              </div>

              <p className="text-gray-300 text-lg mb-6">
                {selectedProject.description}
              </p>

              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-white mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-white mb-3">Key Features</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2 text-gray-300">
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => {
                    showProjectLanding(selectedProject);
                    closeModal();
                  }}
                  className="btn-primary flex items-center justify-center space-x-2"
                >
                  <Globe size={20} />
                  <span>Preview Landing</span>
                </button>
                <a 
                  href={selectedProject.github}
                  className="btn-secondary flex items-center justify-center space-x-2"
                >
                  <Github size={20} />
                  <span>View Code</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Landing Page Preview Modal */}
      {showLandingPage && currentLandingPage && (
        <div className="fixed inset-0 bg-black z-50 flex flex-col">
          <div className="absolute top-4 right-4 z-50">
            <button 
              onClick={() => setShowLandingPage(false)}
              className="p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors duration-300"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="flex-1 relative overflow-hidden">
            {/* Video Background */}
            <video 
              src={currentLandingPage.video} 
              autoPlay 
              loop 
              muted 
              playsInline
              preload="auto"
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => {
                console.error('Video error in landing page:', e);
                e.target.onerror = null;
                e.target.poster = "https://via.placeholder.com/1920x1080?text=Video+Loading+Error";
              }}
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>
            
            {/* Navigation */}
            <div className="absolute top-0 left-0 right-0 z-10">
              <nav className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="text-white font-bold text-xl bebas-neue-regular">
                    {currentLandingPage.heading[0].split(' ')[0]}
                  </div>
                  <div className="hidden md:flex space-x-8">
                    {currentLandingPage.navItems?.map((item, index) => (
                      <a 
                        key={index} 
                        href="#" 
                        className="text-white hover:text-primary-400 transition-colors"
                        onClick={(e) => e.preventDefault()}
                      >
                        {item}
                      </a>
                    )) || []}
                  </div>
                  <div className="md:hidden">
                    <button className="text-white">
                      <Menu size={24} />
                    </button>
                  </div>
                </div>
              </nav>
            </div>
            
            {/* Main Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl md:text-7xl font-bold mb-4 bebas-neue-regular">
                  {currentLandingPage.heading[0]}
                </h1>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 bebas-neue-regular">
                  {currentLandingPage.heading[1]}
                </h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto">
                  {currentLandingPage.subheading || "Experience a beautifully designed website"}
                </p>
                
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                  <button className="btn-primary text-lg px-8 py-4">
                    {currentLandingPage.cta || "Get Started"}
                  </button>
                  <button className="btn-secondary text-lg px-8 py-4">
                    {currentLandingPage.secondaryCta || "Learn More"}
                  </button>
                </div>
              </div>
            </div>
            
            {/* Features Section */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent py-12">
              <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {(currentLandingPage.features || ["Feature 1", "Feature 2", "Feature 3", "Feature 4"]).map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="text-primary-400 mt-1">
                        <ChevronRight size={20} />
                      </div>
                      <div>
                        <p className="text-white font-medium">{feature}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Floating CTA */}
            <div className="absolute bottom-4 right-4 z-10">
              <button className="bg-primary-500 hover:bg-primary-600 text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110">
                <Mail size={24} />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;