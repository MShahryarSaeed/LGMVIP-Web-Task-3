import React from 'react';
import '../App.css';
const Form = ({ formData, changeHandler, handleSkills, handleSubmit, clearForm }) => {
  return (
    <form className='form' >
      <h1><em>Student Registration Form</em></h1>

      <label >Name : <input type="text" name="name" value={formData.name} onChange={changeHandler} /></label> <br />

      <label >Email : <input type="email" name="email" value={formData.email} onChange={changeHandler} /></label> <br />

      <label >WebSite : <input type="text" name="website" value={formData.website} onChange={changeHandler} /></label> <br />

      <label >Image Link  : <input type="text" name="imagelink" value={formData.imagelink} onChange={changeHandler} /></label> <br />

      <label htmlFor="gender"> Gender :
        <label ><input type="radio" name="gender" value="Male" onChange={changeHandler} /> Male</label>
        <label ><input type="radio" name="gender" value="Female" onChange={changeHandler} /> Female</label>
      </label> <br />

      <label htmlFor="skill"> Skills :
        <label ><input type="checkbox" name="skills" onChange={handleSkills} value="HTML" className='skills' /> HTML</label>
        <label ><input type="checkbox" name="skills" onChange={handleSkills} value="CSS" className='skills' /> CSS</label>
        <label ><input type="checkbox" name="skills" onChange={handleSkills} value="JAVASCRIPT" className='skills' /> JAVASCRIPT</label>
        <label ><input type="checkbox" name="skills" onChange={handleSkills} value="REACT JS" className='skills' /> REACT JS</label>

      </label> <br />

      <button type='submit' onClick={handleSubmit}>Submit Form</button>
      <button type='submit' onClick={clearForm} className='clear'>Clear Form</button>


    </form>
  )
}

export default Form;