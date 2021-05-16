import ArticleCard from './ArticleCard'

function ArticlesList(props) {
    return  props.articles.map(article => {
            return <ArticleCard
                key={article.title}
                path={article.article_path}
                author_path={article.author_path}
                title={article.title}
                header={article.header}
                author={article.author}
                description={article.description}
                img={article.img}
                position={article.position ? article.position : null}

            />
        })
}

export default ArticlesList