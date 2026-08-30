import { useEffect, useState } from 'react'

const ArrowUpRight = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9" /></svg>
const MenuIcon = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
const CloseIcon = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" /></svg>
const GitHubIcon = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18-.46-1.15-1.11-1.45-1.11-1.45-.91-.61.07-.6.07-.6 1 .07 1.54 1.03 1.54 1.03.9 1.54 2.35 1.1 2.92.84.09-.65.35-1.1.64-1.35-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.61 9.61 0 0 1 12 6.8c.85 0 1.7.11 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.91.68 1.84v2.73c0 .26.18.57.69.48A10 10 0 0 0 12 2Z" /></svg>
const LinkedInIcon = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.45 2H3.55A1.55 1.55 0 0 0 2 3.55v16.9A1.55 1.55 0 0 0 3.55 22h16.9A1.55 1.55 0 0 0 22 20.45V3.55A1.55 1.55 0 0 0 20.45 2ZM8.16 18.5H5.5v-8.56h2.66v8.56ZM6.83 8.77a1.54 1.54 0 1 1 0-3.08 1.54 1.54 0 0 1 0 3.08Zm11.68 9.73h-2.65v-4.16c0-.99-.02-2.27-1.38-2.27-1.39 0-1.6 1.08-1.6 2.2v4.23h-2.66V9.94h2.55v1.17h.04c.35-.67 1.22-1.38 2.5-1.38 2.68 0 3.17 1.77 3.17 4.06v4.71Z" /></svg>
const GmailIcon = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#EA4335" d="M3 6.5 12 13l9-6.5v11A1.5 1.5 0 0 1 19.5 19H18V10l-6 4.4L6 10v9H4.5A1.5 1.5 0 0 1 3 17.5v-11Z" /><path fill="#FBBC04" d="M3 6.5 6 8.7V19H4.5A1.5 1.5 0 0 1 3 17.5v-11Z" /><path fill="#34A853" d="M21 6.5 18 8.7V19h1.5a1.5 1.5 0 0 0 1.5-1.5v-11Z" /><path fill="#4285F4" d="M3 6.5A1.5 1.5 0 0 1 4.5 5h15A1.5 1.5 0 0 1 21 6.5L12 13 3 6.5Z" /></svg>

const navItems = ['About', 'Skills', 'Projects', 'Quantum', 'Contact']

const projects = [
  {
    number: '01',
    title: 'Virtual Lens',
    description: 'Visitors scan a QR code to access a digital view of museum exhibits.They can explore visual details without touching delicate artifacts.The experience makes exhibitions more interactive and accessible.',
    tags: ['Online QR code', 'Node.js'],
    image: '/images/virtual-lens.jpeg',
    imageAlt: 'Virtual Lens museum experience model with QR codes and an interactive scan, view, explore flow',
  },
  { number: '02', title: '[Project title]', description: 'A concise description of the problem this project solves and the value it creates.', tags: ['[Technology]', '[Technology]', '[Technology]'] },
  { number: '03', title: '[Project title]', description: 'A concise description of the problem this project solves and the value it creates.', tags: ['[Technology]', '[Technology]', '[Technology]'] },
]

