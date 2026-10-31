import { useMemo, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Terminal,
  Sparkles,
  GraduationCap,
  Send,
  CheckCircle2,
} from "lucide-react";

import Navbar from "./components/Navbar.jsx";
import SectionHeading from "./components/SectionHeading.jsx";
import ProjectCard from "./components/ProjectCard.jsx";

import {
  profile,
  experiences,
  projects,
  skills,
  education,
  languages,
  calculateCompanyExperience,
} from "./data/portfolio.js";

const filters = ["All", "Full Stack", "Backend", "Frontend", "AI / Data"];

function App() {
  const [filter, setFilter] = useState("All");
  const [skillCategory, setSkillCategory] = useState("Backend");

  const shownProjects = useMemo(
    () => projects.filter((p) => filter === "All" || p.category === filter),
    [filter],
  );

  const currentSkills =
    skills.find((s) => s.category === skillCategory) || skills[0];

  const submitContact = (e) => {
    e.preventDefault();

    const f = new FormData(e.currentTarget);
    const subject = encodeURIComponent(f.get("subject"));
    const body = encodeURIComponent(
      `Hi Sunil,\n\n${f.get("message")}\n\nFrom: ${f.get("name")} (${f.get("email")})`,
    );

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <Navbar />

      <main>
        <section className="hero section" id="home">
          <div className="hero-grid container">
            <div className="hero-copy">
              <div className="availability">
                <span className="status-dot" />
                {profile.availability}
              </div>

              <p className="hero-kicker">HELLO, I’M</p>

              <h1>
                {profile.name.split(" ").slice(0, 2).join(" ")}
                <br />
                <span>{profile.name.split(" ").slice(2).join(" ")}</span>
              </h1>

              <div className="role-line">
                <span className="role-bar" />
                {profile.role}
              </div>

              <p className="hero-summary">{profile.summary}</p>

              <div className="hero-actions">
                <a className="button button-primary" href="#projects">
                  Explore my work <ArrowRight size={17} />
                </a>

                <a
                  className="button button-ghost"
                  href={profile.resume}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Download size={17} /> Download resume
                </a>
              </div>

              <div className="social-links">
                <a href={profile.github} target="_blank" rel="noreferrer">
                  <Github size={17} /> GitHub
                </a>

                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin size={17} /> LinkedIn
                </a>

                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                    profile.email,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Email Me
                </a>
              </div>
            </div>
                        <div className="hero-visual">
              <div className="visual-orbit orbit-one" />
              <div className="visual-orbit orbit-two" />

              <div className="hero-portrait">
                <img
                  src="/images/sunilrathodImage.png"
                  alt="Sunil Rathod"
                  className="hero-portrait-image"
                />
              </div>
            </div>
            </div>
            
            <a className="scroll-hint" href="#about">
              <span>SCROLL TO EXPLORE</span>
              <ArrowDown size={15} />
            </a>
        </section>

        <section className="section about-section" id="about">
          <div className="container">
            <SectionHeading
              eyebrow="A LITTLE ABOUT ME"
              title="Building with purpose."
              description="Software engineering is more than writing code. It’s about understanding the problem, designing the right solution, and making it reliable."
            />

            <div className="about-grid">
              <div className="about-panel">
                <div className="about-icon">
                  <BriefcaseBusiness />
                </div>

                <h3>What I do</h3>

                <p>
                  I work across backend development and full-stack application
                  delivery, with a focus on APIs, authentication, database
                  design, performance, and maintainable code.
                </p>

                <p>
                  My experience spans Java/Spring Boot as well as the JavaScript
                  ecosystem, giving me flexibility to work across different
                  application stacks.
                </p>

                <div className="location-line">
                  <MapPin size={16} />
                  {profile.location}
                </div>
              </div>

              <div className="stats-grid">
                {profile.stats.map((s) => (
                  <div className="stat-card" key={s.label}>
                    <strong>{s.value}</strong>
                    <span>{s.label}</span>
                  </div>
                ))}

                <div className="quote-card">
                  <span className="quote-mark">“</span>
                  <p>
                    Stay curious. Keep learning. Build things that solve real
                    problems.
                  </p>
                </div>
              </div>
            </div>

            <div className="education-area">
              <div className="subheading">
                <GraduationCap size={20} />
                <h3>Education</h3>
              </div>

              <div className="education-grid">
                {education.map((e) => (
                  <article className="education-card" key={e.degree}>
                    <span className="timeline-dot" />
                    <span className="period">{e.period}</span>
                    <h4>{e.degree}</h4>
                    <p>{e.institution}</p>
                    <span className="score-pill">{e.score}</span>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section experience-section" id="experience">
          <div className="container">
            <SectionHeading
              eyebrow="MY JOURNEY"
              title="Experience & learning."
              description="A timeline of roles and hands-on experience that have shaped my approach to building software."
            />

            <div className="experience-list">
              {experiences.map((job, i) => (
                <article className="experience-card" key={job.company}>
                  <div className="experience-marker">
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    <i />
                  </div>

                  <div className="experience-content">
                    <div className="experience-heading">
                      <div>
                        <span className="period">{job.period}</span>
                        <h3>{job.role}</h3>
                        <h4>{job.company}</h4>
                        <p className="company-duration">
                          {calculateCompanyExperience(job.period)}
                        </p>
                      </div>

                      <span className="work-type">{job.type}</span>
                    </div>

                    <ul>
                      {job.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>

                    <div className="tag-list">
                      {job.tags.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="container">
            <SectionHeading
              eyebrow="SELECTED WORK"
              title="Projects I’ve worked on."
              description="A selection of projects across backend services, full-stack products, and machine-learning experiments."
            />

            <div
              className="filter-row"
              role="group"
              aria-label="Filter projects"
            >
              {filters.map((f) => (
                <button
                  key={f}
                  className={
                    filter === f ? "filter-button active" : "filter-button"
                  }
                  onClick={() => setFilter(f)}
                >
                  {f}
                  <span>
                    {f === "All"
                      ? projects.length
                      : projects.filter((p) => p.category === f).length}
                  </span>
                </button>
              ))}
            </div>

            <div className="projects-grid">
              {shownProjects.map((p, i) => (
                <ProjectCard key={p.title} project={p} index={i} />
              ))}
            </div>

            <div className="github-banner">
              <div className="github-banner-icon">
                <Github size={25} />
              </div>

              <div>
                <h3>More code on GitHub</h3>
                <p>
                  Explore repositories, experiments, and projects as they
                  evolve.
                </p>
              </div>

              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="button button-ghost"
              >
                Visit GitHub <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="container">
            <SectionHeading
              eyebrow="MY TOOLKIT"
              title="Skills & technologies."
              description="Tools and technologies I use or have explored through work, projects, and continuous learning."
            />

            <div className="skills-layout">
              <div className="skill-tabs">
                {skills.map((s) => (
                  <button
                    key={s.category}
                    className={
                      skillCategory === s.category
                        ? "skill-tab active"
                        : "skill-tab"
                    }
                    onClick={() => setSkillCategory(s.category)}
                  >
                    {s.category}
                    <ArrowUpRight size={15} />
                  </button>
                ))}
              </div>

              <div className="skill-panel">
                <div className="skill-panel-heading">
                  <div>
                    <span className="eyebrow">TECH STACK</span>
                    <h3>{currentSkills.category}</h3>
                  </div>

                  <span className="skill-count">
                    {currentSkills.items.length} technologies
                  </span>
                </div>

                <div className="skill-bars">
                  {currentSkills.items.map(([name, level]) => (
                    <div className="skill-item" key={name}>
                      <div className="skill-label">
                        <span>{name}</span>
                        <span>{level}%</span>
                      </div>

                      <div className="skill-track">
                        <div
                          className="skill-fill"
                          style={{ width: `${level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="languages">
              <span className="eyebrow">LANGUAGES</span>
              <div>
                {languages.map((l) => (
                  <span key={l}>{l}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container">
            <div className="contact-card">
              <div className="contact-copy">
                <span className="eyebrow">LET’S CONNECT</span>

                <h2>
                  Have a good idea?
                  <br />
                  <span>Let’s build it.</span>
                </h2>

                <p>
                  Interested in working together, discussing a project, or
                  sharing an opportunity? Send me a message.
                </p>

                <a className="contact-email" href={`mailto:${profile.email}`}>
                  <Mail size={18} />
                  {profile.email}
                  <ArrowUpRight size={17} />
                </a>

                <div className="contact-socials">
                  <a href={profile.github} target="_blank" rel="noreferrer">
                    <Github size={18} />
                  </a>

                  <a href={profile.linkedin} target="_blank" rel="noreferrer">
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>

              <form className="contact-form" onSubmit={submitContact}>
                <label>
                  Your name
                  <input name="name" placeholder="Enter your name" required />
                </label>

                <label>
                  Email address
                  <input
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                  />
                </label>

                <label>
                  Subject
                  <input
                    name="subject"
                    placeholder="What would you like to discuss?"
                    required
                  />
                </label>

                <label>
                  Message
                  <textarea
                    name="message"
                    placeholder="Tell me a little about it..."
                    rows="4"
                    required
                  />
                </label>

                <button className="button button-primary" type="submit">
                  Send message <Send size={16} />
                </button>

                <p className="form-note">
                  <CheckCircle2 size={14} /> Opens your email app with the
                  message ready to send.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <a className="brand" href="#home">
            <span className="brand-mark">SR</span>
            <span>
              Sunil Rathod<span className="brand-dot">...</span>
            </span>
          </a>

          <p>Designed & built with care · {new Date().getFullYear()}</p>

          <a href="#home" className="back-top">
            Back to top ↑
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
