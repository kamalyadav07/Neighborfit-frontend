import { useState } from 'react';
import axios from 'axios';

const MatchForm = ({ onResults }) => {
  const [prefs, setPrefs] = useState({
    affordabilityWeight: 1,
    transitWeight: 1,
    proximityWeight: 1,
    lifestyleWeight: 1,
    safetyWeight: 1,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setPrefs({ ...prefs, [e.target.name]: parseFloat(e.target.value) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await axios.post('http://localhost:5000/api/match', prefs);
      onResults(res.data.results);
    } catch (err) {
      setError('Failed to fetch match results.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white text-gray-900 rounded-lg shadow-lg p-6 w-full max-w-md space-y-4">
      <h3 className="text-xl font-semibold text-center">Customize Your Preferences</h3>

      {['affordability', 'transit', 'proximity', 'lifestyle', 'safety'].map((field) => (
        <div key={field} className="flex items-center justify-between gap-4">
          <label className="w-32 capitalize">{field}</label>
          <input
            type="range"
            name={`${field}Weight`}
            min="0"
            max="3"
            step="0.5"
            value={prefs[`${field}Weight`]}
            onChange={handleChange}
            className="w-full accent-blue-600"
          />
          <span>{prefs[`${field}Weight`]}</span>
        </div>
      ))}

      <button
        type="submit"
        className="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-4 rounded transition"
        disabled={loading}
      >
        {loading ? 'Finding...' : 'Find Neighborhoods'}
      </button>

      {error && <p className="text-red-600 text-sm text-center">{error}</p>}
    </form>
  );
};

export default MatchForm;
