import React from "react";
import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";


const { Content } = Layout;

function MainLayout(){
    return(
        <>
        <Layout>
            <Navbar/>
            
            <Content>
                <Outlet/>
            </Content>

            <Footer/>
        </Layout>
        </>
    )
}

export default MainLayout