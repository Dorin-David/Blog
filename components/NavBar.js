import BackDrop from './UI/BackDrop';
import NavLinks from './NavLinks';
import Search from './UI/Search';
import style from '../styles/components/nav-bar.module.css';

function NavBar(props) {
    return <nav className={style['nav-bar']}>
       {/* <Link href="/"> */}
       <h1 className={style['main-header']}><a href="/">Dintorni</a></h1>
       {/* </Link> */}
        
        <NavLinks />
        <Search />
        <BackDrop triggerBackdrop={props.clickNavButton} />

    </nav>
}

export default NavBar