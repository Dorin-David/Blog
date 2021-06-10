import { useRouter } from 'next/router';
import Link from 'next/link';
import ArticleWrapper from '../../../components/Articles/Article';
import ArticlesArrow from '../../../components/UI/ArticlesArrows';
import style from '../../../styles/components/article.module.css';

function Article() {
    const router = useRouter()

    return <ArticleWrapper>
        <h1>Adorno e “Finale di partita” </h1>
        <h2>(parte sesta)</h2>
        <p className={style.author} 
        onClick={() => router.push('/autori/luigi-rizzo')}>Luigi Rizzo</p>
          <p className={style.info}>(Questo articolo è parte di una serie. Potete trovare gli altri articoli <Link href="/raccolte/adorno-legge-beckett">qui</Link>)</p>
   <p>
   Ogni soggettività che si incontra nell’opera dell’irlandese è contraddistinta da un fare
schizofrenico. Le azioni sono fatte ripetere in maniera frequente e compulsiva, arrivando così a
svuotarsi di ogni sensatezza. Un caso esemplare è quello di Clov, che continuerà imperterrito a
spiare dalla finestra e a spostare in carrozzella il compagno Hamm senza mete e fini ben definiti.
Sia dalle movenze che dalla componente comunicativa emerge un importante elemento di follia.
Tale aspetto pare rimanga sempre costante durante lo svolgimento della vicenda. Così Beckett
estrapola ciò che aleggia dietro la facciata comunicativa e lo condanna ad apparire. Manda in
scena ciò che comunemente si evita di prendere in considerazione, ciò che solitamente impaurisce
e al quale si risponde con un severo rigetto. Le conversazioni e le azioni dei personaggi di <span>Fin de partie </span>, dice Adorno, 
sono «strappate al flusso della schizofrenia» al fine di portare a mera superfluità «ciò che il soggetto è comunque ancora in grado di fare». 
I comportamenti sopra descritti appaiono di primo acchito vicini all’umorismo dei clown, ma in questo caso la risata
indotta soffoca i ridenti. Clov stesso ammette di non poter «più ridere a crepapelle, oggi».
L’umorismo impiegato è invecchiato, ripugnante, ormai privo di una qualsiasi possibilità
conciliativa che permetta la risata. Il teatro di Beckett condanna quel riso che, secondo il filosofo
francofortese, è macchiato colpevolmente di brutalità. È proprio dalle differenti e scolorite battute
“comiche” a sopraggiungere quella brutalità meschina, che connota le parole di Hamm rivolte ai
suoi genitori: <br />
- NAGG La mia pappa! <br />
- HAMM Maledetto progenitore! <br />
- NAGG La mia pappa! <br />
- HAMM Ah, la vecchiaia moderna! Mangiare, mangiare, non pensano ad altro. <br />
Come si può vedere dalla conversazione appena riportata è evidente il capovolgimento di ruoli
innestato tra le categorie di genitori e di figli. Hamm da figlio deve nutrire i genitori Nagg e Nell
che si comportano da veri e propri bambini. La brutalità insinuata da Beckett degenera nello
sdegno verso gli anziani. I genitori in questione vengono considerati come veri e propri scarti
organici, costretti successivamente a doversi dividere in due l’ultimo biscotto. L’autore irlandese
traduce in fatti quel che quotidianamente viene detto a proposito degli anziani. I vecchi, si dice,
sono “buttati nella spazzatura” e in <span>Finale di partita </span> questo si concretizza. Il
silenzio è l’atteggiamento di risposta a tale inumanità. Le parole stesse del dramma beckettiano
disturbano l’assenza di suoni e parole. Gli interlocutori sono «asmatici da ammutolire […] e
balbettano frasi protocollari». Tutto sembra infatti protendere verso un atteso silenzio, tanto che
Hamm ad un certo punto perde il filo del suo discorso ed afferma che «fra poco si rompe tutto.
Non ci sarà più voce». Nella sua riflessione Adorno mette in risalto una certa inclinazione alla
morte da parte di Clov, che si traduce in una particolare propensione verso la stasi e dunque verso
il silenzio preso in esame finora.
   </p>
   <ArticlesArrow arrowSxLink='/articoli/finale-di-partita/parte5' arrowDxLink={null} />
    </ArticleWrapper>
}

export default Article