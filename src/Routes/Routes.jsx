
import { createBrowserRouter } from "react-router-dom"
import Home from "../Pages/Home/Home";
import Root from "../Layouts/Root";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import News from "../News/News";
import PrivateRoute from "./PrivateRoute";


const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
          {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch('/news.json')
          },
          {
            path: "/news/:id",
            element: <PrivateRoute><News></News></PrivateRoute>
          },
          {
            path: "/login",
            element: <Login></Login>
          },
          {
            path: "/register",
            element: <Register></Register>
          }
        ]
      },
])

export default Routes;
