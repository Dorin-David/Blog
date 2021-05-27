import { useRouter } from 'next/router';
import ArticleWrapper from '../../components/Articles/Article';
import style from '../../styles/components/article.module.css';


function Article(){
    const router = useRouter();

    return (<ArticleWrapper>
         <h1>Pulp Fiction</h1>
         <p className={style.author} 
        onClick={() => router.push('/autori/bruno_lusardi')}>Bruno Lusardi</p>
   
           <p>
           A proposito di <span>Pulp Fiction</span>, si è detto e scritto abbastanza,
sin da quel 1994 in cui tutto ebbe inizio. Tanto si è scritto e
detto che può parere banale e stupido continuare, forse
irrilevante. <br /> 
<span>  </span> Il nervoso Quentin Tarantino, con alle spalle ore ed ore di
videoteca e di permanenze in sale di cinema, un tentativo di
un lungometraggio e <span>Reservoir Dogs</span> del 1992, si pone da
subito come un caso della cinematografia mondiale. Siamo
negli anni ’90, e in pochi si possono vantare di poter scrivere
e dirigere una simile, <span>geniale e deliziosa cazzata</span>.
Giustamente, “la migliore letteratura degli ultimi decenni”
(Enrico Ghezzi).
 <br />
<span>  </span>Samuel Jackson, John Travolta, Bruce Willis, Uma
Thurman: sappiamo che Tarantino è americano – che lo è sin
nel midollo. Dategli un <span>cheeseburger</span> e sparate un colpo in
testa a tutta la restante Ristorazione: forse non ve ne sarebbe
grato, ma ne riderebbe con voi. Aveste per caso problemi a
mettere in atto il piano, chiamate Mr. Wolf alias Harvey
Keitel. <br />
<span>  </span>Ciò che sorprende di Tarantino, oltre alla quasi
enciclopedica conoscenza dei fotogrammi, è la capacità di
<span>scrollarsi di dosso</span>, tramite paradosso, <span>tutto</span> il cinema visto.
Egli è come una nobile ed abile sanguisuga: succhia e
risucchia senza mai per questo esplodere. Ogni sequenza
finisce, per quanto possibile, dispiegata nella sua memoria e
nelle sue pagine di appunti; per <span>poi</span>, tramite plagio e
assimilazione, essere in grado di <span>scrivere cinema come fosse
un romanzo mai scritto</span> (già lo abbiamo in parte notato). <br />
<span>  </span>Il cinema nasce come una scoperta: si scopre che tramite un
apparecchio si riesce a “ricordare” qualcosa di “reale”, purché
questa realtà stia per un po’ di tempo <span>davanti</span>
all’apparecchio: ci vuole però un attento macchinista. Così
passa un treno <span>lassù in cima</span> e mezza sala si prende un
infarto dallo spavento; non si rende conto di essere stata
truffata. Allora, il cinema si scopre come documento, per poi
scoprirsi come strumento di trucchi ed altri simili giochetti.
Infine, a chi dirige tutta la baracca, pare geniale <span>raccontare</span>,
tramite gli <span>attori</span> bene in vista lassù in cima, delle <span>storie</span>
curate e bellissime. Tributario quindi della musica, della
pittura e pure del teatro, <span>si inizia così a romanzare</span>: i criteri
diventano chiari e le strutture si raffinano. Gli stampi sono
pronti e gli attori e le attrici si “divizzano”. Qualcuno si
guadagna qualche libertà, <span>ma</span> si devono attendere le
periferie degli anni ’50 e le <span>nuove ondate</span>, sul suolo
soprattutto europeo e nell’<span>underground</span>, degli anni ’60 e ’70.
Qui i fotogrammi si ritingono e le strutture si dilatano, esse
divenute ormai molto elastiche. Poi, si arriva agli anni ’90,
dove, in ritardo solo di un secolo, i <span>valori</span> sembrano
decisamente oscillare: salutare o bastonare paiono
possedere lo stesso grado di educazione e, quindi, ci sarebbe
molto di che preoccuparsi. Michael Haneke, ad esempio,
con <span>Funny Games</span> fa uscire dalla sala Wim Wenders, che noi
sappiamo essere un delicato. E sebbene i giochi, qui, per
qualcuno siano divertenti, “ossimoricamente”, si ride molto
poco. Haneke è un uomo cupo, tutt’altro che <span>pulp</span>. <br />
<span>  </span>I giornalettacci <span>pulp</span> degli anni ’30 generarono Chandler e
non solo; Tarantino, che a quanto pare per certe cose ride di
gusto, come di una forchetta infilzata in un occhio durante
una cena, <span>ne deduce del cinema</span>.
<span>  </span>Eh, i tempi son cambiati, sono davvero cambiati, si può
vedere molto più cinema standosene ben comodi e sdraiati
sul divano; si può studiarlo, proprio come alla moviola: tutto
ciò genera una malattia dal nome <span>cinefilia</span>. Sia per essa, sia
per il temperamento che per “i tempi” (direbbe ancora il
sociologo) la tentazione del <span>pastiche</span> e la ridarola causata da
un genocidio sono sintomi sani.
Ciò, evidentemente, è banalizzare. Tarantino possiede
genio e la capacità di riordinare il Caos. <span>Pulp Fiction è come
un Cosmo che scricchiola solido</span>. Molti non sopportano il
dolce Quentin; gli amanti di Tarkovskij, di Fellini e di
Bergman giudicano Tarantino <span>non serio</span>, non avendo la
benché minima idea della profondità, non capendo nulla né
di cinema né di arte.
Si azzardi pure, senza paura, dicendo che l’<span>appiattimento
cinematografico</span> di Tarantino è analogo all’<span>appiattimento
letterario</span> di Borges.</p>
    </ArticleWrapper>)
}

export default Article