import Link from 'next/link';
import { BiSearch } from 'react-icons/bi';
import style from '../styles/components/nav-bar.module.css';


function NavLinks() {
    return (<div className={style['nav-links']}>
        <Link href="/">Home</Link>
        <Link href="/categorie">Esplora</Link>
        <Link href="/autori">Autori</Link>
        <Link href="/about">Progetto</Link>
        <BiSearch className={style.search} />
    </div>)
}

export default NavLinks