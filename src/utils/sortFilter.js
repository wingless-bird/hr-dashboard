export function filterEmployees(employees, { search = '', gender = 'all' }) {
  return employees.filter((e) => {
    const matchesSearch = e.fullName.toLowerCase().includes(search.toLowerCase());
    const matchesGender = gender === 'all' || e.gender === gender;
    return matchesSearch && matchesGender;
  });
}

export function sortEmployees(employees, { key = 'fullName', direction = 'asc' }) {
  const sorted = [...employees].sort((a, b) => {
    if (typeof a[key] === 'string') return a[key].localeCompare(b[key]);
    return a[key] - b[key];
  });
  return direction === 'asc' ? sorted : sorted.reverse();
}