import { useEffect, useState } from 'react'
import {
  profile,
  skills,
  experience,
  certifications,
  education,
  sections,
} from './data/portfolio'
import Rail from './components/Rail'
import NavLinks from './components/NavLinks'
import Projects from './components/Projects'
import './App.css'

function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const visible = new Map()
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => visible.set(e.target.id, e.isIntersecting))
        const first = ids.find((id) => visible.get(id))
        if (first) setActive(first)
      },
      { rootMargin: '-20% 0px -60% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [ids])

  return active
}

const sectionIds = sections.map((s) => s.id)

function App() {
  const active = useActiveSection(sectionIds)

  return (
    <div className="shell">
      <div className="topbar">
        <NavLinks active={active} />
      </div>

      <Rail active={active} />

      <main className="main">
        <section id="about" className="section hero">
          <p className="hero-headline">{profile.headline}</p>
          <p className="hero-about">{profile.about}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              View projects
            </a>
            <a className="btn" href={profile.cv} download>
              Download PDF portfolio
            </a>
          </div>
        </section>

        <section id="projects" className="section">
          <h2>Projects</h2>
          <p className="section-note">
            Six projects across web, mobile and machine learning. Select a row to open its details.
          </p>
          <Projects />
        </section>

        <section id="skills" className="section">
          <h2>Skills</h2>
          <dl className="skills">
            {skills.map((g) => (
              <div key={g.group} className="skills-group">
                <dt>{g.group}</dt>
                <dd>
                  <ul className="chips">
                    {g.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="experience" className="section">
          <h2>Experience and leadership</h2>
          <ul className="timeline">
            {experience.map((e) => (
              <li key={e.title + e.period}>
                <p className="timeline-period">{e.period}</p>
                <div>
                  <h3>{e.title}</h3>
                  <p className="timeline-org">{e.org}</p>
                  <p>{e.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section id="education" className="section">
          <h2>Education and certifications</h2>
          <div className="edu">
            <p className="edu-period">{education.period}</p>
            <div>
              <h3>{education.degree}</h3>
              <p className="timeline-org">{education.school}</p>
              <p>{education.gpa}</p>
            </div>
          </div>
          <h3 className="sub">Certifications</h3>
          <ul className="certs">
            {certifications.map((c) => (
              <li key={c.title}>
                <p className="certs-title">{c.title}</p>
                <p className="certs-meta">
                  {c.issuer}, {c.date}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section id="contact" className="section contact">
          <h2>Let&rsquo;s work together</h2>
          <p className="section-note">
            See my code and projects on GitHub, or reach me directly by email or phone.
          </p>
          <ul className="contact-list">
            <li>
              <span>Email</span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <span>Phone</span>
              <a href={profile.phoneHref}>{profile.phone}</a>
            </li>
            <li>
              <span>GitHub</span>
              <a href={profile.github.href} target="_blank" rel="noreferrer">
                {profile.github.label}
              </a>
            </li>
            <li>
              <span>LinkedIn</span>
              <a href={profile.linkedin.href} target="_blank" rel="noreferrer">
                {profile.linkedin.label}
              </a>
            </li>
          </ul>
          <p className="footer">
            &copy; 2026 {profile.name}
          </p>
        </section>
      </main>
    </div>
  )
}

export default App
