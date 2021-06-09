import { useRouter } from 'next/router';
import Link from 'next/link';
import ArticleWrapper from '../../../components/Articles/Article';;
import style from '../../../styles/components/article.module.css';

function Article() {
    const router = useRouter();

    return (<ArticleWrapper>
        <h1>Lo Yoga</h1>
        <h2>Introduzione (parte seconda)</h2>
        <p className={style.author}
            onClick={() => router.push('/autori/dorin_david')}>Dorin David</p>
                    <p className={style.info}>(Questo articolo è parte di una serie. Potete trovare gli altri articoli <Link href="/raccolte/lo-yoga-mircea-eliade">qui</Link>)</p>
   <p>
   La coscienza europea ha iniziato a comprendere meglio la filosofia indiana quando ha iniziato a studiare i fattori che “condizionano” l’essere 
   umano: la fisiologia, l’eredità, l’ambiente, la cultura e, soprattutto, la Storia, la propria vicenda personale in un dato momento storico. 
   “La <span>condizione umana</span>”, scrive Eliade, “costituisce l’oggetto della filosofia europea più recente”. In particolare la <span>temporalità</span>, giacché è 
   la temporalità che permette tutti gli altri condizionamenti. Ed è proprio questo il punto centrale (insieme al suo corollario, 
   il “decondizionamento”) di tutta la filosofia indiana a partire dalle Upanishad. Non a caso, nota Eliade, si è detto che la filosofia indiana 
   è stata, ed è tutt’ora, “esistenzialista”. Perciò egli invita gli occidentali a studiare un’esperienza millenaria per cercare, se non proprio 
   risposte, spunti per le nostre domande più pressanti; a comprendere ciò che l’India ha da dire sui molteplici “condizionamenti” dell’essere 
   umano; come ha affrontato il problema della sua temporalità e storicità, e soprattutto la soluzione che ha proposto per l’angoscia e la 
   disperazione che scaturiscono dalla presa di coscienza della propria condizione; in altre parole, della propria finitezza. Per cercare 
   di vedere oltre l’esistenza condizionata, millenni prima della psicologia del profondo, i saggi indiani hanno esplorato le zone più profonde 
   e oscure dell’inconscio; e hanno scoperto che i condizionamenti esterni non sono poi difficili da superare; è dai <span>samskara</span> e dai <span>vasa</span> (“impregnazioni”, “residui”, “stati latenti”), 
   da ciò che la psicologia del profondo chiamerebbe i contenuti e le strutture dell’inconscio, che sorgono i grandi ostacoli alla vita ascetica. <br />
  Ma non si tratta, qui, solo di conoscere. Eliade lo sottolinea questo punto innumerevoli volte. La filosofia indiana, come ogni altra 
  via di liberazione (taoismo, buddismo ecc) non si accontenta della gnosi; la conoscenza è solo un mezzo (la Dottrina, dice il Buddha, 
  è solo una barca da utilizzare per arrivare dall’altra parte); si lavora sui contenuti dell’inconscio per “bruciarli”. L’analogia con la 
  psicologia non è casuale. Terence McKenna ha definito Eliade (almeno per quanto riguarda lo studio delle religioni) l’erede di Carl Gustav Jung 
  (il quale ha scritto, tra l’altro, <span>La psicologia del Kundalini-Yoga</span> e <span>Lo Yoga e l'Occidente</span>, quest’ultimo pubblicato l’anno della prima edizione 
  dello <span>Yoga</span> di Eliade). Jung, lasciatosi alle spalle il positivismo di Freud, pensava che le religioni fossero <span>prodotti spontanei</span> della psiche umana, 
  un tentativo di comprendere l’inconscio (personale e collettivo) tramite miti e simboli. E i miti e i simboli sono i prodotti di un’infinità di fattori, 
  culturali e storici, ma dietro di essi, indipendentemente dalla cultura e dal tempo storico, si nascondono gli stessi grandi interrogativi. 
  Eliade, ben sapendo ciò, ci invita ad andare <span>oltre la terminologia</span>. Termini come “storia” e “tempo” sono quasi ignorati dalla cultura indiana; 
  la sua mitologia utilizza una terminologia cosmologica, ma leggendo attentamente ci accorgiamo che è sempre dell’essere umano che si parla, e che un termine come <span>maya</span> (“illusione”, “illusione cosmica”, “miraggio”), 
  in quanto indica una dimensione che non partecipa all’Essere ma è solo “divenire”, “temporalità”, può essere analogo a “storia”, è divenire cosmico ma è anche divenire storico. 
  Per rendersene conto, scrive Eliade, basta leggere la <span>Bhagavad-Gita</span> (vi torneremo più avanti), dove l’analisi della condizione umana è “svolta in un linguaggio che ci è familiare” 
  (e dove le soluzioni proposte rappresentano diverse applicazioni dello Yoga). <br />
  Pur avendo studiato e praticato lo yoga per anni, Eliade sa benissimo che i nostri modelli mentali sono diversi da quelli indiani; non possiamo accettare ciecamente 
  le soluzioni proposte dall’India: “un valore spirituale non si acquista come un’automobile di nuova marca”. Egli invita a un’esplorazione della psiche, 
  non a un “detestabile ibridismo spirituale” (ovvero la ginnastica all’incenso che, oggi, possiamo praticare nelle periferie delle nostre misere città); 
  invita a superare il provincialismo culturale, a pensare in termini di Storia Universale e, soprattutto, a creare <span>valori spirituali universali</span>. 
   </p>

    </ArticleWrapper>)
}

export default Article