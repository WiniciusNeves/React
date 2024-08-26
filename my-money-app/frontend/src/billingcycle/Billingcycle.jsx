import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import ContentHeader from "../common/template/contentHeader";
import Content from "../common/template/content";
import Tabs from "../common/tab/tabs";
import TabsContend from "../common/tab/tabsContend";
import TabsHeader from "../common/tab/tabsHeader";
import TabHeader from "../common/tab/tabHeader";
import TabContent from "../common/tab/tabContent";
import BillingCycleForm from "./BillingCycleForm";

import BillingCycleList from "./BillingCycleList";

import { selectTab, showTab } from "../common/tab/tabAction";
import { create, update, remove } from "../billingcycle/BillingCycleAction"

class Billingcycle extends Component {
    componentDidMount() {
        console.log('Selecting tabList');
        this.props.selectTab('tabList');
        this.props.showTab('tabList', 'tabCreate');
    }
    render() {
        return (
            <div>
                <ContentHeader title="Ciclo de Pagamentos" small="Versão 1.0.0" />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label="Listar" icon="bars" target="tabList" />
                            <TabHeader label="Incluir" icon="plus" target="tabCreate" />
                            <TabHeader label="Alterar" icon="pencil" target="tabUpdate" />
                            <TabHeader label="Excluir" icon="trash-o" target="tabDelete" />
                        </TabsHeader>
                        <TabsContend>
                            <TabContent id="tabList">
                                <BillingCycleList />
                            </TabContent>
                            <TabContent id="tabCreate">
                                <BillingCycleForm onSubmit={this.props.create} submitLabel="Incluir" submitClass='primary' />
                            </TabContent>
                            <TabContent id="tabUpdate">
                                <BillingCycleForm onSubmit={this.props.update} submitLabel="Alterar" submitClass='info' />
                            </TabContent>
                            <TabContent id="tabDelete">
                                <BillingCycleForm onSubmit={this.props.remove} readOnly={true} submitLabel="Excluir" submitClass='danger' />
                            </TabContent>
                        </TabsContend>
                    </Tabs>
                </Content>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ selectTab, showTab, create, update, remove }, dispatch);
export default connect(null, mapDispatchToProps)(Billingcycle);
