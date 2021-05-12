import ArticleCard from './ArticleCard'

function ArticlesList(props) {
    return  props.articles.map(article => {
            return <ArticleCard
                key={article.author_path}
                path={article.article_path}
                author_path={article.author_path}
                title={article.title}
                header={article.header}
                author={article.author}
                description={article.description}
                img={article.img}

            />
        })
}

export default ArticlesList