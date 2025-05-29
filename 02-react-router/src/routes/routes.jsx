import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import ErrorPage from "../ErrorPage";
import Contact from "./Contact";

// createBrowserRouter acts like App.jsx
export const router = createBrowserRouter([
  {
    // URL
    path: "/",
    // jsx file
    element: <RootLayout />,
    // Customized error page
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/contacts/:contactId",
        element: <Contact />,
      },
    ],
  },
  // {
  //     path: "/contacts/:contactId",
  //     element: <Contact />
  // }
]);
