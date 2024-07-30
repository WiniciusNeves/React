import { Inter } from "next/font/google";
import Layout from "@/components/layout";
import Tab from "@/components/tab";
import Button from "@/components/button";
import Form from "@/components/form";
import useClients from "@/hooks/useClients";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const {
    client,
    clients,
    formVisible,
    exibirTab,
    selectClient,
    deleteClient,
    newClient,
    newClientForm
  } = useClients();

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-600 to-purple-500 text-white">
      <Layout titulo="Home">
        {formVisible ? (
          <Form
            client={client}
            exit={exibirTab}
            create={newClient}
          />
        ) : (
          <>
            <div className="flex justify-end">
              <Button cor="green" className="mb-4" onClick={newClientForm}> Novo Cliente </Button>
            </div>
            <Tab clients={clients} selectClient={selectClient} deleteClient={deleteClient} />
          </>
        )}
      </Layout>
    </div>
  );
}
