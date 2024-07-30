interface ButtonProps {
    cor?: 'green' | 'blue' | 'gray' | 'red' | 'yellow' | 'purple' | 'pink' | 'orange' | 'cyan'
    className?: string
    children: any
    onClick?: () => void
}

export default function Button(props: ButtonProps) {
    const corMap = {
        green: 'from-green-500 to-green-700',
        blue: 'from-blue-500 to-blue-700',
        gray: 'from-gray-500 to-gray-700',
        red: 'from-red-500 to-red-700',
        yellow: 'from-yellow-500 to-yellow-700',
        purple: 'from-purple-500 to-purple-700',
        pink: 'from-pink-500 to-pink-700',
        orange: 'from-orange-500 to-orange-700',
        cyan: 'from-cyan-500 to-cyan-700',
    }

    const corClasses = corMap[props.cor ?? 'gray']

    return (
        <button onClick={props.onClick} className={`bg-gradient-to-r ${corClasses} text-white px-4 py-2 rounded-md ${props.className}`}>
            {props.children}
        </button>
    )
}
