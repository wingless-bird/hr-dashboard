import { useTheme } from '../../hooks/useTheme';
import { useEmployeeContext } from '../../hooks/useEmployeeContext';

export default function Topbar({ onMenuClick }) {
  const { dark, toggle } = useTheme();
  const { employees } = useEmployeeContext();
  const currentUser = employees[0];

  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-black/5 dark:border-white/10">
      <button onClick={onMenuClick} className="md:hidden flex flex-col gap-1.5">
        <span className="w-6 h-0.5 bg-current rounded" />
        <span className="w-6 h-0.5 bg-current rounded" />
        <span className="w-6 h-0.5 bg-current rounded" />
      </button>

      <div className="flex items-center gap-4 ml-auto">
        <button
          onClick={toggle}
          className="border-2 border-accent text-accent px-4 py-1.5 rounded-full text-xs font-bold
                     tracking-wide transition-all hover:bg-accent hover:text-white"
        >
          {dark ? 'LIGHT MODE' : 'DARK MODE'}
        </button>
        {currentUser && (
          <img
            src={currentUser.picture.thumbnail}
            alt={currentUser.fullName}
            className="w-9 h-9 rounded-full object-cover"
          />
        )}
      </div>
    </header>
  );
}