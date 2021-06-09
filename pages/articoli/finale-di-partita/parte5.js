import { useRouter } from 'next/router';
import Link from 'next/link';
import ArticleWrapper from '../../../components/Articles/Article';
import ArticlesArrow from '../../../components/UI/ArticlesArrows';
import style from '../../../styles/components/article.module.css';

function Article() {
    const router = useRouter()

    return <ArticleWrapper>
        <h1>Adorno e “Finale di partita” </h1>
        <h2>(parte quinta)</h2>
        <p className={style.author} 
        onClick={() => router.push('/autori/luigi-rizzo')}>Luigi Rizzo</p>
          <p className={style.info}>(Questo articolo è parte di una serie. Potete trovare gli altri articoli <Link href="/raccolte/adorno-legge-beckett">qui</Link>)</p>
   <p>
   Dalle rappresentazioni teatrali di Beckett appare una completa indifferenza tra interno ed esterno.
Ogni soggettività è completamente vuota ed ogni personaggio è annientato nella propria
personalità e corporeità. I personaggi beckettiani sono infatti contraddistinti da vere e proprie
mutilazioni corporee. In <span> Finale di partita </span> ad esempio Hamm è in sedia rotelle ed è
cieco; Clov è incapace di sedersi e cammina con un’andatura poco dinamica; Nell e Nagg, i genitori
di Hamm, sono invece letteralmente abbandonati dentro a due bidoni della spazzatura.
Mutilazioni queste, che appartengono a vuote identità di individui, stagnanti in uno stato di
radicale annientamento. Beckett fa implodere l’individuo sostanziale della tradizione; insinua la
non-identità nell’identità e procura ad ogni soggetto una disperata incapacità di riconoscersi
identico a sé medesimo. Ma Adorno in merito a ciò aggiunge di più e scrive: <br />
«Ma non appena il soggetto non è più con certezza identico a se stesso, non è più un nesso
significante in sé concluso, ecco che anche il confine che lo separa dall’esterno si dilegua, e le
situazioni dell’interiorità diventano contemporaneamente situazioni della natura fisica» <br />
Ecco riemergere palesemente il contesto prima anticipato. Radicale è l’indifferenza che intercorre
tra interno ed esterno, tra uomo e natura e quindi tra quest’ultima e il processo di reificazione.
L’unità storica dell’identità è quindi completamente travolta e dissolta da quel carattere non-
identico, non affermativo che Adorno andava cercando nell’opera di Beckett e nell’arte in genere.
   </p>
   <ArticlesArrow arrowSxLink='/articoli/finale-di-partita/parte4' arrowDxLink={null} />
    </ArticleWrapper>
}

export default Article