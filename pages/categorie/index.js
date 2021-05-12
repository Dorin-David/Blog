import Link from 'next/link';

function Categorie(){
    return (<ul>
        <li><Link href="/categorie/racconti">Racconti</Link></li>
        <li><Link href="/categorie/saggi">Saggi</Link></li>
        <li><Link href="/categorie/poesia">Poesia</Link></li>
        </ul>)
}

export default Categorie