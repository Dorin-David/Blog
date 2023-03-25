import BackDrop from './UI/BackDrop';
import NavLinks from './NavLinks';
import Search from './UI/Search';
import style from '../styles/components/nav-bar.module.css';

function NavBar(props) {
    return <nav className={style['nav-bar']}>
        <a href="/" onClick={ event => event.preventDefault() } className={style['main-header']}>Dintorni</a>    
        <NavLinks closeNavModal={props.onCloseNavModal}/>
        <Search />
        <BackDrop triggerBackdrop={props.clickNavButton} />
    </nav>
}

export default NavBar