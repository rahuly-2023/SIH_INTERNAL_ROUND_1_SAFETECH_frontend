// src/components/dashcontent/dash.js
import React from 'react';
import { Link } from 'react-router-dom';
import healthcare from '../../pics/healthcare.png';
import invoice from '../../pics/invoice.png';

function Dashboard() {
  return (
    <div className="container mx-auto mt-10 h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 h-84">Dashboard</h1>
      <div className="flex justify-center space-x-4">
        {/* Card 1 */}
        <div className="card card-5">
          <div className='card-upper flex items-center'>
            <div className="card__icon">
              <img src={healthcare} alt="HealthCare" />
            </div>
            <div className='card-title'>Patient detail</div>
          </div>
          <div className='card-content'>
            Turn your dream home into a reality today with our affordable and hassle-free home loan solutions!
          </div>
          <div className='flex justify-end gap-6'>
            <div className='card-link'><Link to='/patient/1012'>Check Now</Link></div> {/* Replace 1 with the actual patient ID or logic */}
          </div>
        </div>
        {/* Other cards */}
        {/* ... */}
      </div>
    </div>
  );
}

export default Dashboard;
