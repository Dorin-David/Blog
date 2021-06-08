import Link from 'next/link';
import style from '../styles/components/nav-bar.module.css';


function NavLinks() {
    {/* thanks to @CorwinCZ for the below workaround, https://github.com/vercel/next.js/issues/1490 */}
    return (<div className={style['nav-links']}>
            <div>
                <a href='/'>Home</a>
            </div>
        <Link href='/categorie'>
            <div>
                <a>Esplora</a>
            </div>
        </Link>
        <Link href='/autori'>
            <div>
                <a>Autori</a>
            </div>
        </Link>
        <Link href='/about'>
            <div>
                <a>Progetto</a>
            </div>
        </Link>
    </div>)
}

export default NavLinks