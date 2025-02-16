// src/components/CompanyComparison.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

const CompanyComparison = () => {
    const [companies, setCompanies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const response = await axios.get('http://localhost:5001/api/companies');
                console.log(response);
                setCompanies(response.data);
            } catch (error) {
                console.error('Error fetching companies:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCompanies();
    }, []);

    const filteredCompanies = companies.filter(
        (company) =>
            company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            company.roles.some((role) => role.title.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div>
            <h2>Compare Companies</h2>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

            {/* Loading Indicator */}
            {loading ? (
                <p>Loading data, please wait...</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Company</th>
                            <th>Role</th>
                            <th>Base Salary</th>
                            <th>Bonus</th>
                            <th>Stock</th>
                            <th>Total Compensation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredCompanies.length > 0 ? (
                            filteredCompanies.map((company) =>
                                company.roles.map((role) => (
                                    <tr key={`${company.name}-${role.title}`}>
                                        <td>{company.name}</td>
                                        <td>{role.title}</td>
                                        <td>${role.base.toLocaleString()}</td>
                                        <td>${role.bonus.toLocaleString()}</td>
                                        <td>${role.stock.toLocaleString()}</td>
                                        <td>${(role.base + role.bonus + role.stock).toLocaleString()}</td>
                                    </tr>
                                ))
                            )
                        ) : (
                            <tr>
                                <td colSpan="6">No results found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default CompanyComparison;
