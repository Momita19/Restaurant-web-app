import { useState } from 'react';
import styles from './SearchBar.module.css';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    console.log(`Search query: ${query}`);
    // Perform search logic here
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={handleQueryChange}
        className={styles.input}
      />
      <button onClick={handleSearch} className={styles.button}>Add</button>
    </div>
  );
};

export default SearchBar;
