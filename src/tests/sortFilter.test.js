import { describe, it, expect } from 'vitest';
import { filterEmployees, sortEmployees } from '../utils/sortFilter';

const employees = [
  { fullName: 'Charlie Brown', gender: 'male', age: 25 },
  { fullName: 'Alice Smith', gender: 'female', age: 40 },
  { fullName: 'Bob Jones', gender: 'male', age: 30 },
];

describe('filterEmployees', () => {
  it('filters by search term (case-insensitive)', () => {
    const result = filterEmployees(employees, { search: 'alice', gender: 'all' });
    expect(result).toHaveLength(1);
    expect(result[0].fullName).toBe('Alice Smith');
  });

  it('filters by gender', () => {
    const result = filterEmployees(employees, { search: '', gender: 'male' });
    expect(result).toHaveLength(2);
  });
});

describe('sortEmployees', () => {
  it('sorts by name ascending', () => {
    const result = sortEmployees(employees, { key: 'fullName', direction: 'asc' });
    expect(result.map((e) => e.fullName)).toEqual(['Alice Smith', 'Bob Jones', 'Charlie Brown']);
  });

  it('sorts by age descending', () => {
    const result = sortEmployees(employees, { key: 'age', direction: 'desc' });
    expect(result.map((e) => e.age)).toEqual([40, 30, 25]);
  });
});