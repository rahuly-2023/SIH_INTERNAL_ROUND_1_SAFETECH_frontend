// /components/EditPatientForm.js
import React, { useState } from 'react';

const EditPatientForm = ({ patient, onSave }) => {
  const [formData, setFormData] = useState({ ...patient });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Patient Details</h2>
      <label>
        Doctor Name:
        <input
          type="text"
          name="doctorName"
          value={formData.doctorName}
          onChange={handleChange}
        />
      </label>
      <label>
        Doctor Email:
        <input
          type="email"
          name="doctorEmail"
          value={formData.doctorEmail}
          onChange={handleChange}
        />
      </label>
      <label>
        Patient Email:
        <input
          type="email"
          name="patientEmail"
          value={formData.patientEmail}
          onChange={handleChange}
        />
      </label>
      <label>
        Age:
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
      </label>
      <label>
        Date of Birth:
        <input
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
        />
      </label>
      <label>
        Alcoholic:
        <input
          type="checkbox"
          name="alcoholic"
          checked={formData.alcoholic}
          onChange={(e) => handleChange({ ...e, target: { ...e.target, value: e.target.checked } })}
        />
      </label>
      <label>
        Smokes:
        <input
          type="checkbox"
          name="smokes"
          checked={formData.smokes}
          onChange={(e) => handleChange({ ...e, target: { ...e.target, value: e.target.checked } })}
        />
      </label>
      <label>
        Weight:
        <input
          type="number"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
        />
      </label>
      {/* Add more fields as needed */}
      <button type="submit">Save</button>
    </form>
  );
};

export default EditPatientForm;
