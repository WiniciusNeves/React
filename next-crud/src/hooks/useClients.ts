import CollegeClient from "@/backend/database/CollegeClient";
import Client from "@/core/Client";
import ClientRepositorio from "@/core/ClientRepositorio";
import { useEffect, useState } from "react";
import useVisible from "./useVisible";

export default function useClients() {
    const repo: ClientRepositorio = new CollegeClient();

    const { formVisible, tabVisible, exibirForm, exibirTab } = useVisible();

    const [client, setClient] = useState<Client>(Client.empty());
    const [clients, setClients] = useState<Client[]>([]);

    useEffect(() => {
        getAllClients();
    }, []);

    function getAllClients() {
        repo.getAll().then((clients) => {
            setClients(clients);
            exibirTab();
        });
    }

    async function deleteClient(client: Client) {
        await repo.delete(client.id);
        getAllClients();
    }

    function selectClient(client: Client) {
        setClient(client);
        exibirForm();
    }

    async function newClient(client: Client) {
        await repo.save(client);
        getAllClients();
    }

    function newClientForm() {
        setClient(Client.empty());
        exibirForm();
    }

    return {
        client,
        clients,
        tabVisible,
        formVisible,
        selectClient,
        deleteClient,
        newClient,
        newClientForm,
        exibirTab,
        exibirForm
    };
}
