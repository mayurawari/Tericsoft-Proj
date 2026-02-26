
export const Error = ({ error }) => {
  return (
    <div className="text-center py-10">
      <p className="text-red-500 font-medium text-lg">⚠ {error}</p>
    </div>
  );
};
