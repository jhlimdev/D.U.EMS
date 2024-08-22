import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Note = () => {
    const [note, setNote] = useState([])

    useEffect(()=> {
        document.title = "D.U.EMS | 공유 메모"
        axios.get('http://localhost:3000/auth/note')
        .then(result => {
            if(result.data.Status) {
                setNote(result.data.Result);
            } else {
                alert(result.data.Error)
            }
        }).catch(err => console.log(err))
    }, [])

    const handleDelete = (id) => {
        axios.delete('http://localhost:3000/auth/delete_note/'+id)
        .then(result => {
            if(result.data.Status) {
                window.location.reload()
            } else {
                alert(result.data.Error)
            }
        })
      } 

    const formatDateTime = (dateTimeString) => {
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric'
        };

        return new Date(dateTimeString).toLocaleDateString('ko-KR', options);
    };
  return (
    <div className='px-5 mt-3'>
        <div className='d-flex justify-content-center'>
            <h3>공유 메모 목록</h3>
        </div>
        <Link to="/dashboard/add_note" className='btn btn-success'>메모 추가</Link>
        <div className="mt-3" style={{ borderRadius: '10px', overflow: 'hidden' }}>
            <h2>목록</h2>
            <table className='table' style={{ borderRadius: '10px', overflow: 'hidden' }}>
                <thead>
                    <tr>
                        {/* <th>List</th> */}
                    </tr>
                </thead>
                <tbody>
                    {
                        note.map(n => (
                            <tr key = {n.id}>
                                <td>{n.content}  </td>
                                <td>&nbsp;{formatDateTime(n.time)}<button style={{ marginLeft: '20px' }} className="btn btn-warning btn-sm" onClick={() => handleDelete(n.id)}>삭제</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Note

