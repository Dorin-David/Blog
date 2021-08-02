import ArticlesList from '../../components/Articles/ArticlesList';
import Header from '../../components/SectionHeader';
import {database } from '../../mock-database';
import Collections from '../Collection/Collections';

function CategoryPage(props) {
    const category = props.category;
    const filteredArticles = database.filter(article => typeof article.category === 'string ' ? article.category === category : article.category.includes(category))

    return (<>
        <Header>{category[0].toUpperCase() + category.slice(1)}</Header>
        <div>
        <Collections filter={{category}}/>
        </div>
        <h1>Articoli</h1>
        <ArticlesList articles={filteredArticles} />
    </>)
}

export default CategoryPage