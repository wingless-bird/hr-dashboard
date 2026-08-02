import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { computeStats } from '../utils/stats';

describe('computeStats', () => {
  it('computes totals, gender counts, and average age', () => {
    const employees = [
      { gender: 'male', age: 30, country: 'US' },
      { gender: 'female', age: 40, country: 'UK' },
      { gender: 'male', age: 50, country: 'US' },
    ];
    expect(computeStats(employees)).toEqual({
      total: 3, male: 2, female: 1, countries: 2, avgAge: 40,
    });
  });

  it('handles an empty array without dividing by zero', () => {
    expect(computeStats([])).toEqual({
      total: 0, male: 0, female: 0, countries: 0, avgAge: 0,
    });
  });
});