import ArticleWrapper from '../../../components/Articles/Article';
import  Link  from 'next/link';

function Article() {
    return (<ArticleWrapper>
        <p>
            In un breve saggio del 1936, Carl Gustav Jung, grande psicologo (in principio pupillo prediletto di Freud, distaccatosi poi dalla corrente del Maestro per 
            elaborare una concezione più ampia dello spirito umano), medico e studioso delle religioni, esplora la relazione dell’Occidente con una disciplina spirituale 
            antichissima, esotica, che a quel tempo iniziava a far parte dell’immaginario comune europeo: lo yoga. <br />
            <span>Lo yoga e l’Occidente</span> si potrebbe definire, forse, più un articolo che un saggio, quasi una <span>nota personale</span>. Jung non ha pretese oggettive: fin dall’inizio 
            chiarisce di non essere un conoscitore dello yoga, non avendolo mai praticato, e che il suo saggio riguarda più il rapporto dell’Occidente <span>con</span> questa perla dello spirito indiano. <br />
            Lo yoga, frutto maturo di una civiltà antica e complessa, così diversa dalla nostra, era allora (esclusi gli specialisti) una disciplina nuova per l’Occidente. 
            La sua scoperta, come <Link href="/articoli/lo-yoga">notato anche da Mircea Eliade</Link>, avveniva in un particolare momento storico. Ma mentre Eliade (la prima edizione del suo <span>Yoga, immortalità e libertà</span>, è sempre del 1936), 
            nel tentativo di rendere lo yoga più familiare, espone i paralleli tra la filosofia indiana e quella esistenzialista, Jung si spinge fino al Rinascimento per sviscerare 
            le cause di quella disposizione psichica e culturale che, da una parte, ha permesso l’importazione di una disciplina così lontana da tutto quel che si era visto fino ad allora in Occidente, 
            ma che dall’altra ci impedisce, forse, di farne un uso corretto, benefico. <br />
            Nel Rinascimento avvengono due cose fondamentali per la civiltà occidentale: la Riforma e la nascita della scienza. La Riforma ha indebolito l’autorità 
            della Chiesa, fino ad allora mediatrice e giudice indiscussa in ogni campo del sapere e dello spirito umano. Il protestante non poteva più contare su un intermediario per comunicare con il divino. 
            Egli si ritrovava improvvisamente gravato di “una responsabilità religiosa senza precedenti”. Scrive Jung (che era proprio, lo si noti, protestante): “il tramonto della confessione e dell’assoluzione 
            acuì il conflitto morale del singolo, gravandolo di una problematica dalla quale la Chiesa lo aveva prima sollevato”. Più in generale, il protestante, semplicemente, <span>non può avere una risposta dalla divinità</span>: 
            “venendo a mancare la celebrazione, mancò la risposta di Dio al proponimento del singolo. Questa lacuna spiega perché si senta il bisogno di sistemi che promettano questa risposta, cioè il favore visibile o 
            percepibile di un Altro (superiore, spirituale o divino)”. <br />
            La scienza, ovviamente, pretendeva di poter fare a meno di convinzioni e necessità religiose, e perseguì la sua vita tutta intellettuale. 
            Fede e Scienza furono divise, rese anzi antagoniste. Questa scissione, “storicamente inevitabile”, fu causata da una “coercizione innaturale a credere” 
            (il protestante può basarsi solo sulla propria fede; quella del cattolico nella Chiesa, invece, era sempre più anemica) e da una “fede altrettanto innaturale nelle scienze” 
            (giacché “ogni eccesso psicologico si scompone nei suoi opposti”). Una scissione dolorosa, “poiché la sola scienza, come la sola fede, non bastano mai”; scissione che, inevitabilmente, si è impadronita anche dello yoga.
        </p>

    </ArticleWrapper>)
}

export default Article