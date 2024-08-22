import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Category = () => {

    const [category, setCategory] = useState([])

    useEffect(()=> {
        document.title = "D.U.EMS | 부서 목록"
        axios.get('http://localhost:3000/auth/category')
        .then(result => {
            if(result.data.Status) {
                setCategory(result.data.Result);
            } else {
                alert(result.data.Error)
            }
        }).catch(err => console.log(err))
    }, []);

    const handleDelete = (id) => {
        axios.delete('http://localhost:3000/auth/delete_category/'+id)
        .then(result => {
            if(result.data.Status) {
                window.location.reload()
            } else {
                alert(result.data.Error)
            }
        })
      } 
  return (
    <div className='px-5 mt-3'>
        <div className='d-flex justify-content-center'>
            <h3>부서 목록</h3>
        </div>
        <Link to="/dashboard/add_category" className='btn btn-success'>부서 추가</Link>
        <div className="mt-3">
            <h2>부서 명</h2>
            <table className='table' style={{ borderRadius: '10px', overflow: 'hidden' }}>
                <thead>
                    <tr>
                        {/* <th>Name</th> */}
                    </tr>
                </thead>
                <tbody>
                    {
                        category.map(c => (
                            <tr>
                                <td>{c.name}</td>
                                <td><button className="btn btn-warning btn-sm" onClick={() => handleDelete(c.id)}>삭제</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>

    </div>
  )
}

export default Category