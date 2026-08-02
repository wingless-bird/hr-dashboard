// src/components/employee/SortControl.jsx
export default function SortControl({ sort, onChange }) {
  const toggleKey = (key) => {
    if (sort.key === key) {
      onChange({ key, direction: sort.direction === 'asc' ? 'desc' : 'asc' });
    } else {
      onChange({ key, direction: 'asc' });
    }
  };

  const arrow = (key) => (sort.key === key ? (sort.direction === 'asc' ? '↑' : '↓') : '');

  return (
    <div className="flex gap-2 text-xs font-semibold">
      <button onClick={() => toggleKey('fullName')} className="px-3 py-1.5 rounded-full border border-black/10 dark:border-white/10 hover:border-accent">
        Name {arrow('fullName')}
      </button>
      <button onClick={() => toggleKey('age')} className="px-3 py-1.5 rounded-full border border-black/10 dark:border-white/10 hover:border-accent">
        Age {arrow('age')}
      </button>
    </div>
  );
}