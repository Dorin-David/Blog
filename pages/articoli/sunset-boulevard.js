import { useRouter } from 'next/router';
import ArticleWrapper from '../../components/Articles/Article';
import style from '../../styles/components/article.module.css';


function Article(){
    const router = useRouter();

    return (<ArticleWrapper>
         <h1>Sunset Boulevard</h1>
         <p className={style.author} 
        onClick={() => router.push('/autori/bruno_lusardi')}>Bruno Lusardi</p>
           <p>
           Per chi non solo è interessato al Cinema, ma pure per chi ne
ha sentito parlare almeno una volta nella vita, il nome Billy
Wilder difficilmente può essere una sorpresa che faccia
alzare il sopracciglio. Allo stesso tempo, non si crede che
questo regista possa essere mai odiato, nemmeno da uno
spettatore moderno. Egli, può essere ignorato nella
sostanza; può essere ritenuto l’autore di film poco
raccomandabili (<span>Sabrina</span>); può essere parodiato, un poco
bistrattato: ma non può essere <span>distrutto</span>. Si dovesse voler
distruggere pure <span>Sunset Boulevard</span>, allora si dovrebbe voler
distruggere ogni pellicola o video. <br />
Billy Wilder è il primo che, avendo fra le mani l’arma da
fuoco e di fronte il nemico, sceglie di sparargli <span>di striscio</span>. Il
film, fotogramma per fotogramma, pare costruito per essere
uno dei migliori film (se non il migliore) della storia del
cinema; e ci si chieda se esiste opera d’arte che possa essere
costruita per essere la migliore opera <span>contro</span> la storia dell’arte
di cui ella fa parte, dolorosamente <span>ma</span> al sicuro. <br />
Louis B. Mayer, che era un magnate, dichiarò che Wilder
sputava sul piatto dove mangiava, al che Wilder gli chiese,
molto gentilmente, perché non andasse a farsi fottere: ciò fa
sorridere e godere. Questa potrebbe essere una battuta dello
sceneggiatore di <span>B-movies</span> che, narrante della storia del
<span>Viale</span>, per un “caso” (<span>Detour</span>, di Edgar G. Ulmer), si ritrova
sulla porta che dà su un mondo (cinema muto) ormai
appassito, fantasmatico e in rovina. <br />
Il narratore-personaggio, a dire il vero, come il Brás Cubas
di Machado de Assis, possiede una visione a 360 gradi, una
visione <span>ellittica</span>... Eppure si inchioda di fronte a questo
misterioso palazzo che pare abbandonato, una volta
scopertolo; e, da buongustaio qual è, citandosi Dickens nella
testa per noi spettatori ignoranti, ammaliato, incuriosito,
anziché fuggire mette il piede nella trappola. <br />
Se egli fosse fuggito come la lepre, il film sarebbe terminato
dopo dieci minuti. <span>Voyeur, egli deve entrare e vedere nella
dimora perché essa è... diversa</span>. <br />
Visto <span>ora</span>, questo film di Billy Wilder del 1950, pare,
realizzato a metà del primo secolo di Storia cinematografica,
oltre che l’<span>inno amaro</span> che Mayer non comprese o che
dovette dissimulare, l’idea materializzata della massima
opera filmica possibile secondo Wilder: probabile che per
questo Wilder sia Wilder. Tuttavia, <span>questa</span> idea non deve aver
attraversato solo la mente di Wilder e di certi suoi
collaboratori. Si vedano infatti gli <span>studios</span> come un corpo, il
quale si deteriora; si capisca come sia il corpo il contenitore
necessario e suolo fertile su cui la malattia si sviluppa e
manifesta, cervello a parte. Allo stesso modo, il corpo-
cinema può prendere coscienza della propria salute solo
ammalandosi. Successivamente, non arrivando la
guarigione, esso rimane convalescente.
  </p>
    </ArticleWrapper>)
}

export default Article