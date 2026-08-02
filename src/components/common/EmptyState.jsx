export default function EmptyState({ message = 'No employees match your search.' }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center text-gray-400">
      <p className="text-sm">{message}</p>
    </div>
  );
}