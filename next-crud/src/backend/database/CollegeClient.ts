import firebase from "../config"; // Certifique-se de que está importando corretamente
import Client from "@/core/Client";
import ClientRepositorio from "@/core/ClientRepositorio";

export default class CollegeClient implements ClientRepositorio {
    conversores = {
        toFirestore: (client: Client) => {
            return {
                nome: client.nome,
                idade: client.idade,
            };
        },
        fromFirestore: (snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions): Client => {
            const data = snapshot.data(options);
            return new Client(data.nome, data.idade, snapshot.id);
        }
    };

    async save(client: Client): Promise<Client> {
        if (!(client instanceof Client)) {
            throw new Error('Invalid client object');
        }

        if (client?.id) {
            await this.colege().doc(client.id).set(this.conversores.toFirestore(client));
            return client;
        } else {
            const docRef = await this.colege().add(this.conversores.toFirestore(client));
            const doc = await docRef.get();
            return this.conversores.fromFirestore(doc, {});
        }
    }

    async delete(id: string): Promise<void> {
        await this.colege().doc(id).delete();
    }

    async getAll(): Promise<Client[]> {
        const querySnapshot = await this.colege().get();
        return querySnapshot.docs.map(doc => this.conversores.fromFirestore(doc, {}));
    }

    private colege() {
        return firebase.firestore().collection('clients').withConverter(this.conversores);
    }
}
