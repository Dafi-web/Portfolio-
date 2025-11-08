import { useEffect, useMemo, useState } from "react";
import "./App.css";

const projects = [
  {
    title: "dafitech.org",
    description:
      "A technology-focused platform built for community impact, showcasing services and initiatives with a performant, accessible user experience.",
    stack: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://dafitech.org",
    codeUrl: "https://github.com/Dafi-web",
    linkLabel: "Visit site",
  },
  {
    title: "abunearegawi.nl",
    description:
      "Developed a modern web presence for a community organization, combining intuitive navigation, localized content, and secure integrations.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://abunearegawi.nl",
    codeUrl: "https://github.com/Dafi-web",
    linkLabel: "Visit site",
  },
  {
    title: "Open Source @ Dafi-web",
    description:
      "A collection of repositories exploring modern web architectures, component systems, and automation pipelines. Continuous experimentation keeps my toolkit fresh.",
    stack: ["Full MERN", "CI/CD", "Design Systems"],
    codeUrl: "https://github.com/Dafi-web",
    linkLabel: "Explore repos",
  },
];

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showToTop, setShowToTop] = useState(false);

  const currentYear = useMemo(() => new Date().getFullYear(), []);

  useEffect(() => {
    const handleScroll = () => {
      setShowToTop(window.scrollY > 400);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const handleNavToggle = () => setMenuOpen((prev) => !prev);
  const handleScrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <header className="site-header">
        <div className="site-header__inner">
          <a href="#hero" className="site-logo" onClick={closeMenu}>
            Dawit<span>.</span>
          </a>
          <nav className="site-nav" aria-label="Primary navigation">
            <button
              className="site-nav__toggle"
              aria-expanded={menuOpen}
              aria-controls="primary-menu"
              onClick={handleNavToggle}
              type="button"
            >
              <span className="sr-only">Toggle navigation</span>
              <span />
              <span />
              <span />
            </button>
            <ul
              className="site-nav__list"
              id="primary-menu"
              data-open={menuOpen ? "true" : "false"}
            >
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={closeMenu}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section id="hero" className="hero" aria-label="Introduction">
          <div className="hero__content">
            <p className="hero__eyebrow">Full-Stack MERN Developer</p>
            <h1 className="hero__title">
              Dawit Abrha <span>Weldegebriel</span>
            </h1>
            <p className="hero__subtitle">
              Electrical and Computer Engineer crafting modern web experiences with the MERN stack.
            </p>
            <div className="hero__actions">
              <a className="btn btn--primary" href="#projects">
                View Projects
              </a>
              <a
                className="btn btn--ghost"
                href="https://github.com/Dafi-web"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
          <aside className="hero__side">
            <figure className="hero__portrait">
              <img
                src="/dawit-abrha-weldegebriel.jpg"
                alt="Dawit Abrha Weldegebriel smiling in the sunlight"
              />
            </figure>
            <div className="hero__stats" aria-label="Highlights">
              <div className="stat">
                <span className="stat__value">5+</span>
                <span className="stat__label">MERN projects delivered</span>
              </div>
              <div className="stat">
                <span className="stat__value">
                  Electrical &amp;
                  <br />
                  Computer Engineering
                </span>
                <span className="stat__label">Academic foundation</span>
              </div>
              <div className="stat">
                <span className="stat__value">Collaborative</span>
                <span className="stat__label">Working with cross-functional teams</span>
              </div>
            </div>
          </aside>
        </section>

        <section id="about" className="section section--light">
          <div className="section__inner">
            <div className="section__header">
              <h2>About</h2>
              <p>
                I translate complex ideas into reliable digital products. With a strong grounding in
                Electrical and Computer Engineering, I bring systems-level thinking to full-stack web
                development, building solutions that are robust, scalable, and user-centered.
              </p>
            </div>
            <div className="about__grid">
              <div className="about__card">
                <h3>Who I Am</h3>
                <p>
                  I am a builder at heart—equally at home architecting APIs, crafting responsive interfaces,
                  and solving infrastructure challenges. Curiosity keeps me exploring new technologies while
                  discipline ensures every project ships with quality.
                </p>
              </div>
              <div className="about__card">
                <h3>What I Value</h3>
                <ul>
                  <li>
                    <strong>End-to-end ownership:</strong> Seeing products through from concept to launch.
                  </li>
                  <li>
                    <strong>Continuous learning:</strong> Staying ahead with modern JavaScript, DevOps, and
                    design trends.
                  </li>
                  <li>
                    <strong>Impact:</strong> Building tools that matter for communities and organizations.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="section">
          <div className="section__inner">
            <div className="section__header">
              <h2>Education</h2>
              <p>Engineering foundations combined with modern software craftsmanship.</p>
            </div>
            <div className="timeline">
              <article className="timeline__item">
                <div className="timeline__marker" />
                <div className="timeline__content">
                  <h3>Master of Science, Electrical and Computer Engineering</h3>
                  <p className="timeline__institution">Addis Ababa Science and Technology University</p>
                  <p>
                    Advanced coursework and research blending intelligent systems, embedded solutions, and
                    software engineering to solve real-world challenges.
                  </p>
                </div>
              </article>
              <article className="timeline__item">
                <div className="timeline__marker" />
                <div className="timeline__content">
                  <h3>Bachelor of Science, Electrical and Computer Engineering</h3>
                  <p className="timeline__institution">Mettu University, Ethiopia</p>
                  <p>
                    Built a strong engineering foundation, combining hardware knowledge with software
                    principles. Led collaborative academic projects emphasizing practical innovation.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="skills" className="section section--light">
          <div className="section__inner">
            <div className="section__header">
              <h2>Skills</h2>
              <p>The tools and practices I rely on to deliver production-ready solutions.</p>
            </div>
            <div className="skills__grid">
              <div className="skills__group">
                <h3>Frontend</h3>
                <ul>
                  <li>React.js &amp; Next.js</li>
                  <li>TypeScript &amp; JavaScript (ES6+)</li>
                  <li>Tailwind CSS, Styled Components</li>
                  <li>Responsive UI Design</li>
                </ul>
              </div>
              <div className="skills__group">
                <h3>Backend</h3>
                <ul>
                  <li>Node.js &amp; Express</li>
                  <li>RESTful API Design</li>
                  <li>MongoDB &amp; Mongoose</li>
                  <li>Authentication &amp; Authorization</li>
                </ul>
              </div>
              <div className="skills__group">
                <h3>DevOps &amp; Tools</h3>
                <ul>
                  <li>Git &amp; GitHub Actions</li>
                  <li>Docker &amp; Deployment Pipelines</li>
                  <li>Cloud Hosting (Vercel, Netlify, Render)</li>
                  <li>Agile &amp; Scrum Collaboration</li>
                </ul>
              </div>
              <div className="skills__group">
                <h3>Soft Skills</h3>
                <ul>
                  <li>Systems Thinking</li>
                  <li>Technical Communication</li>
                  <li>Mentorship &amp; Team Leadership</li>
                  <li>Problem Solving</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section__inner">
            <div className="section__header">
              <h2>Featured Projects</h2>
              <p>A snapshot of the products I've delivered for organizations and communities.</p>
            </div>
            <div className="projects__grid">
              {projects.map((project) => (
                <article className="project-card" key={project.title}>
                  <div className="project-card__body">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <ul className="project-card__stack">
                      {project.stack.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <footer className="project-card__footer">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn--link"
                      >
                        {project.linkLabel}
                      </a>
                    ) : null}
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--ghost"
                    >
                      {project.liveUrl ? "Code" : "GitHub"}
                    </a>
                  </footer>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="site-footer">
        <div className="site-footer__inner">
          <div className="site-footer__intro">
            <h2>Let's Build Something Great</h2>
            <p>
              I'm always open to collaborating on impactful projects, mentoring developers, or
              brainstorming new ideas.
            </p>
          </div>
          <div className="site-footer__actions">
            <a className="btn btn--primary" href="mailto:dawitabrha.dev@gmail.com">
              Email Me
            </a>
            <a
              className="btn btn--ghost"
              href="https://github.com/Dafi-web"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
          <div className="site-footer__meta">
            <span>MERN developer based in Ethiopia</span>
            <span>&copy; {currentYear} Dawit Abrha Weldegebriel</span>
          </div>
        </div>
        <button
          className={`to-top ${showToTop ? "to-top--visible" : ""}`}
          type="button"
          aria-label="Back to top"
          onClick={handleScrollTop}
        >
          ↑
        </button>
      </footer>
    </>
  );
}


