import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export default function Users({user, index}) {
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
          <Link className="btn btn-primary" style={{ width: "100px", margin: "10px auto" }}>
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