function OrbitMark({ large = false }) {
  return <div className={`orbit-mark ${large ? 'orbit-mark--large' : ''}`} aria-hidden="true">
    <span className="orbit orbit--one" /><span className="orbit orbit--two" /><span className="orbit orbit--three" />
    <span className="orbit-core">V</span><span className="particle particle--one" /><span className="particle particle--two" /><span className="particle particle--three" />
  </div>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', updateHeader)
    return () => window.removeEventListener('scroll', updateHeader)
  }, [])

  const closeMenu = () => setMenuOpen(false)
  return <>
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <a href="#home" className="brand" aria-label="Viruthika home" onClick={closeMenu}><OrbitMark /><span>VIRUTHIKA</span></a>
      <nav className={menuOpen ? 'nav nav--open' : 'nav'} aria-label="Main navigation">
        {navItems.map((item) => <a href={`#${item.toLowerCase()}`} key={item} onClick={closeMenu}>{item}</a>)}
        <a href="#contact" className="nav-contact" onClick={closeMenu}>Let’s connect <ArrowUpRight /></a>
      </nav>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>{menuOpen ? <CloseIcon /> : <MenuIcon />}</button>
    </header>

    <main>
      <section className="hero" id="home">
        <div className="hero__glow" />
        <div className="hero__content">
          <p className="eyebrow"><span /> B.Tech CSE Student</p>
          <h1>Curious about the<br /><em>quantum</em> future.</h1>
          <p className="hero__intro">I’m Viruthika, a Computer Science student specializing in Quantum Computing & Information Science—learning, building, and exploring what’s next.</p>
          <div className="hero__actions">
            <a href="#projects" className="button button--primary">Explore my work <ArrowUpRight /></a>
            <a href="#about" className="text-link">More about me <span>↓</span></a>
          </div>
        </div>
        <div className="hero__visual"><OrbitMark large /><p className="visual-label visual-label--top">V / 01</p><p className="visual-label visual-label--bottom">EXPLORING POSSIBILITY</p></div>
        <div className="scroll-hint"><span>SCROLL TO EXPLORE</span><i /></div>
      </section>

      <section className="section about" id="about">
        <div className="section-kicker">01 / ABOUT</div>
        <div className="about__copy"><p className="overline">A STUDENT, BUILDER & LIFELONG LEARNER</p><h2>Turning curiosity into <em>thoughtful</em> technology.</h2><p>I’m pursuing a B.Tech in Computer Science Engineering with a specialization in Quantum Computing & Information Science. I’m drawn to the space where rigorous thinking, emerging technology, and practical problem-solving meet.</p><p className="placeholder-text">[Add a short personal introduction here—your interests, the kinds of problems you enjoy, and what motivates you.]</p></div>
        <aside className="about__fact"><span>Currently focused on</span><strong>[Your current learning focus]</strong><div className="mini-orbit"><span /><span /><b /></div></aside>
      </section>

      <section className="section skills" id="skills">
        <div className="section-heading"><div className="section-kicker">02 / EXPERTISE</div><div><p className="overline">TOOLS, FOUNDATIONS & CURIOSITY</p><h2>Growing a versatile<br />technical foundation.</h2></div></div>
        <div className="skills-grid">
          <article><span className="skill-number">01</span><h3>Programming</h3><p>[Add languages you use, such as Python, C++, Java, or JavaScript.]</p></article>
          <article><span className="skill-number">02</span><h3>Development</h3><p>[Add frameworks, web technologies, tools, or platforms you work with.]</p></article>
          <article><span className="skill-number">03</span><h3>Quantum computing</h3><p>[Add tools and topics you are studying, such as Qiskit or quantum algorithms.]</p></article>
          <article><span className="skill-number">04</span><h3>Core CS</h3><p>[Add relevant foundations: algorithms, data structures, databases, systems, etc.]</p></article>
        </div>
      </section>

      <section className="section projects" id="projects">
        <div className="projects__intro"><div className="section-kicker">03 / SELECTED WORK</div><div><p className="overline">PROJECTS & EXPERIMENTS</p><h2>Things I’ve been<br /><em>building.</em></h2></div><p>A selected collection of projects, experiments, and ideas. Replace each placeholder with work you are proud to discuss.</p></div>
        <div className="projects-list">{projects.map((project) => <article className={`project-card ${project.image ? 'project-card--featured' : ''}`} key={project.number}><div className="project-card__top"><span>{project.number}</span><a href="https://github.com/Viruthika-Quantum" target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}><ArrowUpRight /></a></div>{project.image && <img className="project-image" src={project.image} alt={project.imageAlt} />}<h3>{project.title}</h3><p>{project.description}</p><div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="project-links"><a href="https://github.com/Viruthika-Quantum" target="_blank" rel="noreferrer">GitHub profile</a><a href="#contact">[Live demo]</a></div></article>)}</div>
      </section>

      <section className="section quantum" id="quantum">
        <div className="quantum__art"><div className="quantum-grid" /><OrbitMark large /></div>
        <div className="quantum__content"><div className="section-kicker">04 / QUANTUM</div><p className="overline">AN ONGOING EXPLORATION</p><h2>Learning the language of <em>quantum</em> systems.</h2><p>Quantum computing is more than a specialization—it is a field I’m actively exploring through coursework, experiments, and continued study.</p><ul><li><span>01</span> [Quantum topic, algorithm, or concept you are studying]</li><li><span>02</span> [Coursework, simulator, or hands-on experiment]</li><li><span>03</span> [Research interest or next learning goal]</li></ul></div>
      </section>

      <section className="section journey" id="journey">
        <div className="section-kicker">05 / JOURNEY</div><div className="journey__content"><h2>Education &<br /><em>milestones.</em></h2><div className="timeline"><article><span className="timeline-dot" /><div><p className="timeline-date">[START YEAR] — [EXPECTED GRADUATION]</p><h3>B.Tech, Computer Science Engineering</h3><p>Specialization: Quantum Computing & Information Science<br />[University / institution name]</p></div></article><article><span className="timeline-dot timeline-dot--placeholder" /><div><p className="timeline-date">[DATE]</p><h3>[Certification, workshop, achievement, or milestone]</h3><p>[Add only verified details here.]</p></div></article></div></div>
      </section>

      <section className="contact" id="contact"><div className="contact__orb" /><p className="overline">LET’S CONNECT</p><h2>Let’s make something<br /><em>meaningful.</em></h2><p>I’m open to conversations about internships, projects, research, and interesting ideas.</p><a href="mailto:viruthika37877@gmail.com" className="button button--primary">Start a conversation <ArrowUpRight /></a><div className="contact__links" aria-label="Contact links"><a href="https://github.com/Viruthika-Quantum" target="_blank" rel="noreferrer" aria-label="Visit Viruthika’s GitHub profile" title="GitHub"><GitHubIcon /></a><a href="https://www.linkedin.com/in/viruthika-mani" target="_blank" rel="noreferrer" aria-label="Visit Viruthika’s LinkedIn profile" title="LinkedIn"><LinkedInIcon /></a><a href="mailto:viruthika37877@gmail.com" aria-label="Email Viruthika" title="Email"><GmailIcon /></a></div></section>
    </main>
    <footer><a href="#home" className="brand"><OrbitMark /><span>VIRUTHIKA</span></a><p>Designed with curiosity. Built for what’s next.</p><p>© {new Date().getFullYear()} Viruthika</p></footer>
  </>
}

export default App
