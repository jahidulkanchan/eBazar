import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layouts/mainLayout/Mainlayout";
import Home from "../pages/home/Home";
import SignUp from "../pages/signUp/SignUp";
import SignIn from "../pages/signIn/SignIn";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout/>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: '/signin',
        element: <SignIn></SignIn>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      }
    ]
  },
]);