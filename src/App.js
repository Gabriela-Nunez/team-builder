import React, { useState } from 'react';
import Form from './COMPONENTS/Form';
import './App.css';


function App() {

  const[teamMembers, setTeamMembers] = useState([]);
  const[values, setValues] = useState({
    name: '',
    email: '',
    role: ''
  });


  const onSubmit = () => {
    setTeamMembers([values, ...teamMembers]);
    setValues({name: '',
    email: '',
    role: ''})
  }

  const onChange = (name, value) => {
    setValues({ ...values, [name]: value})
  }

  return (
    <div className="App">
      <h1>Team Builder App</h1>
      <Form 
        values={values} 
        change={onChange}
        submit={onSubmit}
        />
        {teamMembers.map((teamMember, idx) => {
          return (
            <div key={idx}>
              {teamMember.email}, {teamMember.name}, {teamMember.role}
              </div>
          )
        })} 
    </div>    
  );
}

export default App;
