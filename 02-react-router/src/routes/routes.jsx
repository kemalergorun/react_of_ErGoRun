import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import ErrorPage from "../ErrorPage";
import Contact from "./Contact";
import { rootLoader } from "../api/RootLoader";
import { createContactAction } from "../actions/create-contact.action";
import { contactLoader } from "../api/ContactLoader";
import EditContact from "./EditContact";
import { updateContactAction } from "../actions/update-contact.action";

// createBrowserRouter acts like App.jsx
export const router = createBrowserRouter([
  {
    // URL
    path: "/",
    // jsx file
    element: <RootLayout />,
    // Customized error page
    errorElement: <ErrorPage />,
    // Children will allow us to put elements on path "/".
    loader: rootLoader,
    action: createContactAction,
    children: [
      {
        path: "/contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
      },
      {
        path: "/contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: updateContactAction,
      },
    ],
  },
  // {
  //     path:"/another-path",
  //     element: <>I am another path <Outlet /></>,
  //     children: [
  //         {
  //             path:"/another-path/1",
  //             element: <>Hello Again</>
  //         },
  //         {
  //             path:"/another-path/2",
  //             element: <>Hello Again 2</>
  //         }
  //     ]
  // }
  // {
  //     path: "/contacts/:contactId",
  //     element: <Contact />
  // }
]);
