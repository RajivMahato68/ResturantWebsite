import {
  About,
  Contact,
  Home,
  Login,
  Menu,
  Register,
  Loader,
} from "./pages/pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const { loading } = useSelector((state) => state.alerts);
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
      path: "/sign-up",
      element: <Register />,
    },
    {
      path: "/about-us",
      element: <About />,
    },
  ]);

  return <>{loading ? <Loader /> : <RouterProvider router={router} />}</>;
}

export default App;
