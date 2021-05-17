import Link from 'next/link';
import style from '../styles/components/nav-bar.module.css';


function NavLinks(props) {
    return (<div className={style['nav-links']}>
   {/* thanks to @CorwinCZ for the below workaround, https://github.com/vercel/next.js/issues/1490 */}

        <Link href='/'>
            <div>
                <a onClick={props.onNavigation}>Home</a>
            </div>
        </Link>
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