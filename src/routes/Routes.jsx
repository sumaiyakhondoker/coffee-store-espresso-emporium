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
import PrivateRoute from "./PrivateRoute";
import CoffeeDetails from "../components/CoffeeDetails";
import SignOut from "../components/SignOut";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    
    children: [
      {
        path:'/',
        element: <Home></Home>,
        loader: ()=> fetch('https://coffee-store-espresso-emporium-serv.vercel.app/coffees'),
        
      },
      {
        path:'/coffeeDetails/:id',
        element: <PrivateRoute><CoffeeDetails></CoffeeDetails></PrivateRoute>,
        loader: ({params})=> fetch(`https://coffee-store-espresso-emporium-serv.vercel.app/coffees/${params.id}`)
      },
      {
        path:'/addCoffee',
        element: <PrivateRoute><AddCoffee></AddCoffee></PrivateRoute>
      },
      {
        path:'/updateCoffee/:id',
        element: <PrivateRoute><UpdateCoffee></UpdateCoffee></PrivateRoute>,
        loader: ({params})=> fetch(`https://coffee-store-espresso-emporium-serv.vercel.app/coffees/${params.id}`)
      },
      {
        path:'/login',
        element: <Login></Login>
      },
      {
        path:'/signout',
        element: <SignOut></SignOut>
      },
      {
        path:'/register',
        element: <Register></Register>
      },
    ]
  },
]);

export default router;