import { createBrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar/navbar';


import SignIn from "./pages/Autentifikacija/Login/login";
import SignUp from "./pages/Autentifikacija/Register/register";
import Home from "./pages/Home/homepage";
import Profil from "./pages/Profil/profil";
import Class from "./pages/Class/class";
import Enroll from "./pages/Enroll/enroll";
import Student from "./pages/Student/student";
import RequireAuth from "./api/requireRole/requireRole";
import Forum from "./pages/Forum/forum";

export const router = createBrowserRouter([
  {
    element: <Navbar />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path:'/',
        element: <RequireAuth roles={["Member"]}/>,
        children:[{
          path: '/enroll',
        element: <Enroll />,
        }]
      },
      {
        path: '/sign-in',
        element: <SignIn />,
      },
      {
        path: '/sign-up',
        element: <SignUp />,
      },
      {

        path: "/",
        element: <RequireAuth roles={["Admin"]} />,
        children: [
          {
            path: "/class",
            element: <Class />,
          },
        ],

      },
      {
        path: '/profile',
        element: <Profil />,
      },
      {

        path: '/forum',
        element: <Forum />,
      },
      {
        path: '/student',
        element: <Student />,
      },
    ],
  },
]);
