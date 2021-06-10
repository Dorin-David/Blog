import ArticleWrapper from '../../components/Articles/Article';
import style from '../../styles/components/article.module.css'

function Article(){

    return (<ArticleWrapper>
         <p>
         E’ sempre nelle piccole cose, nei dettagli, che si trova il Tutto. Perché nel dettaglio sta ciò che rende unico qualcosa, oppure esso 
         è solo una banale appendice, superfluo; in ogni caso, è partendo dal dettaglio che si può risalire all’essenziale, come si risale da una foglia 
         al tronco e alle radici. Sono le piccole cose che ci ricordano chi lasciato un’impronta su di noi; e questi segni sono i nodi di una rete 
         più grande, e all’improvviso, facendo qualcosa di banale, ricordiamo sorridendo chi ci è stato caro (lo sono ancora, in fondo, se ce ne 
         ricordiamo: la dimenticanza è la più grande prova della fine di un rapporto). E ora che scrivo, che mi specchio, le associazioni 
         si legano le une alle altre, e mi vengono in mente persone che non sentirò mai più, e luoghi banali addolciti dalla solita 
         “memoria che magnifica i ricordi belli”, luoghi e pomeriggi altrettanto banali a cui ora penso con il sollievo di chi sa che non dovrà tornare. 
         E mi sembra tutto bello, tutto necessario, nella mia stupenda casa in una notte primaverile, chissà che cosa stanno facendo tutti, a cosa pensano, con chi sono. 
         </p>
         <p className={style.date}>marzo 2021</p>
         <p className={style.credit}>(Immagine: "Memory", 1948, Rene Magritte)</p>
    </ArticleWrapper>)
}

export default Article