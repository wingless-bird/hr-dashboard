export function computeStats(employees) {
  const total = employees.length;
  const male = employees.filter((e) => e.gender === 'male').length;
  const female = employees.filter((e) => e.gender === 'female').length;
  const countries = new Set(employees.map((e) => e.country)).size;
  const avgAge = total ? Math.round(employees.reduce((s, e) => s + e.age, 0) / total) : 0;
  return { total, male, female, countries, avgAge };
}