import { sections } from '../data/portfolio'

function NavLinks({ active }) {
  return (
    <nav className="nav" aria-label="Sections">
      <ul>
        {sections.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className={active === s.id ? 'is-active' : undefined}
              aria-current={active === s.id ? 'true' : undefined}
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavLinks
