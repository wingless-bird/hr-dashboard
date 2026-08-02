export default function Pagination({ page, totalPages, onChange }) {
  if (totalPages <= 1) return null;
  return (
    <div className="flex items-center justify-center gap-2 mt-6">
      <button
        onClick={() => onChange(Math.max(1, page - 1))}
        disabled={page === 1}
        className="px-3 py-1.5 rounded-full text-sm border border-black/10 dark:border-white/10 disabled:opacity-30"
      >
        Prev
      </button>
      <span className="text-sm text-gray-400">
        Page {page} of {totalPages}
      </span>
      <button
        onClick={() => onChange(Math.min(totalPages, page + 1))}
        disabled={page === totalPages}
        className="px-3 py-1.5 rounded-full text-sm border border-black/10 dark:border-white/10 disabled:opacity-30"
      >
        Next
      </button>
    </div>
  );
}