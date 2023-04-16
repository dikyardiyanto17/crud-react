import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import AddUser from "../views/FormAdd";
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
    //   {
    //     path: "editaccount/:accountId",
    //     element: <EditAccount />,
    //   },
    ],
  },
]);

export default router;
