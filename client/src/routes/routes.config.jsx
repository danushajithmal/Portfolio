import React from "react";
import {useRoutes} from 'react-router-dom'
import MainLayout from "../layouts/mainlayout/mainlayout";
import Home from "../pages/home/home";
import Experience from "../pages/experience/experience";
import About from "../pages/about/about";


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
                        },
                        {
                            path: '/experience',
                            element: <Experience/>
                        },
                        {
                            path: '/about',
                            element: <About/>
                        }
                    ]
                }
            ]
        )
    
    )
}


export default RouterConfig