import { useRouter } from 'next/router';
import ArticleWrapper from '../../components/Articles/Article';
import style from '../../styles/components/article.module.css';

function Article(){
    const router = useRouter();

    return (<ArticleWrapper>
         <h1>Parasite</h1>
         <p className={style.author} 
        onClick={() => router.push('/autori/bruno_lusardi')}>Bruno Lusardi</p>

        <p>
        Ci si contende un po’ di gloria, fra Corea del Nord e Corea
del Sud. L’unico cinema degno ci proviene dalla Corea del
Sud; perché è probabile sia l’unico, potendo in Meridione
dire senza sentirsi tagliare la lingua, potrebbe dire qualcuno.
Nel cinema sudcoreano, pare sempre esserci un’esplicita e
pure implicita critica nei confronti del Settentrione, che è
infatti meno liberale. Questa, può essere una cattiva lettura;
ma la “violenza” dei film sudcoreani può essere la
<span>sublimazione</span> di quella fiutata e subìta, come fosse un atto di
ribellione e pure compartecipazione. Qualche schiaffo
giapponese, quindi, e nordcoreano. Comunque, anche
questa può essere una cattiva lettura. Probabilmente, per
comprendere le radici di certa <span>violenza</span> presente, ad
esempio, nel cinema orientale, bisognerebbe conoscere un
po’ di Oriente. <br />
Ma qui non siamo “storici”, sebbene un po’ lo si dovrebbe
sempre essere, per parlare di un’opera. <span>Dipende</span> tuttavia da
come si voglia parlare di un’opera. <br />
<span>Parasite</span>, realizzato da Bong Joon-ho, sudcoreano europeo e
pure americano, è uno di quei film che hanno appunto
centrato l’America; o meglio: uno di quei film “diversi” che
piacciono agli “uguali”. Il signor Bong è passato da <span>Memorie
di un Delitto</span> (2003) a <span>Snowpiercer</span> (2013), con Tilda Swinton
e l’arcigno Ed Harris, che fa pure film con il più che arcigno
Liam Neeson. <span>Ora</span>, immaginatevi Liam Neeson diretto da
Bong Joon-ho: vi pare forse improponibile? Ricordate
<span>Snowpiercer</span> e non dimenticate il collega Kim Jee-woon. <br />
<span>Parasite</span> è un titolo così intrigante, sebbene in traduzione,
che deve aver venduto biglietti prima ancora che il pubblico
lo sapesse coreano. Poi, vedendo coltelli e volti coreani
imbrattati di sangue, i biglietti sono decisamente aumentati.
In Italia c’è un lusso – che si condivide pure con altri Paesi:
vedere e sentire un coreano che parla italiano. <br />
Però non si deve fraintendere: <span>Parasite</span> è un film perfetto;
probabile non ci sia un fotogramma che andrebbe ritoccato
o che sia presente una sequenza anche lontanamente
correggibile. Ma come diceva Jacques Derrida, “il cinema è
americano”. Questa affermazione sembra essere spesso
ignorata e sottovalutata. Difficile trovare, strutturalmente,
una <span>differenza</span> fra <span>Parasite</span> e il <span>The Departed</span> di Martin
Scorsese, ad esempio: la più sottile differenza è che
Nicholson non è coreano. <br />
Bong, che è un uomo certo intelligente, lo sa bene, di essersi
avvicinato al pubblico che conta, il quale gli fa batter cassa
in modo più consistente. Ciò, comunque, come prima
cautamente si diceva, non deve per forza precludere la
qualità. La sceneggiatura è fine e si può addirittura definire
“eccitante”, oltre che politica. Una famiglia <span>bassolocata</span>, oltre
ad essere interessata al <span>wi-fi</span>, è interessata al guadagno:
vivono praticamente sottoterra e puzzano di cavolo bollito.
Il figlio povero, tramite un amico astuto e truffaldino, riesce
a spacciarsi, tramite falsa documentazione, come un gran
conoscitore della lingua inglese: la vittima è una ricca
famiglia, <span>altolocata</span>. Così, <span>lassù in cima</span>, il ragazzo arriva e si
presenta, alla bella padroncina di casa; la truffa e prende al
laccio, come prende al laccio la sua giovane allieva (la figlia,
bella come la madre). “Ah, se ci fosse un’insegnante di
pittura per il mio bambino talentuoso!”. Il figlio povero,
udendo distintamente con le sue orecchie attente, dice di
conoscere un’ottima insegnante con un’esperienza
eccellente: che è la <span>propria</span> sorella... <br />
Siamo già catturati, l’ingranaggio della storia ci ha presi.
Uno dopo l’altro (sorella, madre e padre), tramite ulteriori e
divertenti irregolarità, entrano a far parte dello <span>staff</span> della
famiglia <span>altolocata</span>: ne sono – per meglio dire – gli unici
componenti. Una sera, la ricca famiglia se ne va in
campeggio, e nella <span>gran casa</span> si riversa tutta la povera
famiglia, sebbene avrebbe dovuto presenziare – come logico
– soltanto la domestica (la madre del figlio povero). La
<span>vecchia</span> domestica, però, quella fatta licenziare con
l’inganno, ritorna inaspettatamente, e la ricca famiglia pure:
il figlioletto non vuole essere <span>boy-scout</span> in un giorno di
pioggia... <br />
I piani sembrano frantumarsi, ciò che s’era raggiunto rischia
di perdersi all’istante. <br />
Per scoprire l’evoluzione della storia e del film <span>Parasite</span>, è
logico che si debba guardarlo. Si noterà un utilizzo dello
<span>smartphone</span> connotato come “necessario”, analogo
all’utilizzo che ne fa Michael Haneke in <span>Happy End</span>. Si noterà
la cinefilia di Bong Joon-ho e la sua parodia dell’<span>orrore</span>, del
cinema <span>horror</span> e di <span>fantasmi</span>.
        </p>        
    </ArticleWrapper>)
}

export default Article
