import { useState } from 'react'
import { projects } from '../data/portfolio'

function Pipeline({ steps }) {
  return (
    <ol className="pipeline" aria-label="Thesis pipeline">
      {steps.map((step) => (
        <li key={step}>{step}</li>
      ))}
    </ol>
  )
}

function ProjectDetail({ project }) {
  return (
    <div className="detail">
      <dl className="detail-meta">
        <div>
          <dt>Role</dt>
          <dd>{project.role}</dd>
        </div>
        <div>
          <dt>Context</dt>
          <dd>{project.context}</dd>
        </div>
        <div>
          <dt>Period</dt>
          <dd>{project.period}</dd>
        </div>
      </dl>

      <p className="detail-summary">{project.summary}</p>

      {project.pipeline && <Pipeline steps={project.pipeline} />}

      <ul className="detail-points">
        {project.points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>

      {project.images && (
        <div className={`shots shots-${project.images.length}${project.images[0].poster ? ' shots-poster' : ''}`}>
          {project.images.map((img) => (
            <img key={img.src} src={img.src} alt={img.alt} loading="lazy" />
          ))}
        </div>
      )}

      <ul className="chips" aria-label="Tech stack">
        {project.stack.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>

      {project.link && (
        <a className="detail-link" href={project.link.href} target="_blank" rel="noreferrer">
          Visit {project.link.label}
        </a>
      )}
    </div>
  )
}

function Projects() {
  const [openId, setOpenId] = useState(projects[0].id)

  return (
    <ul className="index">
      {projects.map((project) => {
        const open = openId === project.id
        const panelId = `panel-${project.id}`
        return (
          <li key={project.id} className={open ? 'row is-open' : 'row'}>
            <h3 className="row-heading">
              <button
                type="button"
                className="row-button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenId(open ? null : project.id)}
              >
                <span className="row-year">{project.year}</span>
                <span className="row-title">
                  <span className="row-name">{project.title}</span>
                  <span className="row-type">{project.type}</span>
                </span>
                <span className="row-stack">{project.stack.slice(0, 4).join(', ')}</span>
                <span className="row-toggle" aria-hidden="true" />
              </button>
            </h3>
            <div className="panel" id={panelId} inert={!open}>
              <div className="panel-inner">
                <ProjectDetail project={project} />
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default Projects
