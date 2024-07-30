interface InputProps {
    tipo?: 'text' | 'number',
    texto: string,
    valor?: any,
    somenteLeitura?: boolean
    change?: (valor: any) => void
    className?: string
    min?: number

}

export default function From(props: InputProps) {
    return (
        <div className={`flex flex-col ${props.className}`}>
            <label htmlFor="" className="mb-2">
                {props.texto}
            </label>
            <input type={props.tipo ?? 'text'}
                value={props.valor ?? ''}
                readOnly={props.somenteLeitura}
                className={`border border-purple-500 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent`}
                onChange={e => props.change?.(e.target.value)}
                min={props.min}
            />
        </div>
    )
}