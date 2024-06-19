import React from "react";
import PrimerioComponente from './components/model/index';
import Random from './components/model/random';
import Card from "./components/layout/Card";
import Familha from "./components/model/familha";
import Familha2 from "./components/model/familha2";
import ListaAlunos from "./components/repit/listaAlunos";

import './styles.css';



export default props => {

    return (
        <div className="Cards">


            <Card title="#04-Repetição" Coutent="Conteudo" style={{backgroundColor: '#42D38E'}}>

                <ListaAlunos></ListaAlunos>

            </Card>
            <Card title="#03-Familha" Coutent="Conteudo" style={{backgroundColor: '#356578'}}>

                <Familha sobrenome="Silva">
                    <Familha2 name="João" />
                    <Familha2 name="Maria" />
                </Familha>

            </Card>
            <Card title="#02-Random" Coutent="Conteudo" style={{backgroundColor: '#D34D42'}}>

                <Random></Random>
            </Card>
            <Card title="#01-PrimeiroComponente" Coutent="Conteudo" style={{backgroundColor: '#3F694D'}}>

                <PrimerioComponente />
            </Card>
        </div>


    )
}
