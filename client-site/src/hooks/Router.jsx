import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layouts/mainLayout/Mainlayout";
import Home from "../pages/home/Home";
import SignUp from "../pages/signUp/SignUp";
import SignIn from "../pages/signIn/SignIn";
import Dashboard from "../pages/dashboard/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: '/signin',
        element: <SignIn/>
      },
      {
        path: '/signup',
        element: <SignUp/>
      },
      {
        path: '/dashboard',
        element: <Dashboard/>
      }
    ]
  },
]);