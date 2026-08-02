// src/components/employee/SearchBar.jsx
export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search by name…"
      className="w-full sm:w-64 px-4 py-2 rounded-full border border-black/10 dark:border-white/10
                 bg-transparent text-sm focus:outline-none focus:border-accent transition-colors"
    />
  );
}