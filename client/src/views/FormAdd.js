import '../assets/style.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { addUser } from '../stores/action/actionCreator';

export default function AddUser() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [formAdd, setFormAdd] = useState({
        firstName: '',
        lastName: '',
        age: 1,
        username: '',
        birthDate: '',
        gender: '',
        address: '',
    })

    const changeHandler = (e) => {
        const { value, name } = e.target
        if (name === "address") {
            setFormAdd({
              ...formAdd,
              address: { address: value }
            });
          } else {
            setFormAdd({
              ...formAdd,
              [name]: value
            });
          }
    }

    const isFormComplete = () => {
        return Object.values(formAdd).every((value) => value !== '');
      };

    const submitHandler = (e) => {
        e.preventDefault()
        for (const field in formAdd) {
            if (!formAdd[field]) {
                Swal.fire({
                    icon: 'error',
                    title: field + " is empty",
                })
              return
            }
          }
          dispatch(addUser(formAdd))
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Success Adding New User'
                })
                navigate('/')
            })
            .catch((error) => {
                (Swal.fire({
                    icon: 'error',
                    title: error.message,
                }))
            })
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
                            <div className="input-wrap" > <input type='number' min={1} placeholder='Age' onChange={changeHandler} name='age' />  </div>
                            <div className="input-wrap" > <input type='text' placeholder='Username' onChange={changeHandler} name='username' />  </div>
                            <div className="input-wrap" > <input type='date' onChange={changeHandler} name='birthDate' />  </div>
                            <div className="input-wrap" >
                                <select className="input-wrap" style={{ 'borderLeftWidth': '1px' }} onChange={changeHandler} name='gender'>
                                    <option style={{'backgroundColor': 'black'}} value='' disabled selected>Gender</option>
                                    <option style={{'backgroundColor': 'black'}} value='male'>Male</option>
                                    <option style={{'backgroundColor': 'black'}} value='female'>Female</option>
                                </select> </div>
                            <div className="input-wrap" > <input type='text' placeholder='Address' onChange={changeHandler} name='address' />  </div>
                            <button type='submit' disabled={!isFormComplete()}> Submit </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
