import { useContext } from 'react';
import { EmployeeContext } from '../context/EmployeeContext';

export function useEmployeeContext() {
  const ctx = useContext(EmployeeContext);
  if (!ctx) throw new Error('useEmployeeContext must be used within EmployeeProvider');
  return ctx;
}