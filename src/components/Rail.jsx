import { profile } from '../data/portfolio'
import NavLinks from './NavLinks'

function Rail({ active }) {
  return (
    <aside className="rail">
      <div className="rail-id">
        <img className="rail-photo" src={profile.photo} alt={`Portrait of ${profile.name}`} />
        <h1 className="rail-name">{profile.name}</h1>
        <p className="rail-roles">{profile.roles.join(', ')}</p>
        <p className="rail-school">{profile.school}</p>
      </div>

      <div className="rail-nav">
        <NavLinks active={active} />
      </div>

      <ul className="rail-contact">
        <li>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </li>
        <li>
          <a href={profile.github.href} target="_blank" rel="noreferrer">
            {profile.github.label}
          </a>
        </li>
        <li>
          <a href={profile.linkedin.href} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </li>
      </ul>
    </aside>
  )
}

export default Rail
