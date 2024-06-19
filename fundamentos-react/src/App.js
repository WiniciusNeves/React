import React from "react";
import PrimerioComponente from './components/model/index';
import Random from './components/model/random';
import Card from "./components/layout/Card";
import Familha from "./components/model/familha";

import './styles.css';



export default props => {

    return (
        <div className="Cards">

            <Card title="#03-Card" Coutent="Conteudo">

                <Familha></Familha>

            </Card>
            <Card title="#02-Card" Coutent="Conteudo">

                <Random></Random>
            </Card>
            <Card title="#01-PrimeiroComponente">

                <PrimerioComponente />
            </Card>
        </div>


    )
}
