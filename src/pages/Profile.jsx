import { useEmployeeContext } from '../hooks/useEmployeeContext';
import Skeleton from '../components/common/Skeleton';

export default function Profile() {
  const { employees, loading } = useEmployeeContext();

  if (loading) {
    return (
      <div className="space-y-3 max-w-md">
        <Skeleton className="h-32 w-32 rounded-full" />
        <Skeleton className="h-6 w-48" />
      </div>
    );
  }

  const me = employees[0];
  if (!me) return null;

  return (
    <div className="max-w-lg">
      <h1 className="text-2xl font-extrabold mb-6">My Profile</h1>

      <div className="flex items-center gap-4 mb-6">
        <img src={me.picture.large} alt={me.fullName} className="w-24 h-24 rounded-full object-cover" />
        <div>
          <h2 className="text-xl font-bold">{me.fullName}</h2>
          <p className="text-sm text-gray-400">{me.email}</p>
        </div>
      </div>

      <dl className="grid grid-cols-[100px_1fr] gap-y-3 text-sm bg-white dark:bg-surface-dark-alt rounded p-5 shadow-sm">
        <dt className="text-gray-400 font-semibold">Phone</dt>
        <dd>{me.phone}</dd>
        <dt className="text-gray-400 font-semibold">Country</dt>
        <dd>{me.country}</dd>
        <dt className="text-gray-400 font-semibold">Age</dt>
        <dd>{me.age}</dd>
        <dt className="text-gray-400 font-semibold">Gender</dt>
        <dd className="capitalize">{me.gender}</dd>
      </dl>
    </div>
  );
}