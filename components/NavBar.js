import Link from 'next/link';
import BackDrop from './UI/BackDrop';
import NavLinks from './NavLinks';
import { BiSearch } from 'react-icons/bi';
import style from '../styles/components/nav-bar.module.css';

function NavBar(props) {
    return <nav className={style['nav-bar']}>
        <Link href="/">
            <h1 className={style['main-header']}>Dintorni</h1>
        </Link>
        <BiSearch className={style.search} style={{color: 'white'}} />
        <NavLinks/>
        <BackDrop triggerBackdrop={props.clickNavButton}/>
       
    </nav>
}

export default NavBar