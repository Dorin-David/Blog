import { useRouter } from 'next/router';
import ArticleWrapper from '../../components/Articles/Article';
import style from '../../styles/components/article.module.css';

function Article(){
    const router = useRouter();

    return (<ArticleWrapper>
         <h1>La Ruota</h1>
         <h2>Riflessioni dopo una sconfitta a scacchi</h2>
         <p className={style.author} 
        onClick={() => router.push('/autori/dorin_david')}>Dorin David</p>
         <p>
         Riuscirò mai a liberarmi di me stesso? Domanda idiota… ritento: riuscirò mai a non essere il nemico di me stesso? 
         Ci si crede cambiati, e invece si ricasca nelle vecchie trappole di sempre, ed è tanto più frustrante quanto più ci si rende conto 
         che questa giostra scricchiolante ha già girato troppe volte e noi non abbiamo imparato nulla. La vita va in circoli. 
         Pensavo a una spirale, ma in fondo non cambia molto. Le leggi dell’universo non cambieranno mai, per i pezzenti e per gli dèi: prima in alto, poi in basso, la Ruota gira e noi siamo da capo. 
         Comprenderlo? Abbiamo la memoria corta… 
         </p>
         <p>
         Ma in fondo vogliamo star meglio? Lo vogliamo davvero? Se davvero lo volessimo, non sarebbe poi difficile. Basta smettere di 
         </p>
         <p className={style.date}>marzo 2021</p>
         <p className={style.credit}>(Immagine: "Ferris Wheel in the Tuileries", 1905, Pierre Dubreuil)</p>
    </ArticleWrapper>)
}

export default Article