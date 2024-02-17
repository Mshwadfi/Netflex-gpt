import { RouterProvider, createBrowserRouter, useNavigate } from "react-router-dom"
import Login from "./Login"
import Browse from "./Browse"



const Body = () =>{
    
    const appRouter = createBrowserRouter([
        {
            path:'/',
            element: <Login />
        },
        {
            path:'/browse',
            element: <Browse />
        },
        {
            path:'/',
            element: <Body />
        }
    ])

    

    return (
        <div>
            <RouterProvider router ={appRouter} />
        </div>
    )
}

export default Body;