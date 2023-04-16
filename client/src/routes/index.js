import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import AddUser from "../views/FormAdd";
import EditUser from "../views/FormEdit";
import Home from "../views/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    //   {
    //     path: "detail/:accountId",
    //     element: <Detail />,
    //   },
      {
        path: "adduser",
        element: <AddUser />,
      },
      {
        path: "edituser/:userid",
        element: <EditUser />,
      },
    ],
  },
]);

export default router;
