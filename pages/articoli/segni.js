import { useRouter } from 'next/router';
import ArticleWrapper from '../../components/Articles/Article';
import style from '../../styles/components/article.module.css';


function Article(){
    const router = useRouter();

    return (<ArticleWrapper>
         <h1>Segni</h1>
         <h2>Pensieri in una notte di primavera</h2>
         <p className={style.author} 
        onClick={() => router.push('/autori/dorin_david')}>Dorin David</p>
         <p>
         E’ sempre nelle piccole cose, nei dettagli, che si trova il Tutto. Perché nel dettaglio sta ciò che rende unico qualcosa, oppure esso 
         è solo una banale appendice, superfluo; in ogni caso, è partendo dal dettaglio si può risalire all’essenziale, come si risale da una foglia 
         al tronco e alle radici. Sono le piccole cose che ci ricordano chi la lasciato un’impronta su di noi; e questi segni sono i nodi di una rete 
         più grande, e all’improvviso, faccendo qualcosa di banale, ricordiamo sorridendo di chi ci è stato caro (lo sono ancora, in fondo, se ce ne 
         ricordiamo: la dimenticanza è la più grande prova della fine di un rapporto). E ora che scrivo, che mi specchio, le associazioni 
         si legano le une alle altre, e mi vengono in mente persone che non sentirò mai più, e luoghi banali addolciti dalla solita 
         “memoria che magnifica i ricordi belli”, luoghi e pomeriggi altrettanto banali a cui ora penso con il sollievo di chi sa che non dovrà tornare. 
         E mi sembra tutto bello, tutto necessario, nella mia stupenda casa in una notte primaverile, chissà che cosa stanno faccendo tutti, a cosa pensano, con chi sono. 
         </p>
         <p className={style.date}>marzo 2021</p>
         <p className={style.credit}>(Immagine: "Memory", 1948, Rene Magritte)</p>
    </ArticleWrapper>)
}

export default Article