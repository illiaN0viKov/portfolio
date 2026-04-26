'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  images: string[];
  link?: string;
  features: string[];
  tech: string[];
  readme?:string
}

const projects: Project[] = [
  {
    id: 'beatstore',
    title: 'BeatStore',
    description: 'A production-ready beat marketplace with custom MP3 player, Stripe checkout, and FastAPI backend for automated licensing.',
    tags: ['e-commerce', 'music', 'full-stack'],
    images: [ '/beats/Screenshot 2026-04-23 212025.png', '/beats/Screenshot 2026-04-23 212005.png', '/beats/Screenshot 2026-04-23 212134.png'],
    features: ['Custom MP3 player with waveform', 'Stripe-powered checkout', 'PDF license generation', 'Signed URL delivery', 'Responsive UI'],
    tech: ['Next.js', 'FastAPI', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
    link: "https://elegant-beats.vercel.app/",
    readme:"/beats/about project.md"
  },

    {
    id: 'lyfevents',
    title: 'LyfEvents',
    description: 'Event discovery and social platform with live messaging, user profiles, and real-time communication via WebSockets.',
    tags: ['events', 'social', 'realtime', "chat"],
    images: ['/lyfevents/Screenshot 2026-04-25 142734.png', '/lyfevents/Screenshot 2026-04-25 142743.png', '/lyfevents/Screenshot 2026-04-25 142757.png'],
    features: ['Event discovery', 'Live messaging', 'User profiles', 'Event management', 'Real-time communication'],
    tech: ['React', 'Django', 'WebSockets', 'Redis', 'MySQL', 'Azure'],
    link:"https://www.lyfevents.pl/",
    readme:"/lyfevents/about project.md"
  },
  
  {
    id: 'ideasgrave',
    title: 'Ideas Grave',
    description: 'Collaborative idea management app with lobbies, voting system, and unique visual identity for each idea stage.',
    tags: ['collaboration', 'productivity', 'realtime'],
    images: [  '/ideas-grave/Screenshot 2026-04-25 142117.png', '/ideas-grave/Screenshot 2026-04-25 142023.png', '/ideas-grave/Screenshot 2026-04-25 141147.png',],
    features: ['Lobby-based organization', 'Voting system', 'Role-based permissions', 'Idea lifecycle tracking', 'Notes & propositions'],
    tech: ['Next.js', 'MongoDB', 'Better Auth', 'Tailwind CSS', 'React Hooks'],
    link:"https://ideas-grave.vercel.app/",
    readme:"/ideas-grave/about project.md"
  },
  {
    id: 'jobhunter',
    title: 'Job Hunter',
    description: 'Interactive job application tracker with drag-and-drop kanban board and fully customizable columns.',
    tags: ['productivity', 'job-tracking', 'kanban'],
    images: [  "/job-hunter/Screenshot 2026-04-23 213736.png" , '/job-hunter/Screenshot 2026-04-23 213720.png', '/job-hunter/Screenshot 2026-04-23 212438.png',],
    features: ['Drag & drop kanban board', 'Customizable columns', 'Application tracking', 'Optimistic UI updates', 'Persistent state'],
    tech: ['Next.js', 'MongoDB', 'dnd-kit', 'Better Auth', 'Tailwind CSS'],
    link:"https://job-hunt-six-virid.vercel.app/",
    readme:"/job-hunter/about project.md"
  },

];

const skills = {
  languages: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'C#', 'HTML/CSS'],
  frameworks: ['React', 'Next.js', 'DjangoREST', 'FastAPI', "Flask" , 'TensorFlow'],
  databases: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'MSSQL'],
  tools: ['Git', 'Docker', 'Azure', 'AWS', 'Jupyter Lab', "bash"],
};

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

    const [readmeContent, setReadmeContent] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [contactModal, setContactModal] = useState<{ isOpen: boolean; type: 'email' | 'phone' | null; copied: boolean }>({ isOpen: false, type: null, copied: false });

  const openReadme = async (path: string) => {
  try {
    const res = await fetch(path);
    const text = await res.text();
    setReadmeContent(text);
    setShowModal(true);
  } catch (err) {
    console.error('Failed to load readme');
  }
};

