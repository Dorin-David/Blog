import Link from 'next/link';
import { BiSearch } from 'react-icons/bi';
import style from '../styles/components/nav-bar.module.css'

function NavBar() {
    return <nav className={style['nav-bar']}>
        <Link href="/">
            <h1 className={style['main-header']}>Dintorni</h1>
        </Link>
        <Link href="/">Home</Link>
        <Link href="/categorie">Esplora</Link>
        <Link href="/about">About</Link>
        <BiSearch className={style.search} />
    </nav>
}

export default NavBar