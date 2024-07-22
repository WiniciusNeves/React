import Layout from "../../components/layout";
import { useRouter } from "next/router";

export default function Auth() {

    const router = useRouter();

    return (
        <Layout title="Autenticação">
            <div>
                <h1>Autenticação {router.query.index}</h1>
            </div>
        </Layout>
    );
}