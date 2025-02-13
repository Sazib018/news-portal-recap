import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import HomeMiddle from "../Components/Home/HomeMiddle/HomeMiddle";
import NewsDetails from "../Components/NewsDetails/NewsDetails";
import NewCards from "../Components/Home/NewCards/NewCards";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Home></Home>,
        children:[
            {
                path:'/:id',
                element:<HomeMiddle></HomeMiddle>,
                loader: async({params}) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }
        ]
    },
    {
        path: "/newsDetails/:id",
        element: <NewsDetails></NewsDetails>
    },
    {
        path: "/newCards/:id",
        element: <NewCards></NewCards>
    },
    {
        path: "/login",
        element: <Login></Login>
    },
    {
        path: "/register",
        element: <Register></Register>
    },
])