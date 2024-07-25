import React from "react";
import { About, Contact, Home, Login, Menu, Register } from "./pages/pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/contact-us",
      element: <Contact />,
    },
    {
      path: "/our-menu",
      element: <Menu />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/about-us",
      element: <About />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
