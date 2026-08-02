export default function ErrorState({ message, onRetry }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <p className="text-lg font-semibold mb-1">Something went wrong</p>
      <p className="text-sm text-gray-400 mb-4">{message}</p>
      <button
        onClick={onRetry}
        className="border-2 border-accent text-accent px-5 py-2 rounded-full text-sm font-bold
                   hover:bg-accent hover:text-white transition-all"
      >
        Try again
      </button>
    </div>
  );
}