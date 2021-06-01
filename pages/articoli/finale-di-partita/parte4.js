import { useRouter } from 'next/router';
import Link from 'next/link';
import ArticleWrapper from '../../../components/Articles/Article';
import style from '../../../styles/components/article.module.css';

function Article() {
    const router = useRouter()

    return <ArticleWrapper>
        <h1>Adorno e “Finale di partita” </h1>
        <h2>(parte quarta)</h2>
        <p className={style.author} 
        onClick={() => router.push('/autori/luigi-rizzo')}>Luigi Rizzo</p>
          <p className={style.info}>(Questo articolo è parte di una serie. Potete trovare gli altri articoli <Link href="/raccolte/adorno-legge-beckett">qui</Link>)</p>
   <p>
   Ogni dialogo di <span>Fin de partie</span> è prosciugato al limite ed ogni parola è ammutolita in gesto. Quel che
rimane della storia è un residuo depositatosi nelle vuote conversazioni dei personaggi. Adorno
ribadisce e sottolinea l’importanza di un’operazione particolare condotta da Beckett: stiamo
parlando dell’atto dell’omettere. Si percepisce in maniera piuttosto evidente che nella lettura degli
scritti beckettiani sia stato omesso un qualcosa, si intravede l’alone di una mancanza. Ma il fatto
che in questo caso venga sottratto un qualcosa, secondo Adorno, presuppone che quel qualcosa
sopravvive proprio perché è stato evitato, eliminato. Prima si faceva riferimento al chiaro
collegamento che intercorre tra il lavoro beckettiano e la condizione sociale in cui si inserisce.
Quella di Samuel Beckett è sicuramente una rappresentazione della regressione del mondo in cui
vive. Ma per il filosofo, anche in questo, l’artista pone un distacco nei confronti di quella
letteratura che si ferma alla mera descrizione o al mero “rispecchiamento” del reale. Per
comprendere meglio questa posizione risultano essenziali le parole di Ernst Fisher, pronunciate in
un dibattito televisivo riguardante la trasposizione cinematografica dell’opera beckettiana
Comédie. Con l’approvazione di Adorno Fisher afferma: <br />
«Ringraziando dio, ciò che fa Beckett non ha più nulla a che vedere con il rispecchiamento della
realtà. Beckett è la realtà. Commedia è la realtà: non il suo rispecchiamento o la sua imitazione o
la sua riproduzione. È la situazione specifica, non la conditio humana in generale…» <br />
La stessa cosa vale per Finale di partita. Anche quest’opera, dunque, preserva una particolare
importanza storica che si traduce nella «conditio humana del nostro tempo». L’autore irlandese
spiega infatti come questo mondo obbedisca in maniera fedele «alla legge della regressione». Ma
ancor peggio, aggiunge che questo mondo non dispone nemmeno più di «un concetto
contrastante da poterle opporre». Se possiamo definire “di protesta” la rappresentazione teatrale
esaminata finora, bisogna sicuramente aggiungere l’aggettivo “silenziosa”, perché solamente «in
silenzio si può nominare il nome della sciagura». Finale di partita è un lamento silente che esprime
l’impossibilità del lamento stesso. Le parole adorniane qui di seguito richiamano ad un’immagine
molto efficace che aiuta a comprendere meglio i concetti fino ad ora espressi: <br />
«Ma nello spirito deve ancora riflettersi il lamento che ormai non è più possibile nessun lamento.
Nessun pianto scioglie la corazza: rimane solo il volto su cui le lacrime si sono disseccate».
   </p>
    </ArticleWrapper>
}

export default Article