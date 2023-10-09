import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AllJewelry from "../Pages/AllJewelry/AllJewelry";
import Blog from "../Pages/Blog/Blog";
import PrivetRoute from "./PrivetRoute";
import MyJewelry from "../Pages/MyJewelry/MyJewelry";
import AddJewelry from "../Pages/AddJewelry/AddJewelry";
import Dashboard from "../Layout/Dashboard";
import UserProfile from "../Pages/Dashboard/UserProfile/UserProfile";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/alljewlery',
        element: <AllJewelry></AllJewelry>
      },
      {
        path: '/myjewlery',
        element: <PrivetRoute><MyJewelry></MyJewelry></PrivetRoute>
      },
      {
        path: '/addjewlery',
        element: <PrivetRoute><AddJewelry></AddJewelry></PrivetRoute>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'userProfile',
        element: <UserProfile></UserProfile>
      },
      {
        path: 'users',
        element: <AllUsers></AllUsers>
      },
    ]
  }
]);