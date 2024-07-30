export default function Title({ children }) {
    return (
        <div className="flex flex-col justify-center ">
            <h1 className="text-3xl font-bold pl-7 py-2">
                {children}
            </h1>
            <hr className="border-2 border-purple-500" />
        </div>
    )
}
