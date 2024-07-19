import Link from "next/link";
import styles from "../styles/nav.module.css";
export default function Nav(props) {
    return (
        <nav className={styles.header}>
            <ul className={styles.menu}>
                <li className={styles.item}>
                    <Link href={props.destino}>{props.texto}</Link>
                </li>
            </ul>
        </nav>
    );
}