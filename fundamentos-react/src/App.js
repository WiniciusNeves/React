import React from "react";
import PrimerioComponente from './components/model/index';
import Random from './components/model/random';
import Card from "./components/layout/Card";
import Familha from "./components/model/familha";
import Familha2 from "./components/model/familha2";
import ListaAlunos from "./components/repit/listaAlunos";
import Mercado from "./components/repit/mercado";
import ParOuInpar from "./components/condicional/ParOuInpar";
import UserInfo from "./components/condicional/UserInfo";
import Pai from "./components/heraquia/pai";
import Input from "./components/form/input";
import Contador from "./components/contador/contador";
import Mega from "./components/mega/mega";


import './styles.css';



export default props => {

    return (
        <div className="Cards">


            <Card title="#11-Mega" Coutent="Conteudo" style={{ backgroundColor: '#B0E0E6' }}>

                <h1>
                   Mega-Sena <Mega qtde={6} />
                </h1>
                <h1>
                   Quina <Mega qtde={5} />
                </h1>

            </Card>
            <Card title="#10-Contador" Coutent="Conteudo" style={{ backgroundColor: '#FF8474' }}>

                <Contador />

            </Card>

            <Card title="#09-Input" Coutent="Conteudo" style={{ backgroundColor: '#FF69B4' }}>

                <Input />

            </Card>
            <Card title="#08-heraquia" Coutent="Conteudo" style={{ backgroundColor: '#8B4513' }}>

                <Pai sobrenome="Silva"></Pai>

            </Card>

            <Card title="#07-User Info" Coutent="Conteudo" style={{ backgroundColor: '#C1CDCD' }}>

                <UserInfo user={{ name: 'João', email: 'j@j.com' }}></UserInfo>

            </Card>
            <Card title="#06-Par OU Impar" Coutent="Conteudo" style={{ backgroundColor: '#00FF00' }}>

                <ParOuInpar number={15}></ParOuInpar>

            </Card>

            <Card title="#05-Mercado" Coutent="Conteudo" style={{ backgroundColor: '#610B5E' }}>

                <Mercado></Mercado>

            </Card>

            <Card title="#04-Repetição" Coutent="Conteudo" style={{ backgroundColor: '#42D38E' }}>

                <ListaAlunos></ListaAlunos>

            </Card>

            <Card title="#03-Familha" Coutent="Conteudo" style={{ backgroundColor: '#356578' }}>

                <Familha sobrenome="Silva">
                    <Familha2 name="João" />
                    <Familha2 name="Maria" />
                </Familha>

            </Card>
            <Card title="#02-Random" Coutent="Conteudo" style={{ backgroundColor: '#D34D42' }}>

                <Random></Random>
            </Card>
            <Card title="#01-PrimeiroComponente" Coutent="Conteudo" style={{ backgroundColor: '#3F694D' }}>

                <PrimerioComponente />
            </Card>
        </div>


    )
}