const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    setContactModal(prev => ({ ...prev, copied: true }));
  } catch (err) {
    console.error("Copy failed", err);
  }
};

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="bg-gradient-to-br from-purple-100 via-purple-50 to-purple-100 text-gray-900 overflow-hidden">
      {/* Navigation */}

      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">
            Illia Novikov
          </div>
          <div className="hidden md:flex gap-8">
            {['about', 'projects', 'skills', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="capitalize hover:text-purple-600 transition-colors duration-300 text-sm font-medium text-gray-700"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Animated Background Orbs */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-400 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>


        <div className="relative z-10 text-center px-4  space-y-20  max-w-4xl mx-auto">
          {/* Animated title */}
          <div className="flex flex-col items-center">
            <h1 className="text-6xl  md:text-7xl lg:text-8xl font-bold animate-fade-in mb-8">
              <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400 bg-clip-text text-transparent">
                Full-Stack Developer
              </span>
            </h1>
            
            <p className="text-xl  md:text-2xl text-gray-600 mb-8 animate-fade-in-delay">
              Crafting beautiful, modern web applications with elegant code
            </p>


            {/* CV Highlights */}
            <div className="grid md:grid-cols-3 gap-6 mb-8 opacity-0 animate-fade-in-delay-2">
              <div className="group relative bg-white/60 backdrop-blur-sm border border-purple-200/50 rounded-3xl p-6 hover:bg-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-300/20 hover:-translate-y-2 transform cursor-pointer">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">8+</div>
                <div className="text-gray-600 mt-2 font-medium">Major Projects</div>
              </div>
              <div className="group relative bg-white/60 backdrop-blur-sm border border-purple-200/50 rounded-3xl p-6 hover:bg-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-300/20 hover:-translate-y-2 transform cursor-pointer">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">10+</div>
                <div className="text-gray-600 mt-2 font-medium">Tech Stack</div>
              </div>
              <div className="group relative bg-white/60 backdrop-blur-sm border border-purple-200/50 rounded-3xl p-6 hover:bg-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-300/20 hover:-translate-y-2 transform cursor-pointer">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">2026</div>
                <div className="text-gray-600 mt-2 font-medium">CS Graduate</div>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => scrollToSection('projects')}
              onMouseEnter={() => setHoveredButton('hero')}
              onMouseLeave={() => setHoveredButton(null)}
              className="inline-block mt-4 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full font-semibold text-lg text-white hover:shadow-2xl hover:shadow-purple-400/40 transition-all duration-300 transform hover:scale-105 opacity-0 animate-fade-in-delay-3 relative overflow-hidden"
            >
              <span className="relative z-10">View My Work →</span>
              <div className={`absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-600 rounded-full transition-all duration-300 ${hoveredButton === 'hero' ? 'translate-y-0' : 'translate-y-full'}`}></div>
            </button>
          </div>
          
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-5xl font-bold mb-8">
              <span className="bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">About Me</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              I'm an enthusiastic computer science graduate with hands-on experience building and shipping web applications. I've worked on real projects where I managed development, debugged issues, and delivered features end-to-end.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              With a strong foundation in programming, problem-solving, and data analysis, I'm ready to contribute meaningfully to collaborative teams and continue growing as a developer.
            </p>
            <div className="space-y-4 mt-8">
              <div className="flex items-center gap-3 group cursor-pointer">
                <span className="text-purple-500 transform group-hover:scale-125 transition-transform duration-300">✉</span>
                <span className="text-gray-700 group-hover:text-purple-600 transition-colors duration-300">illia.novikov.3hunna@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 group cursor-pointer">
                <span className="text-purple-500 transform group-hover:scale-125 transition-transform duration-300">📱</span>
                <span className="text-gray-700 group-hover:text-purple-600 transition-colors duration-300">+48 512 722 912</span>
              </div>
              <div className="flex items-center gap-3 group">
                <span className="text-purple-500 transform group-hover:scale-125 transition-transform duration-300">💼</span>
                <Link href="https://linkedin.com/in/illia-novikov300" className="text-purple-600 hover:text-purple-700 font-medium transition-colors duration-300">
                  LinkedIn Profile
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-300 rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative bg-white/70 border border-purple-200/50 rounded-3xl p-8 backdrop-blur-sm">
                <div className="space-y-4 text-gray-700">
                  <p className="font-semibold text-purple-600">🎓 Education</p>
                  <p className="text-gray-700">WSB Merito University, Wroclaw (2022-2026)</p>
                  <p className="text-gray-600">Bachelor's in Software Development • GPA: 4.9/5</p>
                  
                  <p className="font-semibold text-purple-600 mt-6">💡 Expertise</p>
                  <p className="text-gray-700">Full-Stack Web Development • Cloud Architecture • Database Design • Real-time Communication • AI/ML Fundamentals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">Featured Projects</span>
          </h2>
          <p className="text-center text-gray-600 mb-10 text-lg">Click any project to see details</p>

          <div className="space-y-20">
            {projects.map((project, idx) => (
              <div
                key={project.id}
                className="group relative"
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Project Images */}
                  <div className={`space-y-4 ${idx % 2 === 1 ? 'md:order-2' : ''}`}>
                    <div className="relative rounded-3xl overflow-hidden bg-white/50 border border-purple-200/50">
                      <div className="relative w-full aspect-video">
                        <Image
                          src={project.images[0]}
                          alt={project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                          priority={idx === 0}
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {project.images.slice(1, 3).map((img, i) => (
                        <div key={i} className="relative rounded-2xl overflow-hidden bg-white/50 border border-purple-200/50 aspect-video">
                          <Image
                            src={img}
                            alt={`${project.title} ${i + 2}`}
                            fill
                            sizes="(max-width: 768px) 50vw, 25vw"
                            className="object-cover hover:scale-110 transition-transform duration-700"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className={`space-y-6 ${idx % 2 === 1 ? 'md:order-1' : ''}`}>
                    <div>
                      <div className="flex gap-2 mb-4 flex-wrap">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-4 py-2 bg-gradient-to-r from-purple-300/30 to-purple-200/30 border border-purple-300/50 rounded-full text-sm text-purple-700 font-medium hover:from-purple-300/50 hover:to-purple-200/50 transition-all duration-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">
                        {project.title}
                      </h3>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Expandable Info Section */}
                    <div className="space-y-4">
                      <button
                        onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                        className="group/btn relative w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full font-semibold text-white text-lg hover:shadow-2xl hover:shadow-purple-400/40 transition-all duration-300 transform hover:scale-105 overflow-hidden"
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          {expandedProject === project.id ? '▼' : '▶'} View Details
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-600 rounded-full transition-all duration-300 group-hover/btn:scale-110"></div>
                      </button>

                      {/* Info Dropdown */}
                      {expandedProject === project.id && (
                        <div className="space-y-4 mt-6 animate-[dropdownSlideDown_0.3s_ease-out] origin-top">
                          {/* Features */}
                          <div className="bg-white/60 backdrop-blur-sm border border-purple-200/50 rounded-2xl p-6 hover:bg-white/80 transition-all duration-300">
                            <h4 className="font-bold text-purple-600 mb-4 text-lg">✨ Key Features</h4>
                            <ul className="space-y-3">
                              {project.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-700 hover:text-purple-600 transition-colors duration-300">
                                  <span className="text-purple-500 font-bold">→</span>
                                  <span className="leading-relaxed">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Tech Stack */}
                          <div className="bg-white/60 backdrop-blur-sm border border-purple-200/50 rounded-2xl p-6 hover:bg-white/80 transition-all duration-300">
                            <h4 className="font-bold text-purple-600 mb-4 text-lg">🛠 Tech Stack</h4>
                            <div className="flex flex-wrap gap-3">
                              {project.tech.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-4 py-2 bg-gradient-to-r from-purple-300/40 to-purple-200/40 border border-purple-300/60 rounded-full text-sm text-gray-700 hover:from-purple-300/60 hover:to-purple-200/60 transition-all duration-300 font-medium"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className='gap-4 flex'>
                          
                          {/* Live Link Button */}
                            {project.link && (
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center  mt-4 px-6 py-4 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full font-semibold text-white text-lg hover:shadow-2xl hover:shadow-purple-400/40 transition-all duration-300 transform hover:scale-105"
                              >
                                🚀 Go See Live
                              </a>
                            )}

                            {project.readme && (
                              
                          <button
                            onClick={() => openReadme(project.readme!)}
                            className="inline-flex items-center justify-center mt-4 px-6 py-4 bg-white border border-purple-300 text-purple-600 rounded-full font-semibold text-lg hover:bg-purple-50 transition-all duration-300"
                          >
                            📄 Read More
                          </button>
                        )}

                        </div>

                        </div>
                      )}
                      
                    </div>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-4 bg-white/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">Skills & Technologies</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="group">
                <div className="bg-white/60 backdrop-blur-sm border border-purple-200/50 rounded-3xl p-8 hover:border-purple-300/80 transition-all duration-300 hover:bg-white/80 hover:shadow-lg hover:shadow-purple-200/20 hover:-translate-y-2 transform">
                  <h3 className="text-lg font-bold text-purple-600 mb-6 capitalize">{category.replace(/([A-Z])/g, ' $1').trim()}</h3>
                  <ul className="space-y-3">
                    {items.map((item) => (
                      <li key={item} className="text-gray-700 text-sm hover:text-purple-600 hover:translate-x-2 transition-all duration-300 font-medium">
                        ▪ {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">Let's Connect</span>
          </h2>
          <p className="text-xl text-gray-700 mb-16">
            I'm open to opportunities and would love to hear from you. Reach out through any channel.
          </p>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <a
              onClick={() => setContactModal({ isOpen: true, type: 'email', copied: false })}
              className="group relative overflow-hidden rounded-3xl bg-white/60 backdrop-blur-sm border border-purple-200/50 p-8 hover:border-purple-400/80 transition-all duration-300 hover:bg-white/80 hover:shadow-lg hover:shadow-purple-300/20 hover:-translate-y-3 transform"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/0 to-purple-300/0 group-hover:from-purple-400/10 group-hover:to-purple-300/10 transition-all duration-300"></div>
              <div className="relative z-10">
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">📧</div>
                <div className="font-bold text-lg text-purple-600 mb-2">Email</div>
                <div className="text-gray-600 text-sm break-all group-hover:text-gray-700 transition-colors">illia.novikov.3hunna@gmail.com</div>
              </div>
            </a>

            <a
            onClick={() => setContactModal({ isOpen: true, type: 'phone', copied: false })}
              className="group relative overflow-hidden rounded-3xl bg-white/60 backdrop-blur-sm border border-purple-200/50 p-8 hover:border-purple-400/80 transition-all duration-300 hover:bg-white/80 hover:shadow-lg hover:shadow-purple-300/20 hover:-translate-y-3 transform"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/0 to-purple-300/0 group-hover:from-purple-400/10 group-hover:to-purple-300/10 transition-all duration-300"></div>
              <div className="relative z-10">
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">📱</div>
                <div className="font-bold text-lg text-purple-600 mb-2">Phone</div>
                <div className="text-gray-600 group-hover:text-gray-700 transition-colors">+48 512 722 912</div>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/illia-novikov300"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-3xl bg-white/60 backdrop-blur-sm border border-purple-200/50 p-8 hover:border-purple-400/80 transition-all duration-300 hover:bg-white/80 hover:shadow-lg hover:shadow-purple-300/20 hover:-translate-y-3 transform"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/0 to-purple-300/0 group-hover:from-purple-400/10 group-hover:to-purple-300/10 transition-all duration-300"></div>
              <div className="relative z-10">
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">💼</div>
                <div className="font-bold text-lg text-purple-600 mb-2">LinkedIn</div>
                <div className="text-gray-600 group-hover:text-gray-700 transition-colors">Connect with me</div>
              </div>
            </a>

            <a
              href="https://github.com/illiaN0viKov/Projects"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-3xl bg-white/60 backdrop-blur-sm border border-purple-200/50 p-8 hover:border-purple-400/80 transition-all duration-300 hover:bg-white/80 hover:shadow-lg hover:shadow-purple-300/20 hover:-translate-y-3 transform"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/0 to-purple-300/0 group-hover:from-purple-400/10 group-hover:to-purple-300/10 transition-all duration-300"></div>
              
              <div className="relative z-10">
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  🧑‍💻
                </div>
                
                <div className="font-bold text-lg text-purple-600 mb-2">
                  GitHub
                </div>
                
                <div className="text-gray-600 group-hover:text-gray-700 transition-colors">
                  View my projects
                </div>
              </div>
            </a>

          </div>

          <button className="px-10 py-4 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full font-semibold text-lg text-white hover:shadow-2xl hover:shadow-purple-400/40 transition-all duration-300 transform hover:scale-105">
            Get in Touch
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-300/20 py-8 px-4 bg-white/20">
        <div className="max-w-6xl mx-auto text-center text-gray-600 text-sm">
          <p>© 2026 Illia Novikov. All rights reserved. Built with Next.js & Tailwind CSS</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInDelay {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes dropdownSlideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
            max-height: 0;
          }
          to {
            opacity: 1;
            transform: translateY(0);
            max-height: 1000px;
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-fade-in-delay {
          opacity: 0;
          animation: fadeInDelay 0.8s ease-out 0.2s forwards;
        }

        .animate-fade-in-delay-2 {
          opacity: 0;
          animation: fadeInDelay 0.8s ease-out 0.4s forwards;
        }

        .animate-fade-in-delay-3 {
          opacity: 0;
          animation: fadeInDelay 0.8s ease-out 0.6s forwards;
        }
      `}</style>

      {showModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
    
    {/* Modal Box */}
    <div className="bg-white max-w-3xl w-full mx-4 rounded-3xl shadow-2xl p-8 relative overflow-y-auto max-h-[80vh]">
      
      {/* Close Button */}
      <button
        onClick={() => setShowModal(false)}
        className="absolute top-4 right-4 text-gray-500 hover:text-purple-600 text-xl"
      >
        ✕
      </button>

      {/* Title */}
      <h3 className="text-2xl font-bold mb-6 text-purple-600">
        📄 Project Details
      </h3>

      {/* Content */}
  <div className="prose prose-purple max-w-none">
    <ReactMarkdown>{readmeContent}</ReactMarkdown>
  </div>
    </div>
  </div>
)}

{/* Contact Copy Modal */}
{contactModal.isOpen && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
    <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-sm mx-4 relative">
      <button
        onClick={() => setContactModal({ isOpen: false, type: null, copied: false })}
        className="absolute top-6 right-6 text-gray-400 hover:text-purple-600 text-2xl transition-colors duration-200"
      >
        ✕
      </button>

      <div className="text-center">
        <div className="text-5xl mb-4">
          {contactModal.type === 'email' ? '📧' : '📱'}
        </div>
        <h3 className="text-2xl font-bold text-purple-600 mb-2">
          {contactModal.type === 'email' ? 'Email' : 'Phone'}
        </h3>
        <p className="text-gray-700 text-lg mb-6">
          {contactModal.type === 'email' ? 'illia.novikov.3hunna@gmail.com' : '+48 512 722 912'}
        </p>

        <button
          onClick={() => copyToClipboard(contactModal.type === 'email' ? 'illia.novikov.3hunna@gmail.com' : '+48512722912')}
          className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-400/40 transition-all duration-300 transform hover:scale-105"
        >
          {contactModal.copied ? '✓ Copied to clipboard!' : 'Copy to clipboard'}
        </button>
      </div>
    </div>
  </div>
)}

    </main>
  );
}
