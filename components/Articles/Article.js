import { useRouter } from 'next/router';
import Link from 'next/link';
import { database } from '../../mock-database';
import { IoLogoWhatsapp } from 'react-icons/io';
import ArticlesArrow from '../UI/ArticlesArrows';
import style from '../../styles/components/article.module.css';


function Article(props) {
    const router = useRouter();
    const article = database.find(article => article.article_path === router.asPath) || {};

    return <div className={style.article}>
        <h1>{article.title}</h1> 
        {article.header ? <h2>{article.header}</h2> : null}
        <p className={style.author}  onClick={() => router.push(`/autori/${article.author_path}`)}>{article.author}</p>
        {article.collection ? <p className={style.info}>(Questo articolo è parte di una serie. Potete trovare gli altri articoli <Link href={article.collection_path}>qui</Link>)</p> : null}

        {props.children}
        <ArticlesArrow arrowSxLink={article.previousArticle} arrowDxLink={article.nextArticle} />
        <a href={`whatsapp://send?text=${article.title}\n${article.description}https://dintorni.herokuapp.com${router.asPath}`} target="_blank" className={style['whatsApp-link']}>< IoLogoWhatsapp /></a>
    </div>
}

export default Article

