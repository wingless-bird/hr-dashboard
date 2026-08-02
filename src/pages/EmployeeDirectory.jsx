import { useState } from 'react';
import { useEmployeeContext } from '../hooks/useEmployeeContext';
import { useDebounce } from '../hooks/useDebounce';
import { usePagination } from '../hooks/usePagination';
import { filterEmployees, sortEmployees } from '../utils/sortFilter';
import EmployeeTable from '../components/employee/EmployeeTable';
import SearchBar from '../components/employee/SearchBar';
import GenderFilter from '../components/employee/GenderFilter';
import SortControl from '../components/employee/SortControl';
import Pagination from '../components/common/Pagination';
import EmptyState from '../components/common/EmptyState';
import ErrorState from '../components/common/ErrorState';

export default function EmployeeDirectory() {
  const { employees, loading, error, refetch } = useEmployeeContext();
  const [search, setSearch] = useState('');
  const [gender, setGender] = useState('all');
  const [sort, setSort] = useState({ key: 'fullName', direction: 'asc' });
  const debouncedSearch = useDebounce(search);

  const filtered = filterEmployees(employees, { search: debouncedSearch, gender });
  const sorted = sortEmployees(filtered, sort);
  const { page, setPage, totalPages, pageItems } = usePagination(sorted, 10);

  if (error) return <ErrorState message={error} onRetry={refetch} />;

  return (
    <div>
      <h1 className="text-2xl font-extrabold mb-1">Employee Directory</h1>
      <p className="text-sm text-gray-400 mb-6">{sorted.length} employees found</p>

      <div className="flex flex-wrap items-center gap-3 mb-4">
        <SearchBar value={search} onChange={setSearch} />
        <GenderFilter value={gender} onChange={setGender} />
        <SortControl sort={sort} onChange={setSort} />
      </div>

      {!loading && sorted.length === 0 ? (
        <EmptyState />
      ) : (
        <>
          <EmployeeTable employees={pageItems} loading={loading} />
          <Pagination page={page} totalPages={totalPages} onChange={setPage} />
        </>
      )}
    </div>
  );
}