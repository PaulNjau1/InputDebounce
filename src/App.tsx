import React, { useState } from 'react';
import DebouncedSearchInput from './components/DebouncedSearchInput';


const App: React.FC = () => {
    const [results, setResults] = useState<string[]>([]);

    const handleSearch = (searchTerm: string) => {
        // Mock API call or search logic
        console.log(`Searching for: ${searchTerm}`);
        // Example: fetch search results from an API and set them to state
        // fetchResults(searchTerm).then(data => setResults(data));
    };

    return (
        <div>
            <h1>Search</h1>
            <DebouncedSearchInput onSearch={handleSearch} />
            <ul>
                {results.map((result, index) => (
                    <li key={index}>{result}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;
