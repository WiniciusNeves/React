export default function Random() {
    return (
        <div>
            <h1>Valor aleatorio</h1>
            <p>Valor maximo: {Math.floor(Math.random() * 100)}</p>
            <p>Valor minimo: {Math.floor(Math.random() * 60)}</p>

        </div>
    )
}