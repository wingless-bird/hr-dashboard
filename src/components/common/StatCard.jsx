export default function StatCard({ label, value, accent = false }) {
  return (
    <div
      className={`rounded p-5 shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-transform
        hover:-translate-y-1
        ${accent ? 'bg-accent text-white' : 'bg-white dark:bg-surface-dark-alt'}`}
    >
      <p className={`text-xs font-semibold tracking-widest uppercase ${accent ? 'text-white/80' : 'text-gray-400'}`}>
        {label}
      </p>
      <p className="text-3xl font-extrabold mt-2">{value}</p>
    </div>
  );
}