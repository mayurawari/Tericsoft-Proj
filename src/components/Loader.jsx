
export const Loader = ({ count = 5 }) => {
  return (
    <div className="space-y-6 p-4">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="animate-pulse flex flex-col space-y-2">
          <div className="h-6 bg-gray-300 rounded w-3/4 sm:w-1/2" />
          <div className="h-4 bg-gray-300 rounded w-full" />
          <div className="h-4 bg-gray-300 rounded w-full" />
        </div>
      ))}
    </div>
  )
}
