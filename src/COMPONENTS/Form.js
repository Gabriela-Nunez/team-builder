import React from 'react';

const Form = (props) => {

  return (
    <div className='form'>
      <form>
        <label>
          Name:
          <input
          placeholder='Enter your name here.'
          type='text'
          name='name'
          value=''
          // onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
          placeholder='Enter your email here.'
          type='email'
          name='email'
          value=''
          // onChange={handleChange}
          />
        </label>
        <label>
          Role:
          <select>
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