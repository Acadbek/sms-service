import useID from "../hooks/useID";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const navbar = [
  {
    id: useID,
    element: <Home />,
    title: "Home",
    path: "./home",
    private: false,
    hidden: false,
  },
  {
    id: useID,
    element: <Login />,
    title: "Login",
    path: "./login",
    private: false,
    hidden: false,
  },
  {
    id: useID,
    element: <Register />,
    title: "Regiter",
    path: "./register",
    private: false,
    hidden: false,
  },
];
