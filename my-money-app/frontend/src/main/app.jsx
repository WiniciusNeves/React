import React from "react";
import '../common/template/dependencies'
import Header from "../common/template/header";
import SideBar from "../common/template/sideBar";
import Footer from "../common/template/footer";
import Routes from "./router";
import Messages from "../common/MSG/messages";

export default (props) => {
    return (

        < div className="wrapper" >
            <Header />
            <SideBar />
            <div className="content-wrapper">
                <Routes />
            </div>
            <Footer />
            <Messages />
        </div >
    )

}