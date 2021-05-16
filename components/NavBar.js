import Link from 'next/link';
import BackDrop from './UI/BackDrop';
import NavLinks from './NavLinks';
import style from '../styles/components/nav-bar.module.css';

function NavBar(props) {


    return <nav className={style['nav-bar']}>
        <Link href="/">
            <h1 className={style['main-header']}>Dintorni</h1>
        </Link>
       
        {/* <div className={style['nav-links']}>
            <Link href="/">Home</Link>
            <Link href="/categorie">Esplora</Link>
            <Link href="/autori">Autori</Link>
            <Link href="/about">Progetto</Link>
            <BiSearch className={style.search} />
        </div> */}
        <NavLinks />
        <BackDrop />

    </nav>
}

export default NavBar