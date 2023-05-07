import Link from 'next/link';
import NavLinks from './NavLinks';
import style from './styles/nav-bar.module.scss';

function NavBar(props) {
    return <nav className={style['nav-bar']}>
        <Link href="/" className={style['main-header']}>Work in Progress</Link>    
        <NavLinks closeNavModal={props.onCloseNavModal}/>
    </nav>
}

export default NavBar