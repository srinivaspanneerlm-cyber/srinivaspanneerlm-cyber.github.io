import { profile, about, skills, languages, projects, experience, education, achievements, certifications } from './data.js'
import profileImg from './assets/sri.jpeg'
import './App.css'

const SectionTitle = ({ children }) => (
  <div className="section-title">
    <span className="section-badge">{children}</span>
  </div>
)

const SkillPill = ({ label }) => <span className="pill">{label}</span>

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.15c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.02 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.66.41.35.77 1.05.77 2.12v3.14c0 .3.21.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45z" />
  </svg>
)

function Navbar() {
  const links = ['About', 'Skills', 'Projects', 'Experience', 'Education', 'Certifications']
  return (
    <nav className="navbar">
      <a className="brand" href="#home">
        <span className="brand-mark">SN</span>
        <span className="brand-name">{profile.name.split(' ')[0]}</span>
      </a>
      <div className="nav-links">
        {links.map((l) => (
          <a key={l} href={`#${l.toLowerCase()}`}>
            {l}
          </a>
        ))}
        <a className="nav-cta" href="#contact">
          Contact
        </a>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <header id="home" className="hero">
      <div className="hero-inner">
        <div className="hero-photo-wrap">
          <img className="hero-photo" src={profileImg} alt={profile.name} />
        </div>
        <p className="hero-hello">Hi, I&apos;m</p>
        <h1 className="hero-name">{profile.name}</h1>
        <p className="hero-title">{profile.title}</p>
        <p className="hero-tagline">{profile.tagline}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#projects">
            View My Work
          </a>
          <a className="btn btn-ghost" href={`mailto:${profile.email}`}>
            Get in Touch
          </a>
          <a className="btn btn-ghost" href={profile.resume} download>
            Download Resume
          </a>
        </div>
        <div className="hero-socials">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <GitHubIcon />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
        </div>
        <div className="hero-meta">
          <span>{profile.location}</span>
          <span className="dot">·</span>
          <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
        </div>
      </div>
    </header>
  )
}

function About() {
  return (
    <section id="about" className="section">
      <SectionTitle>About</SectionTitle>
      <div className="about-grid">
        <div>
          {about.slice(0, 2).map((p, i) => (
            <p key={i} className="lead">
              {p}
            </p>
          ))}
          {about.slice(2).map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="languages-card">
          <h3>Languages</h3>
          {languages.map((l) => (
            <div key={l.name} className="lang-row">
              <span>{l.name}</span>
              <span className="muted">{l.level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="section">
      <SectionTitle>Skills</SectionTitle>
      <div className="skills-grid">
        {skills.map((group) => (
          <div key={group.category} className="skill-card">
            <h3>{group.category}</h3>
            <div className="pill-row">
              {group.items.map((item) => (
                <SkillPill key={item} label={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="section">
      <SectionTitle>Projects</SectionTitle>
      <div className="projects-list">
        {projects.map((project) => (
          <article key={project.name} className="project-card">
            <div className="project-head">
              <h3>{project.name}</h3>
              {project.link && (
                <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
                  <GitHubIcon />
                  <span>View Repo</span>
                </a>
              )}
            </div>
            <p className="project-sub">{project.subtitle}</p>
            <div className="pill-row">
              {project.tech.map((t) => (
                <SkillPill key={t} label={t} />
              ))}
            </div>
            <ul className="project-points">
              {project.points.map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="section">
      <SectionTitle>Experience</SectionTitle>
      <div className="timeline">
        {experience.map((job) => (
          <article key={`${job.role}-${job.company}`} className="timeline-item">
            <h3>{job.role}</h3>
            <p className="project-sub">{job.company}</p>
            <ul className="project-points">
              {job.points.map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

function Education() {
  return (
    <section id="education" className="section">
      <SectionTitle>Education</SectionTitle>
      <div className="edu-list">
        {education.map((edu) => (
          <article key={edu.school} className="edu-card">
            <h3>{edu.school}</h3>
            <p className="project-sub">{edu.degree}</p>
            <p className="muted">{edu.detail}</p>
            {edu.extras && (
              <ul className="project-points">
                {edu.extras.map((e, i) => (
                  <li key={i}>{e}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
        <div className="edu-card">
          <h3>Achievements</h3>
          <ul className="project-points">
            {achievements.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function Certifications() {
  return (
    <section id="certifications" className="section">
      <SectionTitle>Certifications</SectionTitle>
      <div className="cert-grid">
        {certifications.map((cert) => (
          <article key={cert.name} className="cert-card">
            <h3>{cert.name}</h3>
            <p className="project-sub">{cert.issuer}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="section contact">
      <SectionTitle>Contact</SectionTitle>
      <h2 className="contact-heading">Let&apos;s build something great together.</h2>
      <p className="contact-sub">Open to internships, collaborations, and new opportunities.</p>
      <div className="contact-actions">
        <a className="btn btn-primary" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <a className="btn btn-ghost" href={`tel:${profile.phone.replace(/\s/g, '')}`}>
          {profile.phone}
        </a>
      </div>
      <div className="hero-socials">
        <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
          <GitHubIcon />
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <LinkedInIcon />
        </a>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} {profile.name} · {profile.location}
      </p>
    </footer>
  )
}

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
