import React, { useState, useEffect } from "react";
import debounce from "lodash.debounce";

interface DebouncedSearchInputProps {
  onSearch: (searchTerm: string) => void;
}

const DebouncedSearchInput: React.FC<DebouncedSearchInputProps> = ({
  onSearch,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Create a debounced version of the onSearch function
  const debouncedSearch = debounce((term: string) => {
    onSearch(term);
  }, 1000); // Adjust the delay as needed (300ms here)

  // Effect to call the debounced function when searchTerm changes
  useEffect(() => {
    debouncedSearch(searchTerm);

    // Cleanup the debounced function on component unmount
    return () => {
      debouncedSearch.cancel();
    };
  }, [searchTerm, debouncedSearch]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <input
      type="text"
      value={searchTerm}
      onChange={handleChange}
      placeholder="Search..."
    />
  );
};

export default DebouncedSearchInput;
