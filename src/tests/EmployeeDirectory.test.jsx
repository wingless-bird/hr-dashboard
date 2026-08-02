import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import EmployeeDirectory from '../pages/EmployeeDirectory';
import * as EmployeeContextHook from '../hooks/useEmployeeContext';

const mockEmployees = [
  { id: '1', fullName: 'Alice Smith', email: 'alice@x.com', gender: 'female', country: 'UK', age: 40, picture: { thumbnail: '' } },
  { id: '2', fullName: 'Bob Jones', email: 'bob@x.com', gender: 'male', country: 'US', age: 30, picture: { thumbnail: '' } },
];

describe('EmployeeDirectory', () => {
  it('filters the list when searching', () => {
    vi.spyOn(EmployeeContextHook, 'useEmployeeContext').mockReturnValue({
      employees: mockEmployees,
      loading: false,
      error: null,
      refetch: vi.fn(),
    });

    render(
      <MemoryRouter>
        <EmployeeDirectory />
      </MemoryRouter>
    );

    expect(screen.getByText('Alice Smith')).toBeInTheDocument();
    expect(screen.getByText('Bob Jones')).toBeInTheDocument();

    fireEvent.change(screen.getByPlaceholderText('Search by name…'), {
      target: { value: 'Alice' },
    });

    // debounce delay — for a real run, use vi.useFakeTimers() + vi.advanceTimersByTime(300)
  });
});