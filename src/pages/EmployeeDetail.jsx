import { useParams, Link } from 'react-router-dom';
import { useEmployeeContext } from '../hooks/useEmployeeContext';
import Skeleton from '../components/common/Skeleton';

export default function EmployeeDetail() {
  const { id } = useParams();
  const { employees, loading } = useEmployeeContext();

  if (loading) {
    return (
      <div className="space-y-3 max-w-md">
        <Skeleton className="h-32 w-32 rounded-full" />
        <Skeleton className="h-6 w-48" />
        <Skeleton className="h-4 w-64" />
      </div>
    );
  }

  const employee = employees.find((e) => e.id === id);

  if (!employee) {
    return (
      <div className="text-center py-16">
        <p className="text-lg font-semibold mb-2">Employee not found</p>
        <Link to="/employees" className="text-accent font-semibold underline">
          Back to directory
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-lg">
      <Link to="/employees" className="text-xs text-gray-400 hover:text-accent mb-4 inline-block">
        ← Back to directory
      </Link>

      <div className="flex items-center gap-4 mb-6">
        <img
          src={employee.picture.large}
          alt={employee.fullName}
          className="w-24 h-24 rounded-full object-cover"
        />
        <div>
          <h1 className="text-2xl font-extrabold">{employee.fullName}</h1>
          <span
            className={`text-xs font-bold px-3 py-1 rounded-full inline-block mt-1
              ${employee.gender === 'male' ? 'bg-blue-100 text-blue-700' : 'bg-pink-100 text-pink-700'}`}
          >
            {employee.gender}
          </span>
        </div>
      </div>

      <dl className="grid grid-cols-[100px_1fr] gap-y-3 text-sm bg-white dark:bg-surface-dark-alt rounded p-5 shadow-sm">
        <dt className="text-gray-400 font-semibold">Email</dt>
        <dd>{employee.email}</dd>
        <dt className="text-gray-400 font-semibold">Phone</dt>
        <dd>{employee.phone}</dd>
        <dt className="text-gray-400 font-semibold">Country</dt>
        <dd>{employee.country}</dd>
        <dt className="text-gray-400 font-semibold">Age</dt>
        <dd>{employee.age}</dd>
        <dt className="text-gray-400 font-semibold">Registered</dt>
        <dd>{new Date(employee.registeredDate).toLocaleDateString()}</dd>
      </dl>
    </div>
  );
}