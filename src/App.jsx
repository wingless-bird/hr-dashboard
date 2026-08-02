import { useEmployees } from './hooks/useEmployees';

export default function App() {
  const { data, loading, error } = useEmployees();

  if (loading) return <div className="p-4">Loading...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {error}</div>;

  return (
    <div className="p-4">
      <p>Loaded {data.length} employees</p>
      <pre className="text-xs">{JSON.stringify(data[0], null, 2)}</pre>
    </div>
  );
}