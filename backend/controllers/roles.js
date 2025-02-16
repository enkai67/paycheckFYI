import Role from '../models/Role.js';

const getRoles = async (req, res) => {
    try {
        const filters = req.query;
        const roles = await Role.findAll(filters);
        res.json(roles);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

const createRole = async (req, res) => {
    try {
        const newRole = await Role.create(req.body);
        res.status(201).json(newRole);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

export default { getRoles, createRole };
