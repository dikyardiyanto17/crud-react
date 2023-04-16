import "../assets/style.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAccounts } from "../stores/action/actionCreator";

export default function Sidebar() {
  // const dispatch = useDispatch()
  // const categories = useSelector((state) => state.categories.categories)
  // const [formFilter, setFormFilter] = useState({
  //     name: '',
  //     categoryId: '',
  // })

  // const changeHandler = (e) => {
  //     const { value, name } = e.target
  //     const obj = { ...formFilter }
  //     obj[name] = value
  //     setFormFilter(obj)
  // }

  // const submitHandler = (e) => {
  //     e.preventDefault()
  //     if (!formFilter) {
  //         dispatch(getAccounts())
  //     } else if (formFilter.name && !formFilter.categoryId){
  //         dispatch(getAccounts(`?name=${formFilter.name}`))
  //     } else if (!formFilter.name && formFilter.categoryId){
  //         dispatch(getAccounts(`?categoryId=${formFilter.categoryId}`))
  //     } else {
  //         dispatch(getAccounts(`?categoryId=${formFilter.categoryId}&name=${formFilter.name}`))
  //     }
  // }
  return (
    <div className="col-3">
      <div className="border border-slate-800 bg-slate-900/70 mt-3 p-5" style={{ minHeight: "80vh" }}>
        <div className="flex justify-between">
          <h2 className="font-bold text-3xl mb-3">Search</h2>
        </div>
        <form>
          <div className="mb-5 row" style={{ justifyContent: "center", marginTop: "30px" }}>
            <div>
              <input type="text" className="form-control" placeholder="Search by product name" name="name" />
            </div>
          </div>
          <div className="mb-5 row signup">
            <select className="input-wrap" style={{ borderLeftWidth: "1px", backgroundColor: "black" }} name="categoryId">
              <option value="">Category</option>
              {/* {categories.map((category, index) => {
                return <CategoriesOption category={category} index={index} key={category.id} />;
              })} */}
            </select>
          </div>
          <input className="btn btn-primary" type="submit" value="Search" />
        </form>
      </div>
    </div>
  );
}
