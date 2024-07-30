import Client from "./Client";
export default interface ClientRepositorio {
    save(client: Client): Promise<Client>
    delete(id: string): Promise<void>
    getAll(): Promise<Client[]>
}

