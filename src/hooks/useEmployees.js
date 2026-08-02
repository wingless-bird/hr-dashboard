import { useEffect, useState, useCallback } from 'react';
import { fetchEmployees } from '../api/randomUserApi';

export function useEmployees() {
  const [state, setState] = useState({ data: [], loading: true, error: null });

  const load = useCallback(async () => {
    setState((s) => ({ ...s, loading: true, error: null }));
    try {
      const data = await fetchEmployees(50);
      setState({ data, loading: false, error: null });
    } catch (err) {
      setState({ data: [], loading: false, error: err.message || 'Failed to load' });
    }
  }, []);

  useEffect(() => { load(); }, [load]);

  return { ...state, refetch: load };
}