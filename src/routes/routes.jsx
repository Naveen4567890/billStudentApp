import { createBrowserRouter } from "react-router-dom";
import Register from "../components/user/Register";
import Login from "../components/user/Login";
import Main from "../components/user/main/Main";
import Home from "../components/user/main/home/Home";
import About from "../components/user/main/about/About";
import AddBills from "../components/user/main/addbills/AddBills";
import FilterBills from "../components/user/main/filter/FilterBills";
import UpdateBills from "../components/user/main/updateBills/UpdateBills";
import ViewBills from "../components/viewBill/ViewBills";
import PrivateRoute from "../components/helper/PrivateRoute";

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
        element:<PrivateRoute><Main></Main></PrivateRoute>,
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
        },{
                path:"updateBills",
                element:<UpdateBills></UpdateBills>
         },{
                path:"viewBills",
                element:<ViewBills></ViewBills>
            }
    ]
    }
])
export default routes