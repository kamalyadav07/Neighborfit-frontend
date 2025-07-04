const MatchResults = ({ results }) => {
  if (!results || results.length === 0) return null;

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold text-white-700 mb-4 text-center">
        Top Matching Neighborhoods
      </h2>

      <ul className="space-y-4 max-w-md mx-auto">
        {results.map((n, i) => (
          <li
            key={n.name}
            className="bg-white rounded-lg shadow-md p-4 border border-gray-200 hover:shadow-lg transition-all duration-200"
          >
            <div className="text-lg font-bold text-gray-800">
              {i + 1}. {n.name}
            </div>
            <div className="text-sm text-gray-600">
              Match Score: {n.matchScore}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MatchResults;
