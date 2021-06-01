import { useRouter } from 'next/router';
import Link from 'next/link';
import ArticleWrapper from '../../../components/Articles/Article';
import style from '../../../styles/components/article.module.css';

function Article() {
    const router = useRouter()

    return <ArticleWrapper>
        <h1>Adorno e “Finale di partita” </h1>
        <h2>(parte terza)</h2>
        <p className={style.author} 
        onClick={() => router.push('/autori/luigi-rizzo')}>Luigi Rizzo</p>
          <p className={style.info}>(Questo articolo è parte di una serie. Potete trovare gli altri articoli <Link href="/raccolte/adorno-legge-beckett">qui</Link>)</p>
      <p>
      Prima di arrivare a parlare del “realismo beckettiano”, torniamo a descrivere la natura enigmatica
del lavoro teatrale in questione. Il contesto in cui si svolge il dramma lascia presagire che sia post-apocalittico. 
I dialoghi spesso inconsistenti dei due personaggi, Clov e Hamm, lasciano intendere
silentemente di essere sopravvissuti ad una catastrofe. Adorno però spiega che tale catastrofe
riecheggia un momento storico particolare, ovvero le vicende della Seconda guerra mondiale. A
tale conflitto però aggiunge essenzialmente il filosofo che «non possono sopravvivere nemmeno i
sopravvissuti» e che sulle macerie l’umanità continua a vegetare, senza avere nessuna possibilità
di meditare coscientemente su ciò che è accaduto. Proprio per questo motivo, la catastrofe non è
mai citata esplicitamente e le sue dinamiche appaiono implicite durante lo svolgimento dell’opera. <br />
Tutto è morto in Finale di partita, la natura stessa è indistinguibile dall’operato umano, perché il
processo di reificazione l’ha cancellata. Ciò che finora è stato detto circa l’ambientazione di
quest’opera, aiuta a delineare quella che Adorno stesso definisce «la fase della catastrofe
permanente», condotta dall’umanità stessa. In questo modo capiamo meglio come Beckett
preservi il momento temporale a differenza dell’esistenzialismo. Ma la sua operazione non si
arresta a questo. Infatti lo scrittore irlandese decide di “salvare” ciò che la tendenza storica è solita
liquidare: il soggetto. Nonostante ciò, l’esistenza che in questo frangente viene salvata è portata
volutamente a diventare pura astrattezza, tautologia e quindi un’astratta risoluzione di
uguaglianza. Ecco che emerge l’atteggiamento parodico di Samuel Beckett verso quelle filosofie
che fanno del soggetto un fondamento, una pura celebrazione. L’irlandese porta all’assurdo la
categoria di esistenza smascherandola nelle vesti di un’astrattezza ontologica.
      </p>
    </ArticleWrapper>
}

export default Article