import React from "react";
import Registration from "./components/Page/Registration";
import Login from "./components/Page/Login";
import  firebaseConfig from "./components/firebase/firebaseConfig";


import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Registration />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

