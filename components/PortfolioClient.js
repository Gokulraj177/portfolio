'use client';

import { useState, useEffect, useRef } from 'react';

export default function PortfolioClient({ skills, projects }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactData, setContactData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  // Typing effect
  const [typedText, setTypedText] = useState('');
  const words = ["Web Developer", "Python Enthusiast", "Problem Solver"];
  const wordIndex = useRef(0);
  const charIndex = useRef(0);
  const isTyping = useRef(true);

  useEffect(() => {
    const type = () => {
      const currentWord = words[wordIndex.current];
      if (isTyping.current) {
        if (charIndex.current < currentWord.length) {
          charIndex.current++;
          setTypedText(currentWord.substring(0, charIndex.current));
          setTimeout(type, 100);
        } else {
          isTyping.current = false;
          setTimeout(type, 1500); // pause at end of word
        }
      } else {
        if (charIndex.current > 0) {
          charIndex.current--;
          setTypedText(currentWord.substring(0, charIndex.current));
          setTimeout(type, 50);
        } else {
          isTyping.current = true;
          wordIndex.current = (wordIndex.current + 1) % words.length;
          setTimeout(type, 500);
        }
      }
    };
    
    // Start typing effect
    const timeout = setTimeout(type, 500);
    return () => clearTimeout(timeout);
  }, []);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    // Since this is a static export hosted on GitHub pages without a backend,
    // we simulate a send. To receive emails, point the form action to Formspree or Web3Forms.
    setTimeout(() => {
      setStatus('Message sent successfully (Simulation mode)!');
      setContactData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 4000);
    }, 1000);
  };

  return (
    <>
      <nav className="navbar glass-panel-flat">
        <h2 className="logo">
          <span className="text-gradient">Gokulraj</span>
        </h2>
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
          <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>
      </nav>

      <section id="home" className="hero">
        <div className="container hero-container">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="text-gradient">Gokulraj</span>
            </h1>
            <h2 className="hero-subtitle">
              And I'm a <span className="typing-text">{typedText}</span><span className="cursor">|</span>
            </h2>
            <p className="hero-description">
              Passionate Web Developer skilled in HTML, CSS, JavaScript, and Python.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn">Hire Me</a>
              <a href="#projects" className="btn btn-outline">View Work</a>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <img src="/gokul.webp" alt="Gokulraj" className="profile-img" />
            <div className="glow-circle"></div>
          </div>
        </div>
      </section>

      <section id="about" className="section bg-alt">
        <div className="container">
          <h2 className="section-title">About <span className="text-gradient">Me</span></h2>
          <div className="glass-panel about-card">
            <p className="about-text">
              I am a dedicated software developer with a strong foundation in modern web technologies. I specialize in building responsive, user-friendly
              web applications and elegant interfaces. My journey involves continuous learning and applying best practices to deliver high-quality solutions.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <div className="container">
          <h2 className="section-title">My <span className="text-gradient">Skills</span></h2>
          <div className="skills-grid">
            {skills.map(skill => (
              <div key={skill.id} className="skill-card glass-panel">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-pct">{skill.proficiency}%</span>
                </div>
                <div className="progress-bg">
                  <div 
                    className="progress-fill" 
                    style={{ 
                      width: `${skill.proficiency}%`,
                      backgroundColor: skill.color,
                      boxShadow: `0 0 10px ${skill.color}80`
                    }}
                  ></div>
                </div>
              </div>
            ))}
            {skills.length === 0 && <p className="text-secondary text-center">No skills added yet.</p>}
          </div>
        </div>
      </section>

      <section id="projects" className="section bg-alt">
        <div className="container">
          <h2 className="section-title">Featured <span className="text-gradient">Projects</span></h2>
          <div className="projects-grid">
            {projects.map(project => (
              <div key={project.id} className="project-card glass-panel">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-skills">
                  {project.skills_used.split(',').map((s, idx) => (
                    <span key={idx} className="skill-tag">{s.trim()}</span>
                  ))}
                </div>
              </div>
            ))}
            {projects.length === 0 && <p className="text-secondary text-center">No projects added yet.</p>}
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container contact-container">
          <h2 className="section-title">Get In <span className="text-gradient">Touch</span></h2>
          
          <div className="contact-grid">
            <div className="contact-info glass-panel">
              <h3>Contact Information</h3>
              <p>Feel free to reach out for collaborations or just a friendly chat.</p>
              
              <div className="info-item">
                <span className="info-icon">📞</span>
                <div>
                  <h4>Phone</h4>
                  <p>8072407738</p>
                </div>
              </div>
              
              <div className="info-item">
                <span className="info-icon">📧</span>
                <div>
                  <h4>Email</h4>
                  <p>gokulrajsiva44@gmail.com</p>
                </div>
              </div>

              <div className="info-item">
                <span className="info-icon">🔗</span>
                <div>
                  <h4>Website</h4>
                  <p><a href="https://gokulraj.github.io" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-primary)' }}>gokulraj.github.io</a></p>
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper glass-panel">
              <form onSubmit={handleContactSubmit} className="contact-form">
                <div className="form-group">
                  <input type="text" className="form-input" placeholder="Your Name" value={contactData.name} onChange={e => setContactData({...contactData, name: e.target.value})} required />
                </div>
                <div className="form-group">
                  <input type="email" className="form-input" placeholder="Your Email" value={contactData.email} onChange={e => setContactData({...contactData, email: e.target.value})} required />
                </div>
                <div className="form-group">
                  <textarea className="form-textarea" rows="5" placeholder="Your Message" value={contactData.message} onChange={e => setContactData({...contactData, message: e.target.value})} required></textarea>
                </div>
                <button type="submit" className="btn" style={{ width: '100%' }}>Send Message</button>
                {status && <p className="form-status" style={{ marginTop: '1rem', textAlign: 'center', color: status.includes('success') ? '#4ade80' : '#38bdf8' }}>{status}</p>}
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Gokulraj | <a href="https://gokulraj.github.io" style={{ color: 'var(--accent-primary)' }}>gokulraj.github.io</a></p>
      </footer>
    </>
  );
}
