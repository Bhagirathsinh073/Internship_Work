import React, { useState } from 'react'
import { useNavigate,Route,Routes } from 'react-router-dom'
import PersonalInfo from './Stage/PersonalInfo';
import AddressInfo from './Stage/AddressInfo';
import Final from './Stage/Final';

export default function Main() {
    const [formData,setFormData]= useState({
        fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    })

    const navigate = useNavigate();
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const nextStage = () => {
        navigate('/address');
      };
    
      const prevStage = () => {
        navigate('/personal');
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // alert('Form Submitted: ' + JSON.stringify(formData, null, 2));
        navigate('/final');
      };
    
  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
    <Routes>
      <Route
        path="/"
        element={<PersonalInfo formData={formData} handleChange={handleChange} nextStage={nextStage} />}
      />
      <Route
        path="/personal"
        element={<PersonalInfo formData={formData} handleChange={handleChange} nextStage={nextStage} />}
      />
      <Route
        path="/address"
        element={
          <AddressInfo
            formData={formData}
            handleChange={handleChange}
            prevStage={prevStage}
            handleSubmit={handleSubmit}
          />
        }

      />
      <Route
        path='/final'
        element={<Final
            formData={formData}
        />
      
        }
      />
    </Routes>
  </div>
  );
}
