import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { getDetail } from '../stores/action/actionCreator';

export default function Users({user, index}) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  return (
    <>
      <tr>
        <td style={{ maxWidth: "10px" }}>{user.id}</td>
        <td style={{ maxWidth: "100px", minWidth: "100px" }}>{user.firstName + " " + user.lastName}</td>
        <td style={{ maxWidth: "150px", minWidth: "150px" }}>{user.age + " years old"}</td>
        <td style={{ maxWidth: "150px", minWidth: "150px" }}>{user.gender}</td>
        <td style={{ maxWidth: "150px", minWidth: "150px" }}>{user.username}</td>
        <td>
          <img src={user.image} style={{ maxWidth: "100px", margin: "10px", height: "100px" }} />
        </td>
        <td style={{ maxWidth: "150px", minWidth: "150px" }}>{user.birthDate}</td>
        <td style={{ maxWidth: "150px", minWidth: "150px" }}>{user.address.address}</td>
        <td className="d-flex justify-content-center flex-wrap" style={{ minWidth: "200px" }}>
          {" "}
          <Link className="btn btn-primary" style={{ width: "100px", margin: "10px auto" }} onClick={() => {
            dispatch(getDetail(user.id))
            setTimeout(() => {
              navigate("/edituser/"+user.id)
            }, 500);
          }}>
            Edit
          </Link>{" "}
          <Button variant="danger" style={{ width: "100px", margin: "10px auto" }} >
            Delete
          </Button>
        </td>
      </tr>
    </>
  );
}
