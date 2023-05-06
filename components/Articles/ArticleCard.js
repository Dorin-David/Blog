import { parseDate } from "../../js/helpers/getDate";

function ArticleCard( props ){
    const { article } = props;
    const published = parseDate( article.publishedAt );
    return (
    <article>
        <h3>{article.Title}</h3>
        {article.Subtitle && <h4>{article.Subtitle}</h4>}
        <time dateTime={published}>{published}</time>
    </article>)
}

export default ArticleCard