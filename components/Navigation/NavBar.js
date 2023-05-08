import Link from 'next/link';
import style from './styles/nav-bar.module.scss';

function NavBar(props) {
    return <nav className={style['nav-bar']}>
        <Link href="/" className={style['main-header']}>Work in Progress</Link>
        <Link href="/test">Test</Link>       
    </nav>
}

export default NavBar