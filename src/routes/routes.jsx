import { createBrowserRouter } from "react-router-dom";
import Register from "../components/user/Register";
import Login from "../components/user/Login";

let routes=createBrowserRouter([
    // {
    //     path:"/",
    //     element:<Register></Register>
    // },
    {
        path:"/",
        element:<Login></Login>
    }
])
export default routes