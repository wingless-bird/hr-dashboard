import { useEmployeeContext } from '../hooks/useEmployeeContext';
import StatCard from '../components/common/StatCard';
import Skeleton from '../components/common/Skeleton';
import ErrorState from '../components/common/ErrorState';

export default function DashboardHome() {
  const { stats, loading, error, refetch } = useEmployeeContext();

  if (error) return <ErrorState message={error} onRetry={refetch} />;

  return (
    <div>
      <h1 className="text-2xl font-extrabold mb-1">Dashboard</h1>
      <p className="text-sm text-gray-400 mb-6">Overview of your workforce</p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {loading ? (
          Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-24 rounded animate-shimmer" />
          ))
        ) : (
          <>
            <StatCard label="Total Employees" value={stats.total} accent />
            <StatCard label="Male" value={stats.male} />
            <StatCard label="Female" value={stats.female} />
            <StatCard label="Countries" value={stats.countries} />
            <StatCard label="Average Age" value={stats.avgAge} />
          </>
        )}
      </div>
    </div>
  );
}