import React from 'react'
import { useState } from 'react'
import './styles/App.css'
import InputBlock from './components/InputBlock'
import CVBlock from './components/CVBlock'
import Button from './components/Button'

function App() {
  const [name, setName] = useState('Name');
  const [email, setEmail] = useState('Email');
  const [phoneNumber, setPhoneNumber] = useState('Phone Number');
  const [degree, setDegree] = useState('Degree');
  const [school, setSchool] = useState('School');
  const [date, setDate] = useState('Date Graduated');
  const [job, setJob] = useState('Job Title');
  const [company, setCompany] = useState('Company Name');
  const [exp, setExp] = useState('Years of Experience');


  return (
    <div className='parent'>
      <div>
        <InputBlock 
          title="Personal Info" 
          input1="Name" 
          input2="Email" 
          input3="Phone Number"
          set1={setName}
          set2={setEmail}
          set3={setPhoneNumber}
        />

        <InputBlock 
          title="Education" 
          input1="Degree" 
          input2="School" 
          input3="Date Graduated"
          set1={setDegree}
          set2={setSchool}
          set3={setDate}
        />

        <InputBlock 
          title="Work Experience" 
          input1="Job Title" 
          input2="Company Name" 
          input3="Years Worked"
          set1={setJob}
          set2={setCompany}
          set3={setExp}
        />

        <Button />
      </div>

      <div className='CVContainer'>
        <CVBlock 
          title={name}
          input1={email}
          input2={phoneNumber}
        />

        <CVBlock 
          title="Education"
          input1={degree} 
          input2={school} 
          input3={date} 
        />

        <CVBlock 
          title="Experience"
          input1={job} 
          input2={company} 
          input3={exp}
        />

      </div>
    </div>
  );
};

export default App
