import React, { useState } from 'react';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    fetchSuggestions(e.target.value);
  };

  const fetchSuggestions = async (searchTerm: string) => {
    try {
      const response = await fetch(`https://api.example.com/suggestions?search=${searchTerm}`);
      const data = await response.json();
      setSuggestions(data);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  };

  return (
    <div className="container">
      <h1>Автозаполнение фраз</h1>
      <input type="text" value={searchTerm} onChange={handleInputChange} />
      <ul>
        {suggestions.map((suggestion, index) => (
          <li key={index}>{suggestion}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
