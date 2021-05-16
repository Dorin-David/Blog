import { useRouter } from 'next/router';
import ArticleWrapper from '../../components/Articles/Article';
import style from '../../styles/components/article.module.css';


function Article(){
    const router = useRouter();

    return (<ArticleWrapper>
         <h1>L'artista</h1>
         <h2>Ovvero il lebbroso</h2>
         <p className={style.author} 
        onClick={() => router.push('/autori/dorin_david')}>Dorin David</p>
         <p>
             L’artista non può avere un ruolo. Glielo attribuiscono gli altri, dopo, come si attribuiscono arbitrarie proprietà e descrizioni alla Natura. 
             Un artista che sia cosciente del suo compito sarebbe come un’ape che, volando di fiore in fiore, commenti tra sé e sé: devo raccogliere il polline, portarlo all’alveare, il mio lavoro è vitale per l’equilibrio della Natura, 
             o un qualche mammifero che consulti il calendario per ricordarsi di andare in letargo. Il vero artista è incosciente, non sa il perché e il come del suo operato. Ed è proprio nella misura in cui sono inconsci, 
             “semplici” strumenti, che il loro lavoro è fondamentale: essi sono un ponte tra l’ordinario e il Mistero, sono gli iniziati e i guardiani del cancello verso l’ignoto dentro ognuno di noi.  Umili traghettatori, niente più. 
             Quando l’artista inizia a commentare l’arte, a lamentarsi dell’incomprensione della massa, a battersi il petto, diventa un patetico verme o un usurpatore. Si prende meriti che non gli spettano, come un barcaiolo che si vanti della maestosità del fiume che lo traghetta. 
             Non è da biasimare troppo: è anche lui umano, anzi doppiamente umano, visto che gli artisti non si staccano mai completamente dall’infantilismo (non che gli uomini ordinari lo facciano; si può forse dire che l’artista è più bambino, l’uomo comune è bambinesco). 
             Se lo facessero, si sradicherebbero dal terreno che li nutre. Il vero artista è raro, e si vergogna a definirsi tale. Per lui l’arte, o meglio la creazione, è un fenomeno naturale, fisiologico. Chiedere a un vero artista se ama ciò che fa sarebbe come chiedere a un uomo se ami respirare. 
             Teatro di contraddizioni, vittima di incessanti lotte intestine, la forma lo ripugna e lo affascina; la vita, per lui, è Madre e Nemica a un tempo. Metà umano, metà spettro, non appartiene né al qui, né all’aldilà; è sempre in ritardo, o troppo in anticipo. Se iniziano a comprenderlo, il suo compito è finito, non ha più nulla da dire. 
             La sua unica, possibile felicità è fuori dall’arte o nell’accettazione, genuina, umile, della sua condizione di lebbroso. Per fortuna non sono un vero artista. 
         </p>
    </ArticleWrapper>)
}

export default Article