import ArticlesList from '../../components/Articles/ArticlesList';
import Header from '../../components/SectionHeader';
import { database } from '../../mock-database';


function CategoryPage(props) {
    const category = props.category;
    const filteredArticles = database.filter(article => article.category === category)

    return (<>
        <Header>{category[0].toUpperCase() + category.slice(1)}</Header>
        <ArticlesList articles={filteredArticles} />
    </>)
}

export default CategoryPage