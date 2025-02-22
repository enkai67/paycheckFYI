// import { useEffect, useState } from 'react';
import React from 'react';
// import { getRoles, getCompanies } from '../api/api';
// import FilterPanel from '../components/FilterPanel';
// import RoleCard from '../components/RoleCard';

// const Compare = () => {
//     const [roles, setRoles] = useState([]);
//     const [filteredRoles, setFilteredRoles] = useState([]);
//     const [companies, setCompanies] = useState([]);

//     useEffect(() => {
//         async function fetchData() {
//             const roleData = await getRoles();
//             const companyData = await getCompanies();
//             setRoles(roleData);
//             setFilteredRoles(roleData);
//             setCompanies(companyData);
//         }
//         fetchData();
//     }, []);

//     const handleFilter = (company) => {
//         setFilteredRoles(company ? roles.filter((r) => r.company === company) : roles);
//     };

//     return (
//         <div>
//             <h1>Compare Roles</h1>
//             <FilterPanel companies={companies} onFilter={handleFilter} />
//             <div className="roles-container">
//                 {filteredRoles.map((role, index) => (
//                     <RoleCard key={index} role={role} />
//                 ))}
//             </div>
//         </div>
//     );
// };

import CompanyComparison from '../components/CompanyComparison';

const Compare = () => {
    return (
        <div>
            <h1>Compare Roles</h1>
            <CompanyComparison />
        </div>
    );
};

export default Compare;
