import Client from "@/core/Client";
import { deleteIcon, edit } from "./icon";

interface TabProps {
    clients: Client[];
    selectClient?: (client: Client) => void;
    deleteClient?: (client: Client) => void;
}

export default function Tab(props: TabProps) {

    const exibirForm = props.selectClient && props.deleteClient;

    function renderClientsHeader() {
        return (
            <tr>
                <th className="text-left p-4">Id</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Idade</th>
                {exibirForm ? <th className="p-4">Ações</th> : false}
            </tr>
        );
    }

    function renderClientsList() {
        return props.clients?.map((client, i) => (
            <tr key={client.id} className={`${i % 2 === 0 ? "bg-purple-200" : "bg-purple-100"}`}>
                <td className="text-left p-4">{client.id}</td>
                <td className="text-left p-4">{client.nome}</td>
                <td className="text-left p-4">{client.idade}</td>
                {exibirForm ? renderIcons(client) : false}
            </tr>
        ));
    }

    function renderIcons(client: Client) {
        return (
            <td className="flex justify-center">
                {props.selectClient ? (
                    <button
                        onClick={() => props.selectClient?.(client)}
                        className="flex justify-center items-center text-green-700 rounded-full p-2 m-1 hover:bg-purple-50"
                    >
                        {edit}
                    </button>
                ) : false}

                {props.deleteClient ? (
                    <button
                        onClick={() => props.deleteClient?.(client)}
                        className="flex justify-center items-center text-red-700 rounded-full p-2 m-1 hover:bg-purple-50"
                    >
                        {deleteIcon}
                    </button>
                ) : false}
            </td>
        );
    }

    return (
        <div>
            <table className="w-full rounded-xl overflow-hidden ">
                <thead className="bg-gradient-to-r from-purple-700 to-purple-900 text-gray-300">
                    {renderClientsHeader()}
                </thead>
                <tbody>
                    {renderClientsList()}
                </tbody>
            </table>
        </div>
    );
}
