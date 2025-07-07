import { createBrowserRouter } from "react-router-dom";
import Register from "../components/user/Register";
import Login from "../components/user/Login";
import Main from "../components/user/main/Main";
import Home from "../components/user/main/home/Home";
import About from "../components/user/main/about/About";
import AddBills from "../components/user/main/addbills/AddBills";
import FilterBills from "../components/user/main/filter/FilterBills";

let routes=createBrowserRouter([
    {
        path:"/register",
        element:<Register></Register>
    },
    {
        path:"/",
        element:<Login></Login>
    },{
        path:"/home",
        element:<Main></Main>,
        children:[{
            index:true,
            element:<Home></Home>
        },{
            path:"about",
            element:<About></About>
        },{
            path:"AddBills",
            element:<AddBills></AddBills>
        },{
            path:"filter",
            element:<FilterBills></FilterBills>
        },
    ]
    }
])
export default routes