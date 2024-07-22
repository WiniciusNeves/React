import Link from "next/link";
import Nav from "../components/nav";
export default function Home() {
    return (
        <div>
            <Nav destino="/" texto="Home"/>
            <Nav destino="/test" texto="Teste"/>
            <Nav destino="/styles" texto="Estilo"/>
            <Nav destino="/auth/login" texto="Autenticação"/>
            <Nav destino="/estado" texto="Estado"/>
            <Nav destino="/int" texto="Int"/>
        </div>
    );
}
