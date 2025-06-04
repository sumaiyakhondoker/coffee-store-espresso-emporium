import {
  createBrowserRouter
} from "react-router-dom";
import Root from "../layout/Root";
import Home from "../components/Home";
import ErrorPage from "../components/ErrorPage";
import AddCoffee from "../components/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/addCoffee',
        element: <AddCoffee></AddCoffee>
      },
      {
        path:'/updateCoffee',
        element: <UpdateCoffee></UpdateCoffee>
      }
    ]
  },
]);

export default router;