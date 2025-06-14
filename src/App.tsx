import React, { useState, useEffect } from 'react';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Download, 
  ExternalLink,
  ChevronDown,
  Code,
  Database,
  Shield,
  Brain,
  GraduationCap,
  User,
  Briefcase,
  Send,
  Calendar,
  Award,
  Users,
  BookOpen,
  Trophy,
  FileText,
  Globe,
  Heart,
  Zap
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'skills', 'awards', 'certifications', 'publications', 'activities', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  const skills = [
    { name: 'Python', level: 90, category: 'Programming' },
    { name: 'JavaScript/TypeScript', level: 85, category: 'Programming' },
    { name: 'Java', level: 80, category: 'Programming' },
    { name: 'Parallel Programming', level: 75, category: 'Programming' },
    { name: 'Machine Learning', level: 88, category: 'AI/ML' },
    { name: 'Deep Learning', level: 82, category: 'AI/ML' },
    { name: 'TensorFlow/PyTorch', level: 85, category: 'AI/ML' },
    { name: 'Data Analytics', level: 90, category: 'Data Science' },
    { name: 'SQL/NoSQL', level: 87, category: 'Data Science' },
    { name: 'Cybersecurity', level: 78, category: 'Security' },
    { name: 'Network Security', level: 75, category: 'Security' },
    { name: 'React/Node.js', level: 83, category: 'Web Development' }
  ];

  const projects = [
    {
      title: 'Software Testing Projects – Java & Selenium',
      description:
        'A full suite of academic testing projects: JUnit-based black-box tests on a Snake Game, white-box and mutation testing on a GPA Calculator, integration tests using Mockito, and Selenium WebDriver for web price comparison.',
      technologies: ['Java', 'JUnit', 'Mockito', 'Selenium', 'PIT', 'Testing'],
      link: '', // no live demo
      github: 'https://github.com/bookwormzn/Tester/tree/main'
    },
    {
      title: 'XAI in Finance Dataset: Experimental Study',
      description:
        'Implements the experimental study of the Finance-XAI paper on explainable AI for financial fraud detection. Includes SHAP and LIME visualizations for model transparency and accountability.',
      technologies: ['Python', 'XAI', 'SHAP', 'LIME', 'ML'],
      link: '', // no live demo
      github: 'https://github.com/bookwormzn/Finance-XAI'
    }
    ,
    {
      title: 'Socket Programming Quiz Server',
      description:
        'A Python-based socket server that sends multiple-choice quiz questions to a client over TCP, evaluates responses, and simulates basic client-server interaction using socket programming.',
      technologies: ['Python', 'Socket', 'TCP/IP', 'Networking'],
      link: '', // no live demo
      github: 'https://github.com/bookwormzn/Socket_Programming'
    }
    
  ];

  const awards = [
    {
      title: '2nd Place – Huawei ICT Competition Global Final',
      category: 'Cloud Category',
      location: 'Shenzhen, China',
      date: 'May 2025',
      description: 'Represented TED University on the global stage among teams from 40+ countries.',
      icon: Trophy
    },
    {
      title: '2nd Place – Huawei ICT Competition European Regional Final',
      category: 'Cloud Category',
      location: 'Europe',
      date: 'March 2025',
      description: 'Secured qualification to the Global Finals in China.',
      icon: Award
    }
  ];

  const certifications = [
    {
      title: 'Software Engineering Courses',
      provider: 'Coursera',
      year: '2023',
      description: 'Earned 3 certificates for completing "Modeling Software Systems using UML", "Implementation and Testing", "Software Design and Project Management" courses.',
      icon: Code
    },
    {
      title: 'Advanced Cyber Threat Intelligence and Threat Hunting',
      provider: 'BTK',
      year: '2023',
      description: 'Completed a 36-hour, in-person course focusing on advanced techniques and strategies for identifying, analyzing, and mitigating cyber threats.',
      icon: Shield
    },
    {
      title: 'IBM SkillsBuild Cybersecurity Programme',
      provider: 'IBM',
      year: '2023',
      description: 'Completed a comprehensive cybersecurity program gaining in-depth knowledge of various cybersecurity domains and practical skills through hands-on projects.',
      icon: Database
    },
    {
      title: 'Machine Learning Courses',
      provider: 'Coursera',
      year: '2024',
      description: 'Earned 2 certificates for completing "Supervised Machine Learning: Regression" and "Supervised Machine Learning: Classification".',
      icon: Brain
    }
  ];

  const publications = [
    {
      title: 'Explainable Artificial Intelligence Models for Intrusion Detection Systems',
      authors: 'Zeynep Bölükbaşı, Zeynep Yiğit, Yılmaz Atay, Prof. Dr. Şeref Sağıroğlu',
      venue: 'Peer-to-Peer Networking and Applications (Springer Nature)',
      year: '2025',
      status: 'Under review',
      type: 'Journal Article'
    },
    {
      title: 'Insurance Fraud Detection Using Machine Learning and XAI Algorithms',
      authors: 'Zeynep Bolukbasi, Hilal Yurtoglu, Asst. Prof. Emin Kugu, Asst. Prof. Haydar Cukurtepe',
      venue: '2025 IEEE Region 4 Electro/Information Technology Conference (EIT 2025)',
      year: '2025',
      status: 'Presented at Valparaiso University, USA',
      type: 'Conference Paper'
    }
  ];

  const activities = [
    {
      title: '12 Mentorship Program',
      description: 'Within the scope of the "12 Mentoring Campaign", I mentored an earthquake-affected student who was preparing for university during the university exam process.',
      icon: Heart,
      category: 'Mentorship'
    },
    {
      title: 'Freshmen Students Mentorship Program',
      description: 'Currently volunteering as a mentor guiding and supporting freshmen students in their first year in their transition to our university.',
      icon: Users,
      category: 'Mentorship'
    },
    {
      title: 'CyberTEDU Board Member',
      description: 'Provide cyber security mentoring to a group of students at my university and write blog posts about cyber security.',
      icon: Shield,
      category: 'Leadership'
    },
    {
      title: 'Traditional Turkish Folk Dance',
      description: 'Practicing traditional Turkish folk dance as a hobbyist for over a year, actively participating in weekly rehearsals and performances.',
      icon: Zap,
      category: 'Cultural'
    }
  ];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/contact', formData);
     toast('Mesajınız başarıyla gönderildi!', {
  icon: <Mail color="#3b82f6" />,
  style: {
    background: '#1e293b',
    color: '#bfdbfe'
  },
  progressStyle: {
    background: '#3b82f6'  // Tailwind blue-500
  }
});

      setFormData({ name: '', email: '', message: '' }); // form temizlenir
    } catch (error) {
      console.error('Gönderim hatası:', error);
      toast.error('Mesaj gönderilirken bir hata oluştu.');
    }
  };
  <ToastContainer position="bottom-right" autoClose={3000} theme="dark" />

  return (
    
    <div className="min-h-screen bg-slate-900 text-white">
       <ToastContainer position="bottom-right" autoClose={3000} theme="dark" />
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Zeynep Bölükbaşı
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6 text-sm">
              {['Home', 'About', 'Education', 'Skills', 'Awards', 'Certifications', 'Publications', 'Activities', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`font-medium transition-colors duration-200 hover:text-blue-400 ${
                    activeSection === item.toLowerCase() ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div className={`w-full h-0.5 bg-white transition-all ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></div>
                <div className={`w-full h-0.5 bg-white transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                <div className={`w-full h-0.5 bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></div>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-800 max-h-96 overflow-y-auto">
              {['Home', 'About', 'Education', 'Skills', 'Awards', 'Certifications', 'Publications', 'Activities', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 text-gray-300 hover:text-blue-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-cyan-900/20"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Zeynep Bölükbaşı
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Software Engineer
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              TED University graduate passionate about creating innovative solutions through 
              artificial intelligence, data analytics, and secure systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
  <button
    onClick={() => scrollToSection('projects')}
    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
  >
    View My Work
  </button>

  {/* Download CV */}
  <a
    href="../public/ZeynepBölükbaşı-CV -Last.pdf"
    download
    className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
  >
    <Download size={20} />
    Download CV
  </a>
</div>

          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-gray-400" size={32} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl overflow-hidden border-4 border-gradient-to-br from-blue-400 to-cyan-400 shadow-2xl">
                  <img 
                    src="/public/IMG_0247-Photoroom (1).png" 
                    alt="Zeynep Bölükbaşı" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-2xl -z-10"></div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-slate-700/30 p-6 rounded-xl border border-slate-600">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                  <User className="text-blue-400" size={24} />
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 gap-3 text-gray-300">
                  <div className="flex items-center gap-3">
                    <Calendar className="text-cyan-400" size={16} />
                    <span className="text-sm">Born: July 4, 2000 - Ankara, Turkey</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="text-cyan-400" size={16} />
                    <span className="text-sm">Location: Altındağ / ANKARA</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-4 h-4 rounded-full bg-red-500 flex items-center justify-center">
                      <span className="text-xs text-white font-bold">TR</span>
                    </span>
                    <span className="text-sm">Nationality: Turkish</span>
                  </div>
                </div>
              </div>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                As a recent graduate from TED University with a degree in Software Engineering and 
                a secondary field in Applied Data Analytics, I bring a unique blend of technical 
                expertise and analytical thinking to every project.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                My passion lies at the intersection of artificial intelligence, machine learning, 
                and cybersecurity. I thrive on solving complex problems and creating innovative 
                solutions that make a real-world impact.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-slate-700/50 rounded-lg">
                  <Brain className="text-blue-400 mx-auto mb-2" size={32} />
                  <h3 className="font-semibold text-white">AI & ML</h3>
                  <p className="text-sm text-gray-400">Deep Learning & Analytics</p>
                </div>
                <div className="text-center p-4 bg-slate-700/50 rounded-lg">
                  <Shield className="text-cyan-400 mx-auto mb-2" size={32} />
                  <h3 className="font-semibold text-white">Cybersecurity</h3>
                  <p className="text-sm text-gray-400">Threat Detection & Prevention</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
              <div className="flex items-start gap-6">
                <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-4 rounded-xl">
                  <GraduationCap size={32} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">TED University</h3>
                  <p className="text-xl text-blue-400 mb-2">Bachelor of Science in Software Engineering</p>
                  <p className="text-lg text-cyan-400 mb-4">Secondary Field: Applied Data Analytics</p>
                  <p className="text-gray-300 leading-relaxed">
                    Comprehensive education combining software engineering principles with advanced 
                    data analytics techniques. Specialized coursework in artificial intelligence, 
                    machine learning algorithms, cybersecurity protocols, and data-driven decision making.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm">Software Engineering</span>
                    <span className="px-3 py-1 bg-cyan-600/20 text-cyan-400 rounded-full text-sm">Data Analytics</span>
                    <span className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm">Machine Learning</span>
                    <span className="px-3 py-1 bg-orange-600/20 text-orange-400 rounded-full text-sm">Cybersecurity</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-slate-700/30 p-6 rounded-xl border border-slate-600">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                  <span className="text-sm text-gray-400">{skill.category}</span>
                </div>
                <div className="w-full bg-slate-600 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <div className="text-right text-sm text-gray-400 mt-1">{skill.level}%</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Awards & Achievements
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 hover:transform hover:scale-105 transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="bg-gradient-to-br from-yellow-500 to-orange-500 p-4 rounded-xl">
                    <award.icon size={32} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{award.title}</h3>
                    <p className="text-lg text-yellow-400 mb-2">{award.category}</p>
                    <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {award.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {award.date}
                      </span>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{award.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Certifications
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-slate-700/30 rounded-xl p-6 border border-slate-600">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-3 rounded-lg">
                    <cert.icon size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2">{cert.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                      <span className="text-blue-400 font-medium">{cert.provider}</span>
                      <span>{cert.year}</span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">{cert.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Publications & Conferences
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
          </div>

          <div className="space-y-8">
            {publications.map((pub, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
                <div className="flex items-start gap-6">
                  <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-4 rounded-xl">
                    <FileText size={32} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-bold text-white">{pub.title}</h3>
                      <span className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm">
                        {pub.type}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-3 text-sm leading-relaxed">{pub.authors}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                      <span className="text-cyan-400 font-medium">{pub.venue}</span>
                      <span>{pub.year}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe size={16} className="text-green-400" />
                      <span className="text-green-400 text-sm font-medium">{pub.status}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extracurricular Activities Section */}
      <section id="activities" className="py-20 bg-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Extracurricular Activities
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {activities.map((activity, index) => (
              <div key={index} className="bg-slate-700/30 rounded-xl p-6 border border-slate-600 hover:transform hover:scale-105 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-green-600 to-teal-600 p-3 rounded-lg">
                    <activity.icon size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-bold text-white">{activity.title}</h3>
                      <span className="px-2 py-1 bg-green-600/20 text-green-400 rounded-full text-xs">
                        {activity.category}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">{activity.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-2 rounded-lg">
                      <Briefcase size={20} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-slate-600/50 text-gray-300 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a href={project.link} className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                      <ExternalLink size={16} />
                      <span className="text-sm">Live Demo</span>
                    </a>
                    <a href={project.github} className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors">
                      <Github size={16} />
                      <span className="text-sm">Source</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
            <p className="text-gray-300 mt-6">
              Ready to collaborate on innovative projects or discuss opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-3 rounded-lg">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a href="mailto:zeynep.bolukbasi00@gmail.com" className="text-white hover:text-blue-400 transition-colors">
                      zeynep.bolukbasi00@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-3 rounded-lg">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <a href="tel:+905531855023" className="text-white hover:text-blue-400 transition-colors">
                      +90 553 185 50 23
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-3 rounded-lg">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white">Altındağ / ANKARA, Turkey</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <a 
                  href="https://github.com/bookwormzn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-slate-700 p-3 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <Github size={24} className="text-white" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/zeynepbolukbasi22" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-slate-700 p-3 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <Linkedin size={24} className="text-white" />
                </a>
                <a 
                  href="mailto:zeynep.bolukbasi00@gmail.com"
                  className="bg-slate-700 p-3 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <Mail size={24} className="text-white" />
                </a>
              </div>
            </div>

            <div className="bg-slate-700/30 p-8 rounded-xl border border-slate-600">
  <form className="space-y-6" onSubmit={handleSubmit}>
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
      <input 
        type="text" 
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
        placeholder="Your name"
        required
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
      <input 
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
        placeholder="your.email@example.com"
        required
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
      <textarea 
        name="message"
        value={formData.message}
        onChange={handleChange}
        rows={4}
        className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
        placeholder="Your message..."
        required
      ></textarea>
    </div>
    <button 
      type="submit"
      className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
    >
      <Send size={20} />
      Send Message
    </button>
  </form>
</div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 Zeynep Bölükbaşı. 
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;