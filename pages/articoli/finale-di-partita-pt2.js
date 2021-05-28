import { useRouter } from 'next/router';
import Link from 'next/link';
import ArticleWrapper from '../../components/Articles/Article';
import style from '../../styles/components/article.module.css';

function Article() {
    const router = useRouter()

    return <ArticleWrapper>
        <h1>Adorno e “Finale di partita” (parte seconda)</h1>
        <p className={style.author} 
        onClick={() => router.push('/autori/luigi-rizzo')}>Luigi Rizzo</p>
          <p className={style.info}>(Questo articolo è parte di una serie. Potete trovare gli altri articoli <Link href="/raccolte/adorno-legge-beckett">qui</Link>)</p>
      <p>
Il lavoro di demolizione beckettiano si radica in maniera incisiva ed evidente soprattutto nella sfera del linguaggio. 
Beckett si libera dell’illusione che gli avvenimenti siano di per sé significanti, insinuando volutamente ambiguità e polivalenze 
che la stessa parola “senso” provoca. Il linguaggio impiegato in Finale di Partita è fortemente regressivo. “La logica del disincanto”, 
portata al limite da Beckett, satura tutti gli elementi della rappresentazione teatrale e penetra prima nelle parole, e poi soprattutto nel 
senso complessivo dell’opera. <br />
Finale di partita è un lavoro teatrale dove emerge l’assenza di un pensiero metafisico positivo. Paradossalmente però, l’apparizione della 
suddetta mancanza diventa legge della forma drammatica. Proprio questa legge va a perturbare il linguaggio dell’opera, che diviene una vera 
e propria insensatezza organizzata. Questo “scoppio del senso metafisico” travolge ogni nesso significante linguistico ed esclude 
di conseguenza ogni possibilità di ricercare un senso per mezzo di qualunque filosofia. Quel che rimane del pensiero è una sua 
riduzione a “materia di secondo grado” e come tale viene utilizzato. Secondo Adorno quella di Beckett non è affatto una mera operazione formale. 
La riduzione del pensiero a scarto materiale richiama in maniera esplicita la condizione in cui sopravvive lo spirito umano nell’odierno contesto sociale. 
A proposito di ciò aggiunge amaramente Adorno che «lo spirito stesso si dichiara come fondo di magazzino».
      </p>
    </ArticleWrapper>
}

export default Article

/*


*/