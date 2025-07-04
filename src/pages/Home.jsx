import { useState } from 'react';
import MatchForm from '../components/MatchForm';
import MatchResults from '../components/MatchResults';

const Home = () => {
  const [results, setResults] = useState([]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-700 via-pink-600 to-pink-400 text-white px-4 py-10">
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-2 flex items-center gap-2">
        🏙️ NeighborFit for Students
      </h1>
      <MatchForm onResults={setResults} />
      <MatchResults results={results} />
    </div>
  );
};

export default Home;
