import EmployeeRow from './EmployeeRow';
import Skeleton from '../common/Skeleton';

export default function EmployeeTable({ employees, loading }) {
  if (loading) {
    return (
      <div className="space-y-2">
        {Array.from({ length: 8 }).map((_, i) => (
          <Skeleton key={i} className="h-14 w-full" />
        ))}
      </div>
    );
  }

  return (
    <div className="rounded shadow-sm overflow-hidden bg-white dark:bg-surface-dark-alt">
      {employees.map((emp) => (
        <EmployeeRow key={emp.id} employee={emp} />
      ))}
    </div>
  );
}