import '../assets/style.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2';
import { editUser, getDetail } from '../stores/action/actionCreator';

export default function EditUser() {
    const navigate = useNavigate()
    const { userid } = useParams()
    const dispatch = useDispatch()
    const user = useSelector((state) => state.users.user)
    const [formEdit, setFormEdit] = useState({})

    const changeHandler = (e) => {
        const { value, name } = e.target
        if (name === "address") {
            setFormEdit({
              ...formEdit,
              address: { address: value }
            });
          } else {
            setFormEdit({
              ...formEdit,
              [name]: value
            });
          }
    }

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(formEdit)
        dispatch(editUser(formEdit, userid))
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Success Editing User ' + user?.firstName
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

    const defaultBirthDate = (dateUser) => new Date(dateUser).toISOString().substr(0, 10);

    useEffect(() => {
        dispatch(getDetail(userid))
    }, [])
    return (
        <>
            <div className='main' style={{ 'padding': '20px' }}>
                <div id="container-custom">
                    <div className="content-custom" id="form">
                        <div id="cta">Edit {user?.firstName + " " + user?.lastName}</div>
                        <form className="signup" onSubmit={submitHandler} style={{ 'height': 'auto' }}>
                            <div className="input-wrap" > <input type='text' placeholder='First Name' onChange={changeHandler} name='firstName' defaultValue={user?.firstName} /></div>
                            <div className="input-wrap" > <input type='text' placeholder='Last Name' onChange={changeHandler} name='lastName' defaultValue={user?.lastName} />  </div>
                            <div className="input-wrap" > <input type='number' min={1} placeholder='Age' onChange={changeHandler} name='age' defaultValue={user?.age } />  </div>
                            <div className="input-wrap" > <input type='text' placeholder='Username' onChange={changeHandler} name='username' defaultValue={user?.username} />  </div>
                            {user?.birthDate && <div className="input-wrap" > <input type='date' onChange={changeHandler} name='birthDate' defaultValue={defaultBirthDate(user?.birthDate)} />  </div>}
                            <div className="input-wrap" >
                                <select className="input-wrap" style={{ 'borderLeftWidth': '1px' }} onChange={changeHandler} name='gender'>
                                    <option style={{'backgroundColor': 'black'}} value='' disabled>Gender</option>
                                    {user?.gender === 'male' && 
                                    <>
                                    <option style={{'backgroundColor': 'black'}} value='male' selected>Male</option>
                                    <option style={{'backgroundColor': 'black'}} value='female'>Female</option>
                                    </>}
                                    {user?.gender === 'female' && 
                                    <>
                                    <option style={{'backgroundColor': 'black'}} value='male'>Male</option>
                                    <option style={{'backgroundColor': 'black'}} value='female' selected>Female</option>
                                    </>}
                                </select> </div>
                            <div className="input-wrap" > <input type='text' placeholder='Address' onChange={changeHandler} name='address' defaultValue={user?.address?.address} />  </div>
                            <button type='submit'> Submit </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
