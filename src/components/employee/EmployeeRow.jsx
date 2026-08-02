import { Link } from 'react-router-dom';

export default function EmployeeRow({ employee }) {
  return (
    <Link
      to={`/employees/${employee.id}`}
      className="grid grid-cols-[auto_1fr_1fr_auto_auto] items-center gap-4 px-4 py-3
                 border-b border-black/5 dark:border-white/10
                 hover:bg-gray-50 dark:hover:bg-surface-dark-alt transition-colors"
    >
      <img
        src={employee.picture.thumbnail}
        alt={employee.fullName}
        className="w-10 h-10 rounded-full object-cover"
      />
      <div className="min-w-0">
        <p className="font-semibold truncate">{employee.fullName}</p>
        <p className="text-xs text-gray-400 truncate">{employee.email}</p>
      </div>
      <p className="text-sm text-gray-400 hidden md:block">{employee.country}</p>
      <span
        className={`text-xs font-bold px-3 py-1 rounded-full w-fit
          ${employee.gender === 'male' ? 'bg-blue-100 text-blue-700' : 'bg-pink-100 text-pink-700'}`}
      >
        {employee.gender}
      </span>
      <p className="text-sm text-gray-400 hidden sm:block">{employee.age}y</p>
    </Link>
  );
}