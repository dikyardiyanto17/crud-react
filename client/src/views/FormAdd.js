import '../assets/style.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

export default function AddUser() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [formAdd, setFormAdd] = useState({
    })

    const changeHandler = (e) => {
        const { value, name } = e.target
        const obj = { ...formAdd }
        obj[name] = value
        setFormAdd(obj)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        // dispatch(addUsers(formAdd))
        //     .then(() => {
        //         navigate('/')
        //     })
        //     .catch((error) => {
        //         (Swal.fire({
        //             icon: 'error',
        //             title: error.message,
        //         }))
        //     })
    }

    return (
        <>
            <div className='main' style={{ 'padding': '20px' }}>
                <div id="container-custom">
                    <div className="content-custom" id="form">
                        <div id="cta">Add User</div>
                        <form className="signup" onSubmit={submitHandler} style={{ 'height': 'auto' }}>
                            <div className="input-wrap" > <input type='text' placeholder='First Name' onChange={changeHandler} name='firstName' /> </div>
                            <div className="input-wrap" > <input type='text' placeholder='Last Name' onChange={changeHandler} name='lastName' />  </div>
                            <div className="input-wrap" > <input type='text' placeholder='Age' onChange={changeHandler} name='age' />  </div>
                            <div className="input-wrap" > <input type='text' placeholder='Username' onChange={changeHandler} name='username' />  </div>
                            <div className="input-wrap" > <input type='date' onChange={changeHandler} name='birthDate' />  </div>
                            <div className="input-wrap" >
                                <select className="input-wrap" style={{ 'borderLeftWidth': '1px' }} onChange={changeHandler} name='gender'>
                                    <option style={{'backgroundColor': 'black'}} value='' disabled selected>Gender</option>
                                    <option style={{'backgroundColor': 'black'}} value='male'>Male</option>
                                    <option style={{'backgroundColor': 'black'}} value='female'>Female</option>
                                </select> </div>
                            <div className="input-wrap" > <input type='text' placeholder='Address' onChange={changeHandler} name='address' />  </div>
                            <button type='submit'> Submit </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
