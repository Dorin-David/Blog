import { parseDate } from "../../js/helpers/getDate";
import style from './styles/article-card.module.scss';

function ArticleCard( props ){
    const { article } = props;
    const author = article.createdBy.firstname + article.createdBy.lastname; 
    const published = parseDate( article.publishedAt );
    return (
    <article className={style['article-card']}>
        <h3>{article.Title}</h3>
        {article.Subtitle && <h4>{article.Subtitle}</h4>}
        <p>{author}</p>
        <time dateTime={published}>{published}</time>
    </article>)
}

export default ArticleCard