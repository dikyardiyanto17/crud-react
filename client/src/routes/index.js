import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
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
    //   {
    //     path: "addaccount",
    //     element: <AddAccount />,
    //   },
    //   {
    //     path: "editaccount/:accountId",
    //     element: <EditAccount />,
    //   },
    ],
  },
]);

export default router;
