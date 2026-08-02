// src/components/employee/GenderFilter.jsx
export default function GenderFilter({ value, onChange }) {
  const options = [
    { value: 'all', label: 'All' },
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
  ];
  return (
    <div className="flex gap-1 bg-gray-100 dark:bg-surface-dark-alt rounded-full p-1">
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => onChange(opt.value)}
          className={`px-3 py-1.5 text-xs font-bold rounded-full transition-colors
            ${value === opt.value ? 'bg-accent text-white' : 'text-gray-500 hover:text-accent'}`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}