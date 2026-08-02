import { createContext, useMemo } from 'react';
import { useEmployees } from '../hooks/useEmployees';
import { computeStats } from '../utils/stats';

export const EmployeeContext = createContext(null);

export function EmployeeProvider({ children }) {
  const { data, loading, error, refetch } = useEmployees();
  const stats = useMemo(() => computeStats(data), [data]);

  const value = { employees: data, loading, error, refetch, stats };
  return <EmployeeContext.Provider value={value}>{children}</EmployeeContext.Provider>;
}