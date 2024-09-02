// src/services/patientService.js
import axios from 'axios';

const API_URL = 'https://sih-internal-round-1-safetech-backend.onrender.com';

export const getPatientById = (id) => {
    return axios.get(`${API_URL}/patient/${id}`);
};

export const updatePatient = (id, patientData) => {
    return axios.put(`${API_URL}/patient/${id}`, patientData);
};
