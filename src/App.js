import React, { useState } from 'react';
import Form from './COMPONENTS/Form';


function App() {

  const[teamMembers, setTeamMembers] = useState([]);
  const[values, setValues] = useState({
    name: '',
    email: '',
    role: ''
  });

  return (
    <div className="App">
      <h1>Team Builder App</h1>
      <Form values={values} />
    </div>
    
  );
}

export default App;
