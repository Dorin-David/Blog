import { useRouter } from 'next/router';
import { database } from '../../mock-database';
import { IoLogoWhatsapp } from 'react-icons/io';
import ArticlesArrow from '../UI/ArticlesArrows';
import style from '../../styles/components/article.module.css';


function Article(props) {
    const router = useRouter();
    const article = database.find(article => article.article_path === router.asPath) || {};

    return <div className={style.article}>
        {props.children}
        <ArticlesArrow arrowSxLink={article.previousArticle} arrowDxLink={article.nextArticle} />
        <a href={`whatsapp://send?text=${article.title}\n${article.description}https://dintorni.herokuapp.com${router.asPath}`} target="_blank" className={style['whatsApp-link']}>< IoLogoWhatsapp /></a>
    </div>
}

export default Article

