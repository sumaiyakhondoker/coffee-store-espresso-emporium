import {
  createBrowserRouter
} from "react-router-dom";
import Root from "../layout/Root";
import Home from "../components/Home";
import ErrorPage from "../components/ErrorPage";
import AddCoffee from "../components/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee";
import Register from "../components/Register";
import Login from "../components/Login";

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
      },
      {
        path:'/login',
        element: <Login></Login>
      },
      {
        path:'/register',
        element: <Register></Register>
      },
    ]
  },
]);

export default router;