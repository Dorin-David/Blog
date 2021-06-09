import ArticlesList from '../../components/Articles/ArticlesList';
import Header from '../../components/SectionHeader';
import {database } from '../../mock-database';
import Collections from '../Collection/Collections';


function CategoryPage(props) {
    const category = props.category;
    const filteredArticles = database.filter(article => article.category === category)

    return (<>
        <Header>{category[0].toUpperCase() + category.slice(1)}</Header>
        <div>
            {/* <h1>Raccolte</h1> */}
        <Collections filter={{category}}/>
        </div>
        <h1>Articoli</h1>
        <ArticlesList articles={filteredArticles} />
    </>)
}

export default CategoryPage