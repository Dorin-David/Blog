import { useRouter } from 'next/router';
import Link from 'next/link';
import ArticleWrapper from '../../../components/Articles/Article';
import ArticlesArrow from '../../../components/UI/ArticlesArrows';
import style from '../../../styles/components/article.module.css';

function Article() {
    const router = useRouter();

    return (<ArticleWrapper>
        <h1>Lo Yoga</h1>
        <h2>Introduzione (parte prima)</h2>
        <p className={style.author}
            onClick={() => router.push('/autori/dorin_david')}>Dorin David</p>
                    <p className={style.info}>(Questo articolo è parte di una serie. Potete trovare gli altri articoli <Link href="/raccolte/lo-yoga-mircea-eliade">qui</Link>)</p>
        <p>
            Per il lettore contemporaneo il termine <span>yoga</span> non è più esoterico di <span>pilates</span> o <span>stretching</span>, e in effetti questi termini, nella sua testa,
         se proprio non si equivalgono probabilmente non si discostano molto. Ma prima di diventare una ginnastica con pretese spirituali, alla
         portata di donne incinte, tipi alternativi e borghesi col mal di schiena, lo yoga, quello vero, e la sua madre spirituale, l’India,
         erano quasi sconosciuti alla coscienza occidentale - e conservavano i loro misteri.
         Tra coloro che hanno facilitato l'incontro tra la due civiltà vi è Mircea Eliade (1907-1986),
         romeno trapiantato a Parigi, leader spirituale e intellettuale della propria generazione (amico di due grandi connazionali, Emil Cioran
         ed Eugène Ionesco), diventato in seguito uno dei più rispettati storici delle religioni al mondo. <br />
        A soli ventun anni, Eliade lascia Bucarest (salutato, si racconta, da uno stuolo di amici e ammiratori in lacrime) per Calcutta,
        dove studia per tre anni sotto la guida del Prof. Surendranath Dasgupta, per poi soggiornare sei mesi in un <span>acram</span> sull’Himalaya,
        dove mette in pratica ciò che ha studiato. La prima edizione dello <span>Yoga. Essai sur les origines de la mystique indienne</span> (scritta in inglese, tradotta in rumeno dallo stesso Eliade e ritradotta “da altri” in francese) è del 1936. Ben salutata da molti indianisti e in generale
        dagli intellettuali dell’epoca, nella ristampa del 1967 Eliade (ormai professore di Storia delle Religioni a Chicago) ne prende le distanze proponendoci un’opera interamente rivista:
        “Eccetto qualche paragrafo, il libro è stato interamente riscritto per adeguarlo il più possibile alle mie opinioni attuali”.
         </p>

        <p className={style['section-title']}>Un incontro affascinante</p>

        <p>
            “L’analisi di una cultura straniera”, nota Eliade nella premessa, “tende soprattutto a rivelare ciò che vi si cercava o ciò che già si era predisposti a scoprirvi”.
            Persino eccellenti esploratori ed etnologi, nel XIX secolo, giudicavano le culture esotiche attraverso le lenti di un “atteggiamento positivistico, antireligioso e antimetafisico”
            dei loro contemporanei Comte, Darwin, Herbert Spencer. Essi tacciavano filosofie antichissime di “feticismo” e “infantilismo religioso”, giudicando culture come quella indiana, semplicemente, “società inferiori”. <br />
            La generazione di Eliade poteva basarsi sui lavori di grandi studiosi che avevano imparato a “non ripetere gli errori dei precursori”. Ma soprattutto, essa germogliava in un terreno più fertile: l’orientamento culturale e spirituale europeo,
            infatti, stava rapidamente evolvendo: lo sviluppo metafisico, la rinascita religiosa, la psicologia del profondo, la microfisica e la poesia avevano permesso una nuova prospettiva.
            La vecchia e stanca Europa poteva iniziare a “comprendere l’orizzonte spirituale dei ‘primitivi’, la struttura dei loro simboli, la funzione dei loro miti, la maturità delle loro mistiche”.
            Una o due generazioni prima, l’Europa aveva guardato all’India ispirata dalla filosofia idealista di un Schopenhauer e dal fascino della immagini primordiali; ai tempi di Eliade vi scopriva risposte alle
            sue domande più pressanti circa i problemi della temporalità e della storicità e della loro influenza sulle vite e i destini degli esseri uomani.
         </p>
         <ArticlesArrow arrowSxLink={null} arrowDxLink={'/articoli/lo-yoga/parte2'} />
    </ArticleWrapper>)
}

export default Article