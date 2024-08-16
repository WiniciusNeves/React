import React, { Component } from "react";
import ContentHeader from "../template/contentHeader";
import Content from "../template/content";

class Dashboard extends Component {
    render() {
        return (
            <div>
                <ContentHeader title="Dashboard" small="Versão 1.0.0" />
                <Content>
                    <div className="row ">
                        <div className="col-md-12">
                            <div className="box box-solid">
                                <div className="box-body">
                                    <h2>Dashboard</h2>
                                </div>
                            </div>
                        </div>
                    </div>  
                </Content>
            </div>
        );
    }
}

export default Dashboard;
