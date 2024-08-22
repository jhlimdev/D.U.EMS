import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const AddNote = () => {
    useEffect(() => {
        document.title = "D.U.EMS | 노트 추가"
    }, [])
    const [note, setNote] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/auth/add_note', {note})
        .then(result => {
            if(result.data.Status) {
                navigate('/dashboard/note')
            } else {
                alert(result.data.Error)
            }
        })
        .catch(err => console.log(err))
    }
  return (
    <div className='d-flex justify-content-center align-items-center h-75'>
        <div className='p-3 rounded w-25 border'>
            <h2>메모 추가</h2>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor="note"><strong>메모:</strong></label>
                    <input type="text" name='category' placeholder='내용을 적어주세요'
                     onChange={(e) => setNote(e.target.value)} className='form-control rounded-0'/>
                </div>
                <button className='btn btn-success w-100 rounded-0 mb-2'>메모 추가</button>
            </form>
        </div>
    </div>
  )
}

export default AddNote