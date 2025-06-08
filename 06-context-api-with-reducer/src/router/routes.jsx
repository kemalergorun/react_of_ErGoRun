import { createBrowserRouter, Outlet } from "react-router";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/auth/LoginPage";


export const router=createBrowserRouter([
    {
        path:"/",
        element:<><Outlet/></>,
        children:[
            {
                index:true,
                element:<HomePage/>
            },
            {
                path:"/login",
                element:<LoginPage/>
            }
        ]


}
]);