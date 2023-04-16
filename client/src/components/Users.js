import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import { deleteUser, getDetail } from '../stores/action/actionCreator';

export default function Users({user, index}) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const deleted = (e) => {
    e.preventDefault()
    dispatch(deleteUser(user.id))
    .then(() => {
      Swal.fire({
          icon: 'success',
          title: 'Success Deleting User ' + user?.firstName
      })
  })
}
  return (
    <>
      <tr>
        <td>{user.id}</td>
        <td style={{ maxWidth: "100px", minWidth: "100px" }}>{user.firstName + " " + user.lastName}</td>
        <td style={{ maxWidth: "150px", minWidth: "150px" }}>{user.age + " years old"}</td>
        <td style={{ maxWidth: "150px", minWidth: "150px" }}>{user.gender.charAt(0).toUpperCase() +user.gender.slice(1)}</td>
        <td style={{ maxWidth: "150px", minWidth: "150px" }}>{user.username}</td>
        <td>
          <img src={user.image} style={{ maxWidth: "100px", margin: "10px", height: "100px" }} />
        </td>
        <td style={{ maxWidth: "150px", minWidth: "150px" }}>{user.birthDate}</td>
        <td style={{ maxWidth: "150px", minWidth: "150px" }}>{user.address.address}</td>
        <td style={{ minWidth: "200px" }}>
          <Link className="btn btn-primary" style={{ width: "100px", margin: "10px auto" }} onClick={() => {
            dispatch(getDetail(user.id))
            setTimeout(() => {
              navigate("/edituser/"+user.id)
            }, 1000);
          }}>
            Edit
          </Link>{" "}
          <Button variant="danger" style={{ width: "100px", margin: "10px auto" }} onClick={deleted}>
            Delete
          </Button>
        </td>
      </tr>
    </>
  );
}
