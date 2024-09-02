import React from 'react'

// import personal from '../../pics/personal.png';
// import scholarship from '../../pics/scholarship.png' 
import healthcare from '../../pics/healthcare.png'
import invoice from '../../pics/invoice.png'
import doctor from '../../pics/doctor.png'

import './Cards.css'
const Cards = () => {
  return (
    <>
    <div className='cards-section'>
      <div className='cards-title flex items-center'>DashBoard</div>
      <div className='cards'>

        <div class="card card-5">
          <div className=' card-upper flex items-center '>
            <div class="card__icon">
              <img src={healthcare}/> 
            </div> 
            <div className='card-title'>Self Checkup</div>
          </div>
          <div className='card-content'>
          Stay Up to Date with your Health , Check your Health status with few clicks.
          </div>
          <div className='flex justify-end gap-6'>
          {/* <div className="know-more-link"><a href='/Services/HomeLoan'>Know More</a></div> */}
          <div className='card-link'><a href='/SelfCheckup'>Check Now</a></div>
          </div>
        </div>

      <div class="card card-5">
      <div className=' card-upper flex items-center '>
        <div class="card__icon">
          <img src={invoice}/> 
        </div> 
        <div className='card-title'>Invoice</div>
        </div>
        <div className='card-content'>
        NO more documents hassle for medical insurance, Generate your invoices and store in your device.
        </div>
          <div className='flex justify-end gap-6'>
          <div className='card-link'><a href='/invoice'>Generate Invoice</a></div>
          </div>
      </div>

      <div class="card card-5">
      <div className=' card-upper flex items-center '>
        <div class="card__icon">
          <img src={doctor}/> 
        </div> 
        <div className='card-title'>Talk To DoctorAi</div>
        </div>
        <div className='card-content'>
        Your personalised Doctor available 24/7 to help and prescribe you.
        </div>
          <div className='flex justify-end gap-6'>
          <div className='card-link'><a href='#'>Talk Now</a></div>
          </div>
      </div>


      </div>
    </div>
    
    </>
  )
}

export default Cards