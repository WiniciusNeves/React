import Layout from '../components/layout';
import styles from './styles.module.css'
export default function Styles() {
    return (

        <Layout title="Estilo">
            <div className={styles.roxo}>
                <h1>Estilo</h1>
                <p>Estilo CSS</p>
            </div>
        </Layout>
    );
}