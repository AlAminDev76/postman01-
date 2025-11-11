import React from "react";
import Registration from "./components/Page/Registration";
import Login from "./components/Page/Login";
import firebaseConfig from "./components/firebase/firebaseConfig"
import PasswordReset from "./components/Page/PasswordReset";
import Home from "./components/Page/Home";


import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/",
      element: <Registration />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/PasswordReset",
      element: <PasswordReset />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

