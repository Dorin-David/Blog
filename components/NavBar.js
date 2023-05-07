import Link from 'next/link';
import BackDrop from './UI/BackDrop';
import NavLinks from './NavLinks';
import Search from './UI/Search';
import style from './styles/nav-bar.module.scss';

function NavBar(props) {
    return <nav className={style['nav-bar']}>
        <Link href="/" className={style['main-header']}>Dintorni</Link>    
        <NavLinks closeNavModal={props.onCloseNavModal}/>
        <Search />
        <BackDrop triggerBackdrop={props.clickNavButton} />
    </nav>
}

export default NavBar