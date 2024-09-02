// /components/Patient/PatientDetails.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPatientById } from '../../services/patientService';

const PatientDetails = () => {
  const { id } = useParams();
  const [patient, setPatient] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const response = await getPatientById(id);
        setPatient(response.data);
      } catch (err) {
        setError('Patient not found');
      }
    };

    fetchPatient();
  }, [id]);

  const handleEdit = () => {
    navigate(`/edit-patient/${id}`);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="patient-details-container">
      {patient ? (
        <div className="patient-details">
          <h2>Patient Details</h2>
          <p><strong>Doctor Name:</strong> {patient.doctorName}</p>
          <p><strong>Doctor Email:</strong> {patient.doctorEmail}</p>
          <p><strong>Patient Email:</strong> {patient.patientEmail}</p>
          <p><strong>Age:</strong> {patient.age}</p>
          <p><strong>Date of Birth:</strong> {new Date(patient.dateOfBirth).toLocaleDateString()}</p>
          <p><strong>Alcoholic:</strong> {patient.alcoholic ? 'Yes' : 'No'}</p>
          <p><strong>Smokes:</strong> {patient.smokes ? 'Yes' : 'No'}</p>
          <p><strong>Weight:</strong> {patient.weight} kg</p>
          {/* Add more patient details as needed */}
          <button onClick={handleEdit} className="edit-button">Edit</button>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default PatientDetails;
