import React, { useState } from 'react'
import './HealthForm.css'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Description, Dialog, DialogPanel, DialogTitle,DialogBackdrop } from '@headlessui/react'
import ApplySuccess from '../ApplySuccess/ApplySuccess';
import Heart from '../Heart/Heart';
import HeartBeat from '../HeartBeat/HeartBeat';
import { Chart } from "react-google-charts";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Form = () => {
    const [FirstName, setFirstName] = useState(0)
    const [LastName, setLastName] = useState(0)
    const [Email, setEmail] = useState(0)
    const [PhoneNo, setPhoneNo] = useState(0)
    const [age, setAge] = useState()
    const [date, setDate] = useState()
    const [time, setTime] = useState(0)
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate();
    const backToHomePage =()=>{
        setIsOpen(false);
        navigate('/');
    }

    
    const handelSubmit = (e) => {
        e.preventDefault()
        if(FirstName>=100){
            toast("Your Blood pressure is High");
        }
        else if(FirstName<=60){
            toast("Your Blood pressure is low");
        }
        else if(LastName>=140){
            toast("Your Blood pressure is High");
        }
        else if(LastName<=100){
            toast("Your Blood pressure is low");
        }
        else if(Email<=90){
            toast("Your oxygen level is low");
        }
        else if(PhoneNo>=120){
            toast("Your Blood pressure is High");
        }
        else if(PhoneNo<=100){
            toast("Your Blood pressure is High");
        }
        
        
    }
    const changeFirstName = (e) => {
        setFirstName(e.target.value)
    }
    const changeLastName = (e) => {
        setLastName(e.target.value)
    }
    const changePhoneNo = (e) => {
        setPhoneNo(e.target.value)
    }
    const changeTime = (e) => {
        setTime(e.target.value)
    }
    const changeEmail = (e) => {
        setEmail(e.target.value)
    }
    const data = [
        ["BP", "Diastolic", "Systolic"],
        ["Monday", FirstName, LastName],
       
      ];
       const options1 = {
        chart: {
          title: "Blood Pressure",
          subtitle: "Systolic and Diastolic",
        },
      };
    
    const maxdia=120;
    const maxsys=200;
    const maxoxy=100;
    const maxsug=320;
    const maxhea=220;
  return (
    <>
    <div className='flex justify-between w-screen'>
    <form class="form bg-slate-200 m-4 w-screen" method='post' onSubmit={(e)=>handelSubmit(e)}>
        <div className='flex m-2 justify-center'>
        <Heart/>
        <HeartBeat/>
        </div>
  
    
        <div class="form-content">
        <label>
            <input required="true" onChange={(e)=>changeFirstName(e)} name='Diastolic' placeholder="" type="number" class="input"/>
            <span>Diastolic</span>
        </label>
        
        <label>
            <input required="true" onChange={changeLastName} name='Systolic' placeholder="" type="number" class="input"/>
            <span>Systolic</span>
        </label>
    </div>  
            
    <label>
        <input required="true" onChange={changeEmail} name='Oxygen-level' placeholder="" type="number" class="input"/>
        <span>Oxygen Level</span>
    </label> 

    <label>
        <input required="true"  onChange={changePhoneNo} name='Sugar-Level' placeholder="" type="number" class="input"/>
        <span>Sugar Level</span>
    </label>


    <label>
            <input required="true" onChange={changeTime} name='Firstname' placeholder="" type="number" class="input"/>
            <span> Heart Rate</span>
    </label> 
    
    

    
    
    <button type='submit' class="submit">Analyse</button>
    <ToastContainer />
    
    
    </form>
    <Chart
      chartType="Bar"
      width="95%"
      height="400px"
      data={data}
      options={options1}
    />
    </div>
    
    <div className='flex justify-between'>
    <div style={{ width: 200, height: 200 }}>
    <h1 className=''> Diastolic</h1>
        <CircularProgressbar  value={FirstName} maxValue={maxdia} text={`${Math.round((FirstName/maxdia)*100)}%`} />
        
    </div>
    <h1 className=''> Systolic</h1>
    <div style={{ width: 200, height: 200 }}>
        <CircularProgressbar maxValue={maxsys} value={LastName} text={`${Math.round((LastName/maxsys)*100)}%`}/>
    </div>
    <h1 className=''> Oxygen Level</h1>
    <div style={{ width: 200, height: 200 }}>
        <CircularProgressbar maxValue={maxoxy} value={Email} text={`${Math.round((Email/maxoxy)*100)}%`}/>
    </div>
    <h1 className=''> Sugar Level</h1>
    <div style={{ width: 200, height: 200 }}>
        <CircularProgressbar maxValue={maxsug} value={PhoneNo} text={`${Math.round((PhoneNo/maxsug)*100)}%`}/>
    </div>
    <h1 className=''> Heart</h1>
    <div style={{ width: 200, height: 200 }}>
        <CircularProgressbar maxValue={maxhea} value={time} text={`${Math.round((time/maxhea)*100)}%`}/>
    </div>
    </div>


</>      
  )
}

export default Form