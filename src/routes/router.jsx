import { createBrowserRouter } from "react-router-dom";

import RoutLayout from "../pages/Rout";
import HomePage from "../pages/Home";
import AboutPage from "../pages/About";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RoutLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "projects", element: <Projects /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
