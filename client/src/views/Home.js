import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../components/Pagination.js";
import Sidebar from "../components/Sidebar.js";
import Table from "react-bootstrap/Table";
import { getUsers } from "../stores/action/actionCreator.js";
import loading from '../assets/loading.gif'
import Users from "../components/Users.js";
export default function Home() {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <>
      <div className="d-flex col main">
        <Sidebar />
        <div className="col-9">
          <div className="border border-slate-800 bg-slate-900/70 mt-3 p-5 text-center" style={{ minHeight: "80vh" }}>
            <h1>Home</h1>
            <div className="d-flex justify-content-center">
              <Table bordered responsive size="sm" style={{ color: "white" }}>
                <thead>
                  <tr>
                    <th>User Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Username</th>
                    <th>Photo</th>
                    <th>Birth Date</th>
                    <th>Address</th>
                    <th>Action</th>
                  </tr>
                </thead>
                {users && (
                  <tbody>
                    {users.map((user, index) => {
                      return <Users user={user} key={user.id} index={index} />;
                    })}
                  </tbody>
                )}
              </Table>
            </div>
             {users.length == 0 && <img src={loading} />}
            <Pagination />
          </div>
        </div>
      </div>
    </>
  );
}
