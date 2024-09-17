import Link from "next/link";
import styles from './styles.module.scss'

export function HeaderMenu() {

    return (
        <ul className={styles.menu}>
            <li>
                <Link href={"/"}>Página Inícial</Link>
            </li>
            <li>
                <Link href={"/sobrenos"}>Sobre nós</Link>
            </li>
            <li>
                <Link href={"/eventos"}>Eventos</Link>
            </li>
            <li>
                <Link href={"/planos"}>Planos</Link>
            </li>
            <li>
                <Link href={"/contatos"}>Contatos</Link>
            </li>
        </ul>
    )
}