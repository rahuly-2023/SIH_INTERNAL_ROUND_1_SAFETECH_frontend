// /pages/EditPatient.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPatientById, updatePatient } from '../services/patientService';
import EditPatientForm from '../components/EditPatientForm/EditPatientForm';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const EditPatient = () => {
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

  const handleSave = async (updatedPatient) => {
    try {
      await updatePatient(id, updatedPatient);
      navigate(`/patient/${id}`);
    } catch (err) {
      setError('Error updating patient details');
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
        <Navbar />
      {patient ? (
        <EditPatientForm patient={patient} onSave={handleSave} />
      ) : (
        <div>Loading...</div>
      )}
      <Footer />
    </div>
  );
};

export default EditPatient;
