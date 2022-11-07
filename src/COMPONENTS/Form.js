import React from 'react';

const Form = (props) => {

  const handleChange = event => {
    const { name, value } = event.target;
    props.change(name, value);
  }


  const handleSubmit = event => {
    event.preventDefault();
    props.submit();

  }
 
  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
          placeholder='Enter your name here.'
          type='text'
          name='name'
          value={props.values.name}
          onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
          placeholder='Enter your email here.'
          type='email'
          name='email'
          value={props.values.email}
          onChange={handleChange}
          />
        </label>
        <label>
          Role:
          <select value={props.values.role} name='role' onChange={handleChange}>
            <option value=''>---Select an Option---</option>
            <option value='backendEngineer'>Backend Engineer</option>
            <option value='frontendEngineer'>Frontend Engineer</option>
            <option value='designer'>Designer</option>
          </select>
        </label>
      </form>
      <input type='submit' value='Create Your Team' />
    </div>
  )

}


export default Form;