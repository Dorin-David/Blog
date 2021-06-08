import Link from 'next/link';
import style from '../styles/components/nav-bar.module.css';


function NavLinks(props) {
    {/* thanks to @CorwinCZ for the below workaround, https://github.com/vercel/next.js/issues/1490 */}
    return (<div className={style['nav-links']}>
            <div>
                <a  onClick={props.onNavigation}href='/'>Home</a>
            </div>
        <Link href='/categorie'>
            <div>
                <a onClick={props.onNavigation}>Esplora</a>
            </div>
        </Link>
        <Link href='/autori'>
            <div>
                <a onClick={props.onNavigation}>Autori</a>
            </div>
        </Link>
        <Link href='/about'>
            <div>
                <a onClick={props.onNavigation}>Progetto</a>
            </div>
        </Link>
    </div>)
}

export default NavLinks