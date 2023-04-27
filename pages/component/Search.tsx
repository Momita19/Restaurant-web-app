import React from 'react';
import axios from 'axios';
import { useState, useEffect} from 'react';


interface Restaurant {
  id: string;
  name: string;
  address: string;
}
function Search() {
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState<Restaurant[]>([]);
    
    // function to handle the search term input
    const handleSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.target.value);
    }
    
  // function to fetch the list of suggestions
  const fetchSuggestions = async (searchTerm: string) => {
    const response = await axios.get(`https://api.airtable.com/v0/YOUR_BASE_ID/Restaurants?filterByFormula=SEARCH('${searchTerm}', {Name})`);
    const data = response.data.records.map((record: any) => ({
      id: record.id,
      name: record.fields.Name,
      address: record.fields.Address,
    }));
    setSuggestions(data);
  }
const handleSuggestionSelect = (suggestion: Restaurant) => {
    // do something with the selected suggestion
  }
  return (
    <div>
    <input type="text" value={searchTerm} onChange={handleSearchTermChange} />
    <ul>
      {suggestions.map((suggestion) => (
        <li key={suggestion.id} onClick={() => handleSuggestionSelect(suggestion)}>
          {suggestion.name}, {suggestion.address}
        </li>
      ))}
    </ul>
  </div>
  )
      }

export default Search