import axios from 'axios';
import { API_URL } from '#configs';

export const getRoles = async () => {
    try {
        const response = await axios.get(`${API_URL}/roles`);
        return response.data;
    } catch (error) {
        console.error('Error fetching roles:', error);
        return [];
    }
};

export const getCompanies = async () => {
    try {
        const response = await axios.get(`${API_URL}/companies`);
        return response.data;
    } catch (error) {
        console.error('Error fetching companies:', error);
        return [];
    }
};

export const getSalaries = async () => {
    try {
        const response = await axios.get(`${API_URL}/salaries`);
        return response.data;
    } catch (error) {
        console.error('Error fetching salaries:', error);
        return [];
    }
};

export const getJobs = async (title) => {
    try {
        const response = await axios.get(`${API_URL}/jobs`, {
            params: { title },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching jobs:', error);
        return [];
    }
};

export const postSalaries = async (salaryData) => {
    try {
        const response = await axios.post(`${API_URL}/salaries`, salaryData);
        return response.data;
    } catch (error) {
        console.error('Error submitting salary:', error);
        return null;
    }
};
