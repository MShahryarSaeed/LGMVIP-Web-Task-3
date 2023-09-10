import React from 'react'

const Record = ({ data }) => {
  return (
    <div>
      {
        data.map((person, index) => (
          <div className="card" key={index}>
            <div className="detail">
              <ul>
                <li className='success' style={{ color: 'black' }}><em>Student Enrolled Successfully</em></li>
                <li> <b>Name :</b> <em>{person["name"]}</em> </li>
                <li><b>Email :</b> <em>{person["email"]}</em></li>
                <li> <b>Website link :</b> <em>{person["website"]}</em></li>
                <li><b>Gender :</b> <em>{person["gender"]}</em></li>
                <li>
                  <b>Skills :</b>
                  {person["skills"].map((skill, index) => (<span key={index}><em>{skill},</em></span>))}
                </li>
              </ul>
            </div>
            <div className="img">
              <img src={person["imagelink"]} alt="personImage" />
            </div>
          </div>
        ))
      }

    </div>
  )
}

export default Record