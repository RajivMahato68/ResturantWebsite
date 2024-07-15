import { Contact, Home, Menu } from "./pages/pages";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/contact_us",
      element: <Contact />,
    },
    {
      path: "/our_menu",
      element: <Menu />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
