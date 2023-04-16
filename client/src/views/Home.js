import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../components/Pagination.js";
import Sidebar from "../components/Sidebar.js";
import Table from "react-bootstrap/Table";
import { getUsers } from "../stores/action/actionCreator.js";
import loading from '../assets/loading.gif'
import Users from "../components/Users.js";
export default function Home() {
  const users = useSelector((state) => state.users.users);
  const [search, setSearch] = useState(false)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <>
      <div className="d-flex col main">
        <Sidebar setSearch={setSearch}/>
        <div className="col-9">
          <div className="border border-slate-800 bg-slate-900/70 mt-3 p-5 text-center" style={{ minHeight: "80vh" }}>
            <h1>Home</h1>
            <div className="d-flex justify-content-center">
              {users.length !== 0 && <Table bordered responsive size="sm" style={{ color: "white" }}>
                <thead>
                  <tr>
                    <th>Id</th>
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
              </Table>}
            </div>
            {users?.length == 0 && !search && <img src={loading} />}
            {!search && <Pagination />}
            {search && users.length == 0 && <h1>User Not Found</h1>}
          </div>
        </div>
      </div>
    </>
  );
}
