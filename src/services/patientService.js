// src/services/patientService.js
import axios from 'axios';

const API_URL = 'http://localhost:4000';

export const getPatientById = (id) => {
    return axios.get(`${API_URL}/patient/${id}`);
};

export const updatePatient = (id, patientData) => {
    return axios.put(`${API_URL}/patient/${id}`, patientData);
};
