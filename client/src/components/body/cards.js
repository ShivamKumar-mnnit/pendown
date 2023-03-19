import React from 'react'
import './cards.css'
import teacher from '../../img/teacher.jpg';
import student from '../../img/student.avif';
const cards = () => {
  return (
    <div className='d-flex container'>
    <div className="card mb-3 mx-5" width='18rem'>
    <img src={teacher} className="card-img-top" alt="..." />
    <div className="card-body mx-5">
    <h5> Maintain your profile</h5>
              <h5> Take classes</h5>
              <h5> Create Assignments</h5>
              <h5> Mentor students</h5>
    </div>
  </div>
  <div className="card mb-3 mx-5" width='18rem'>
    <img src={student} className="card-img-top" alt="..." />
    <div className="card-body mx-5">
    <h5> Maintain your profile</h5>
              <h5> Easy access to study Material</h5>
              <h5> One-to-one interaction</h5>
              <h5> Track your Progress</h5>
    </div>
  </div>
  </div>
  )
}

export default cards