import { Link } from 'react-router-dom';

export default function EmployeeRow({ employee }) {
  return (
    <Link
      to={`/employees/${employee.id}`}
      className="flex items-center gap-3 px-4 py-3
                 border-b border-black/5 dark:border-white/10
                 hover:bg-gray-50 dark:hover:bg-surface-dark-alt transition-colors"
    >
      <img
        src={employee.picture.thumbnail}
        alt={employee.fullName}
        className="w-10 h-10 rounded-full object-cover shrink-0"
      />
      <div className="min-w-0 flex-1">
        <p className="font-semibold truncate">{employee.fullName}</p>
        <p className="text-xs text-gray-400 truncate">{employee.email}</p>
        <p className="text-xs text-gray-400 truncate sm:hidden">{employee.phone}</p>
      </div>
      <p className="text-sm text-gray-400 hidden sm:block w-32 truncate">{employee.phone}</p>
      <p className="text-sm text-gray-400 hidden lg:block w-24 truncate">{employee.country}</p>
      <span
        className={`text-xs font-bold px-3 py-1 rounded-full shrink-0
          ${employee.gender === 'male' ? 'bg-blue-100 text-blue-700' : 'bg-pink-100 text-pink-700'}`}
      >
        {employee.gender}
      </span>
      <p className="text-sm text-gray-400 hidden sm:block w-8 shrink-0">{employee.age}y</p>
    </Link>
  );
}