import React from "react";
import {useRoutes} from 'react-router-dom'
import MainLayout from "../layouts/mainlayout/mainlayout";
import Home from "../pages/home/home";


const RouterConfig = () => {
    return(
        
        useRoutes(
            [
                {
                    path: '/',
                    element: <MainLayout/>,
                    children: [
                        {
                            index: true,
                            element: <Home/>
                        }
                    ]
                }
            ]
        )
    
    )
}


export default RouterConfig