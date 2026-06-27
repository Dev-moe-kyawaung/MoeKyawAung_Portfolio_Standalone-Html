import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X, Mail, Phone, Github, Linkedin, Instagram, Play, MessageCircle, Award, Code, Zap, TrendingUp } from 'lucide-react';

const PortfolioLanding = () => {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState('en');
  const [scrollY, setScrollY] = useState(0);
  const [counters, setCounters] = useState({ years: 0, apps: 0, repos: 0 });

  // Smooth scroll handler for parallax
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animated counter effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCounters(prev => ({
        years: prev.years < 12 ? prev.years + 0.5 : 12,
        apps: prev.apps < 3000 ? prev.apps + 100 : 3000,
        repos: prev.repos < 122 ? prev.repos + 3 : 122
      }));
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const translations = {
    en: {
      nav: ['Home', 'About', 'Skills', 'Apps', 'Certificates', 'Testimonials', 'Contact'],
      hero: 'Android Senior Developer',
      tagline: 'Crafting secure, scalable mobile experiences with Kotlin & modern Jetpack',
      about: 'About Me',
      experience: '12+ Years Building Excellence',
      stats: 'Professional Milestones',
      skills: 'Technical Expertise',
      apps: 'Featured Applications',
      certificates: 'Professional Certifications',
      testimonials: 'Client Testimonials',
      faq: 'Frequently Asked',
      pricing: 'Service Packages',
      contact: 'Let\'s Connect',
      cta: 'View My Work',
      viewProjects: 'Explore Portfolio',
      download: 'Download CV',
      subscribe: 'Subscribe to Newsletter',
      message: 'Send Message',
    },
    my: {
      nav: ['အဆိုပါ', 'အကြောင်း', 'အစွမ်းအရည်', 'အပ်လီကေးရှင်း', 'လက်မှတ်များ', 'မြေးမုံရံ့', 'ဆက်သွယ်ရန်'],
      hero: 'Android အကျsenior Developer',
      tagline: 'Kotlin နှင့် Jetpack ဖြင့် လုံခြုံ၊ စကေးလျှာ မိုဘိုင်းအားဆောင်း သည်း ကြေးမုံရံ့များ ဖန်တီးခြင်း',
      about: 'ကျွန်တော်အကြောင်း',
      experience: '၁၂ နှစ်ကျော် ပညာရှင်ခြင်း',
      stats: 'ပရော်ဖက်ရှင်နယ်ယင်မျက်ခြင်း',
      skills: 'နည်းပညာဆိုင်ရာ အုပ်စုများ',
      apps: 'အထင်ရှားသော အပ်လီကေးရှင်းများ',
      certificates: 'ပညာရှင်လက်မှတ်များ',
      testimonials: 'ဒီရေတ္တာ မြေးမုံရံ့များ',
      faq: 'အဖြေများ',
      pricing: 'ဝန်ဆောင်မှု အစီအမံများ',
      contact: 'ကျွန်တော်နှင့် ဆက်သွယ်ပါ',
      cta: 'ကျွန်တော်၏ အလုပ်များကြည့်ရှုရန်',
      viewProjects: 'ပုံတိုင်းအောက်လှည့်ကြည့်ရန်',
      download: 'CV ဒေါင်းလုဒ်လုပ်ပါ',
      subscribe: 'သတင်းလွှာအတွက် စာရင်းသွင်းပါ',
      message: 'စာတစ်စောင်ပgönderin',
    }
  };

  const t = translations[lang];

  // Animated counter component
  const AnimatedCounter = ({ value, suffix = '' }) => (
    <span className="text-4xl font-bold text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text">
      {Math.floor(value)}{suffix}
    </span>
  );

  // Skill ring component with SVG
  const SkillRing = ({ skill, percentage, icon }) => (
    <div className="flex flex-col items-center group">
      <div className="relative w-24 h-24 mb-4">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="none" stroke={isDark ? "#374151" : "#e5e7eb"} strokeWidth="2" />
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="url(#goldGradient)"
            strokeWidth="2"
            strokeDasharray={`${2 * Math.PI * 45 * (percentage / 100)} ${2 * Math.PI * 45}`}
            className="transition-all duration-1000 ease-out"
          />
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-bold text-yellow-500">{percentage}%</span>
        </div>
      </div>
      <p className={`text-sm font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{skill}</p>
    </div>
  );

  return (
    <div className={`${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} min-h-screen font-sans transition-colors duration-300`}>
      {/* Google Fonts link */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
        
        body { font-family: 'Inter', sans-serif; }
        .font-display { font-family: 'Playfair Display', serif; }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes slideInUp {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-slideInUp { animation: slideInUp 0.8s ease-out forwards; }
        .animate-shimmer { 
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          background-size: 1000px 100%;
          animation: shimmer 2s infinite;
        }

        /* Smooth scroll behavior */
        html { scroll-behavior: smooth; }
        
        /* Reduced motion respect */
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition: none !important; }
        }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full ${isDark ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-md z-50 border-b ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <a href="#" className="font-display text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              MKA
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-8">
              {t.nav.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-sm uppercase tracking-widest hover:text-yellow-500 transition-colors">
                  {item}
                </a>
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setLang(lang === 'en' ? 'my' : 'en')}
                className="text-sm px-3 py-2 rounded-md hover:bg-yellow-500/10 transition-colors"
              >
                {lang === 'en' ? ' Myanmar' : 'English'}
              </button>
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-full hover:bg-yellow-500/10 transition-colors"
              >
                {isDark ? '☀️' : '🌙'}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2"
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className={`md:hidden pb-4 space-y-2 border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
              {t.nav.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-2 hover:bg-yellow-500/10 rounded-md transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with Parallax */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="animate-slideInUp">
            <p className="text-yellow-500 uppercase tracking-widest text-sm mb-6">Welcome to my digital space</p>
            <h1 className="font-display text-5xl sm:text-7xl font-bold mb-6 leading-tight">
              {t.hero}
            </h1>
            <p className={`text-xl mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              {t.tagline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 font-semibold rounded-lg hover:shadow-lg hover:shadow-yellow-500/50 transition-all transform hover:scale-105">
                {t.viewProjects}
              </button>
              <button className={`px-8 py-4 border-2 border-yellow-500 text-yellow-500 font-semibold rounded-lg hover:bg-yellow-500/10 transition-all`}>
                {t.download}
              </button>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="mt-16 animate-float">
            <ChevronDown className="mx-auto text-yellow-500" size={32} />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-gray-800/50' : 'bg-gray-100/50'} border-y ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-4xl font-bold text-center mb-16">{t.stats}</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <AnimatedCounter value={counters.years} suffix="+" />
              <p className={`text-sm uppercase tracking-widest mt-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Years Experience</p>
            </div>
            <div className="text-center">
              <AnimatedCounter value={counters.apps} suffix="+" />
              <p className={`text-sm uppercase tracking-widest mt-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Applications Built</p>
            </div>
            <div className="text-center">
              <AnimatedCounter value={counters.repos} suffix="" />
              <p className={`text-sm uppercase tracking-widest mt-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>GitHub Repositories</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-4xl font-bold mb-8">{t.about}</h2>
              <p className={`text-lg mb-6 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Android Developer with nearly 12 years of hands-on experience building secure, scalable, and user-friendly mobile applications. Strong in Kotlin and modern Jetpack development (Compose, ViewModel, Room), Firebase integration, and REST API consumption.
              </p>
              <p className={`text-lg mb-8 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                I focus on clean architecture, maintainable code, and practical security. Comfortable delivering features end-to-end—from UI to networking, local caching, testing, and release-ready builds.
              </p>
              <div className="flex gap-4">
                <Award className="text-yellow-500" size={24} />
                <div>
                  <h4 className="font-semibold mb-2">100% Client Satisfaction</h4>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Consistently delivering excellence and exceeding expectations</p>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className={`space-y-8 p-8 rounded-xl ${isDark ? 'bg-gray-800/50' : 'bg-gray-100'}`}>
              <div className="border-l-4 border-yellow-500 pl-6">
                <h4 className="font-semibold text-yellow-500 text-sm uppercase">2012 - 2016</h4>
                <p className="font-bold mt-2">Foundation Years</p>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Native Android development, Java fundamentals</p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-6">
                <h4 className="font-semibold text-yellow-500 text-sm uppercase">2016 - 2019</h4>
                <p className="font-bold mt-2">Kotlin Era</p>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Kotlin adoption, architectural patterns, Firebase</p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-6">
                <h4 className="font-semibold text-yellow-500 text-sm uppercase">2019 - Present</h4>
                <p className="font-bold mt-2">Jetpack Compose Era</p>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Modern Compose, MVVM, CI/CD mastery, leadership</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-gray-800/50' : 'bg-gray-100/50'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-4xl font-bold text-center mb-16">{t.skills}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <SkillRing skill="Kotlin" percentage={98} />
            <SkillRing skill="Jetpack" percentage={95} />
            <SkillRing skill="Firebase" percentage={92} />
            <SkillRing skill="CI/CD" percentage={90} />
            <SkillRing skill="MVVM" percentage={96} />
            <SkillRing skill="Compose" percentage={94} />
            <SkillRing skill="REST API" percentage={93} />
            <SkillRing skill="Testing" percentage={89} />
          </div>

          {/* Tech Stack */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className={`p-6 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-white'} border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
              <Code className="text-yellow-500 mb-4" size={32} />
              <h3 className="font-semibold text-lg mb-3">Core Languages</h3>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Kotlin, Java, Python, SQL, XML</p>
            </div>
            <div className={`p-6 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-white'} border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
              <Zap className="text-yellow-500 mb-4" size={32} />
              <h3 className="font-semibold text-lg mb-3">Frameworks & Libraries</h3>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Jetpack Compose, MVVM, Room, Retrofit, Hilt, Coroutines</p>
            </div>
            <div className={`p-6 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-white'} border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
              <TrendingUp className="text-yellow-500 mb-4" size={32} />
              <h3 className="font-semibold text-lg mb-3">DevOps & Tools</h3>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>GitHub Actions, CI/CD, Firebase, Android Studio, Git</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Apps */}
      <section id="apps" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-4xl font-bold text-center mb-16">{t.apps}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'MoekyawTranslator', desc: 'Claude API-powered translator with 8 languages including Myanmar', tech: 'Compose, MVVM, Firebase' },
              { name: 'YahtzeeGame', desc: 'Classic dice game with MVVM architecture and animations', tech: 'Compose, MVVM, Unit Tests' },
              { name: 'CyberLab', desc: 'Cybersecurity learning app with interactive challenges', tech: 'Compose, Material 3, Security' },
            ].map((app, idx) => (
              <div key={idx} className={`group p-8 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-gray-100'} border ${isDark ? 'border-gray-700 hover:border-yellow-500' : 'border-gray-200 hover:border-yellow-500'} transition-all cursor-pointer hover:shadow-xl hover:shadow-yellow-500/10`}>
                <h3 className="font-semibold text-lg mb-3 group-hover:text-yellow-500 transition-colors">{app.name}</h3>
                <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{app.desc}</p>
                <p className="text-xs text-yellow-500 font-semibold uppercase">{app.tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GitHub Accounts */}
      <section id="github" className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-gray-800/50' : 'bg-gray-100/50'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-4xl font-bold text-center mb-16">GitHub Presence</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Dev-moe-kyawaung',
              'moekyawaung-bangkok',
              'moekyawaung-tech',
              'moekyawaung-designer',
              'moekyawaung-hack',
              'moekyawaung-cloud',
              'Moe-kyaw-Aung-microsoft',
              'moekyawaung-webdevoper',
            ].map((account, idx) => (
              <a
                key={idx}
                href={`https://github.com/${account}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-6 rounded-lg text-center ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} border ${isDark ? 'border-gray-700' : 'border-gray-200'} transition-all group`}
              >
                <Github className="mx-auto mb-3 text-yellow-500 group-hover:scale-110 transition-transform" />
                <p className="text-sm font-semibold truncate">{account}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-4xl font-bold text-center mb-4">{t.certificates}</h2>
          <p className={`text-center mb-16 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>82+ Programming Hub Certifications across 9 domains</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { domain: 'Kotlin Programming', count: 12, color: 'from-purple-500 to-purple-600' },
              { domain: 'Android Devel
