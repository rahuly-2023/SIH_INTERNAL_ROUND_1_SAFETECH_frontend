// /pages/PatientDetail.js
import React from 'react';
import PatientDetails from '../components/Patient/PatientDetails';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const PatientDetailPage = () => {
  return (
    <div>
      <Navbar />
      <PatientDetails />
      <Footer />
    </div>
  );
};

export default PatientDetailPage;
