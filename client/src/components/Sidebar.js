import "../assets/style.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../stores/action/actionCreator";
export default function Sidebar() {
  const dispatch = useDispatch();
  const [formFilter, setFormFilter] = useState({});

  const changeHandler = (e) => {
    const { value, name } = e.target;
    const obj = { ...formFilter };
    obj[name] = value;
    setFormFilter(obj);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formFilter);
    // dispatch(getDetail(1));
  };
  return (
    <div className="col-3" style={{ textAlign: "center" }}>
      <div className="border border-slate-800 bg-slate-900/70 mt-3 p-5" style={{ minHeight: "80vh" }}>
        <div className="flex justify-between">
          <h2 className="font-bold text-3xl mb-3">Search</h2>
        </div>
        <form onSubmit={submitHandler}>
          <div className="mb-5 row" style={{ justifyContent: "center", marginTop: "30px" }}>
            <div>
              <input type="text" className="form-control" placeholder="Search by user name" name="name" onChange={changeHandler} />
            </div>
          </div>
          <input className="btn btn-primary" type="submit" value="Search" />
        </form>
      </div>
    </div>
  );
}
