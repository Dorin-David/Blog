import { useRouter } from 'next/router'
import ArticleWrapper from '../../components/Articles/Article';
import style from '../../styles/components/article.module.css';

function Article() {
    const router = useRouter()

    return <ArticleWrapper>
        <h1>Adorno e "Finale di Partita"</h1>
        <p className={style.author} 
        onClick={() => router.push('/autori/luigi-rizzo')}>Luigi Rizzo</p>
          <p className={style.info}>(Questo articolo è il primo di una serie. Potete trovare gli altri articoli a [rubrica])</p>
        <p>
        Adorno e “Finale di partita”
<span>Tentativo di capire il “Finale di partita” </span> è un saggio che Adorno termina all’inizio del 1961 e che pubblica in <span>Note per la letteratura</span>. 
Questo scritto porta con sé un’importanza singolare perché oltre ad essere dedicato esplicitamente a Beckett, è anche il primo saggio del filosofo di Francoforte che 
entra nel profondo di un’opera in particolare dell’artista irlandese. Finale di partita è il titolo dello scritto in questione ed è una rappresentazione teatrale 
portata a termine da Beckett nel 1956. <br />
Ciò che in prima analisi possiamo portare ad emergere dallo scritto adorniano è l’individuazione di un filo conduttore che parte da Franz Kafka, passa per James Joyce ed arriva a Samuel Beckett. 
In tutti questi tre grandi scrittori è presente la tendenza di tutta la letteratura più recente. La categoria dell’assurdità ed anche tutto il lavoro-studio sul linguaggio caratterizza particolarmente le produzioni artistiche in questione. 
Ciò che però può essere motivo di “inganno” è che la categoria dell’assurdo è riscontrabile anche in tutto l’esistenzialismo. L’intento di Adorno infatti è quello di rimarcare lo stacco, la differenza che intercorre fra Beckett e la corrente letteraria-filosofica appena citata. 
La tendenza esistenzialista mira ad un conformismo, ad un “dover essere quel che si è” dando così «accessibilità di ogni spiegazione logica». In opposizione a questo atteggiamento Beckett invece riesce a svincolare da secondi fini il procedimento poetico. 
Ciò che differenzia Beckett da buona parte della letteratura a sé contemporanea è l’ostinata tendenza al rifiuto, alla negazione. Dagli scritti beckettiani infatti si percepisce la negazione di quell’universalità teorica protesa ad una durevolezza, che è tipica dell’esistenzialismo. 
Per Adorno l’esistenzialismo rimane aggrappato al concetto formale di esistenza. Cancella l’attenzione per il momento temporale e di conseguenza per quel “particolare”, caro alla “dialettica negativa” del filosofo francofortese. Ogni qual volta che incontriamo in Beckett una dottrina o teoria filosofica, 
la troviamo portata volutamente all’estremo della sua depravazione. A dirla con Bertinetti: Adorno ha «identificato filosoficamente il senso del dramma nella sua mancanza di senso». L’autore irlandese impone così nelle sue opere un rigido rifiuto nei confronti della sensatezza, dei significati e quindi in ultima analisi di tutta la cultura.
 </p>
    </ArticleWrapper>
}

export default Article

