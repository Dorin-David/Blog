import { useRouter } from 'next/router';
import ArticleWrapper from '../../components/Articles/Article';
import style from '../../styles/components/article.module.css';


function Article(){
    const router = useRouter();

    return (<ArticleWrapper>
         <h1>Ultimo tango a Parigi</h1>
         <p className={style.author} 
        onClick={() => router.push('/autori/bruno_lusardi')}>Bruno Lusardi</p>
        <p>
        Pare che Bernardo Bertolucci si sia sempre impegnato a
realizzare <span>grandi</span> film, soprattutto in quanto dimensioni e
peso. La <span>durata</span> – è vero – non garantisce necessariamente la <span>grandezza</span>, d’un film. 
Più che altro, qui, è una questione di <span>statura</span>, di <span>magnificenza</span> (come se fra le mani non tenessimo
una pietra preziosa ma un masso gigantesco) – che <span>assieme</span> alla 
durata costituiscono quella grandezza che rientra nel
termine <span>Kolossal</span>, amato dagli americani. <span>Ultimo Tango a
Parigi</span> è uno di questi film. <span>L’Ultimo Imperatore</span>; <span>Novecento</span>:
stessa sorte. <span>Tragedia di un uomo ridicolo</span>, pare un collaudo
di essi. In ogni caso, quand’anche la <span>Tragedia</span> non fosse un
collaudo, ciò non toglie che <span>Ultimo Tango a Parigi</span> non sia un
kolossal. <span>“Ultimo”</span>, <span>“Tango”</span>, <span>“Parigi”</span>: con Marlon Brando, poi,
si vuole la realizzazione di un’opera imperitura, che si sigilli
nelle menti per sempre. <br />
Si sa che esiste una scena per cui Marlon Brando e Bernardo
Bertolucci si misero d’accordo in segreto, senza avvisare la
diretta interessata che qualche anno più tardi ci lasciò le
penne, sulla Terra: proprio una tragedia. Bertolucci affermò
in seguito di sentirsi in parte responsabile: questa è la
piccante megalomania dell’artista, la ricerca di sobbarcarsi
sulle spalle <span>tutto</span> il senso di colpa possibile. Certo: può essere
che qualche scelta di Bertolucci abbia influito – <span>ma tutto
influisce</span>. <span>“Un uomo che si tolga la vita se la toglie per via di
tutta la sua vita”</span> pressappoco Thomas Bernhard, che in
quanto Suicido era un esperto ragguardevole. <br />
<span>Lui</span>, <span>lei</span>, si incontrano come per magia. Lei è giovane e
perduta, lui è vecchio e perduto: inizia una relazione dalle
tinte gerontofile all’insegna dell’erotismo. <span>Qui</span>, si può
decisamente andare a scene: la scena della vasca, ad
esempio, che è bellissima: acqua, nudità e sapone. <br />
Sappiamo il cinema essere <span>immagine in movimento</span>, quindi
ci si può concentrare sull’inquadratura, il flusso della
camera, il montaggio, eccetera. Su tutto, però, ciò che
colpisce di Bertolucci è questa volontà di magnificare; ma si
può preferire il suo conterraneo Sergio Leone, che
possedeva, nella manica, oltre al resto, l’asso dei <span>grandi spazi, un senso dello sconfinato</span>. Poi, con <span>C’era una volta in
America</span>, Leone si gemella col Bernardo de <span>L’Ultimo Imperatore</span>: sono entrambi <span>film-monumento</span>.
        </p>
         
    </ArticleWrapper>)
}

export default Article