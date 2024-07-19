import Link from 'next/link';
import styles from '../styles/layout.module.css'

export default function Layout({ children, title }) {
    return (
        <div className={styles.layout}>
            <div className={styles.header}>
                <h1>{title}</h1>
                <Link href="/">volta</Link>
            </div>
            <div className={styles.conteudo}>
                {children}
            </div>
        </div>
    );
}
