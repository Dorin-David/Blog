import Link from 'next/link';
import style from '../styles/components/nav-bar.module.css';

function NavLinks(props) {
    return (<div className={style['nav-links']}>
        <Link href='/' onClick={props.closeNavModal} >Home</Link>
        <Link href='/categorie' onClick={props.closeNavModal} >Esplora</Link>
        <Link href='/autori' onClick={props.closeNavModal} >Autori </Link>
        <Link href='/about' onClick={props.closeNavModal} >Progetto </Link>
    </div>)
}

export default NavLinks