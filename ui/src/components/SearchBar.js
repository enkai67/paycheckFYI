import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <input
            type="text"
            placeholder="Search for a company or role..."
            value={searchTerm}
            onChange={handleChange}
            style={{
                padding: '10px',
                width: '100%',
                margin: '20px 0',
                borderRadius: '5px',
                border: '1px solid #ccc'
            }}
        />
    );
};

export default SearchBar;
