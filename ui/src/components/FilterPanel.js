import { useState } from 'react';

const FilterPanel = ({ companies, onFilter }) => {
    const [selectedCompany, setSelectedCompany] = useState('');

    const handleChange = (e) => {
        setSelectedCompany(e.target.value);
        onFilter(e.target.value);
    };

    return (
        <div>
            <label>Filter by Company:</label>
            <select value={selectedCompany} onChange={handleChange}>
                <option value="">All</option>
                {companies.map((c, idx) => (
                    <option key={idx} value={c}>
                        {c}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default FilterPanel;
