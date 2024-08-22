import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


const EmployeeDetail = () => {
    const [employee, setEmployee] = useState([])
    const {id} = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        document.title = "D.U.EMS | 사원 정보"
        axios.get('http://localhost:3000/employee/detail/'+id)
        .then(result => {
            setEmployee(result.data[0])
        })
        .catch(err => console.log(err))
    }, [])
    const handleLogout = () => {
        axios.get('http://localhost:3000/employee/logout')
        .then(result => {
          if(result.data.Status) {
            localStorage.removeItem("valid")
            navigate('/')
          }
        }).catch(err => console.log(err))
      }
  return (
    <div>
        <div className="p-2 d-flex justify-content-center shadow">
            <h4>D.U.EMS 사원 관리 시스템</h4>
        </div>
        <div className='d-flex justify-content-center flex-column align-items-center mt-3' style={{ width: '100%', height: '100vh' }}>
            <img src={`http://localhost:3000/Images/`+employee.image} className='emp_det_image'style={{ border: '3px solid #ffa500' }}/>
            <div className='d-flex align-items-center flex-column mt-5'>
                <h3>성함: {employee.name}</h3>
                <h3>Email: {employee.email}</h3>
                <h3>급여: ₩{employee.salary}</h3>
                <h3>부서 {employee.category_id}</h3>
            </div>
            <div>
                {/* <button className='btn btn-primary me-2'>Edit</button> */}
                <button className='btn btn-danger' onClick={handleLogout}>로그아웃</button>
            </div>
        </div>
    </div>
  )
}

export default EmployeeDetail