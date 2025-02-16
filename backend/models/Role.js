import pool from '../config/db.js';

class Role {
    static async findAll(filters = {}) {
        const { company, location } = filters;
        let query = 'SELECT * FROM roles';
        const conditions = [];
        const values = [];

        if (company) {
            conditions.push(`company_id = $${values.length + 1}`);
            values.push(company);
        }
        if (location) {
            conditions.push(`location = $${values.length + 1}`);
            values.push(location);
        }

        if (conditions.length > 0) {
            query += ' WHERE ' + conditions.join(' AND ');
        }

        const { rows } = await pool.query(query, values);
        return rows;
    }

    static async create(roleData) {
        const { companyId, title, level, baseSalary, bonus, stock, location } = roleData;
        const query = `
      INSERT INTO roles (company_id, title, level, base_salary, bonus, stock, location)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *;
    `;
        const values = [companyId, title, level, baseSalary, bonus, stock, location];
        const { rows } = await pool.query(query, values);
        return rows[0];
    }
}

export default Role;
