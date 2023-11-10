import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "../layouts/BaseLayout";
import HomePage from "../pages/HomePage";
import SecondPage from "../pages/SecondPage";
import ThirdPage from "../pages/ThirdPage";

const router = createBrowserRouter([
  // Pembungkus atasnya (Parent)
  {
    element: <BaseLayout />,
    // si Anakan
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/second",
        element: <SecondPage />,
      },
      {
        path: "/third",
        element: <ThirdPage />,
      },
    ],
  },
]);

export default router;
