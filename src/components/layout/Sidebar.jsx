import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Dashboard', end: true },
  { to: '/employees', label: 'Employees' },
  { to: '/profile', label: 'Profile' },
];

export default function Sidebar({ open, onClose }) {
  return (
    <aside
      className={`fixed md:static inset-y-0 left-0 z-30 w-64 bg-surface-dark text-white
        transform transition-transform duration-300 ease-in-out
        ${open ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
    >
      <div className="flex items-center gap-2 px-6 py-6">
        <div className="grid grid-cols-2 gap-1 w-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="w-2.5 h-2.5 bg-white rounded-sm" />
          ))}
        </div>
        <div className="leading-tight">
          <p className="font-extrabold text-sm tracking-wide">HR DASH</p>
          <p className="text-[10px] tracking-widest opacity-70">EMPLOYEE MANAGEMENT</p>
        </div>
      </div>

      <nav className="flex flex-col gap-1 px-3">
        {links.map(({ to, label, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            onClick={onClose}
            className={({ isActive }) =>
              `px-4 py-2.5 rounded-full text-sm font-semibold transition-colors
               ${isActive ? 'bg-accent text-white' : 'text-muted hover:bg-surface-dark-alt'}`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}