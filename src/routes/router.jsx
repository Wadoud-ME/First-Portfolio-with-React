import { createBrowserRouter } from "react-router-dom";

import RoutLayout from "../pages/Rout";

import HomePage from "../pages/Home";
import AboutPage from "../pages/About";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RoutLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> }
    ]
  }
])

export default router