import Link from "next/link";
import Nav from "../components/nav";
export default function Home() {
    return (
        <div>
            <Nav destino="/" texto="Home"/>
            <Nav destino="/test" texto="Teste"/>
            <Nav destino="/styles" texto="Estilo"/>
        </div>
    );
}
