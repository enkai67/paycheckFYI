import axios from 'axios';

const api = axios.create({
    baseURL: process.env.API_URL
});

export const testConnection = async () => {
    try {
        const response = await api.get('/test');
        return response.data;
    } catch (error) {
        console.error('Error connecting to the backend:', error);
        return { message: 'Error connecting to backend' };
    }
};
