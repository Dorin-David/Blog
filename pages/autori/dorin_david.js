import ArticlesList from '../../components/ArticlesList';
import {database} from '../../mock-database';

//should have a wrapper?
function Author(){
    //could also figure out something more dymanic, via query property on router,
    // but since pages are pretty static we can also use the author identifier
    const authorArticles = database.filter(article => article.author === 'Dorin David')
  return (
      <>
      <h1>Dorin David</h1>
      <p>Lorem ipsum lalal, he started lala lala Lorem ipsum lalal, he started lala lala Lorem ipsum lalal, he started lala lala</p>
      <p>Lorem ipsum lalal, he started lala lala Lorem ipsum lalal, he started lala lala Lorem ipsum lalal, he started lala lala</p>
      <h1>Articoli</h1>
      <ArticlesList articles={authorArticles}/>
      </>
  )
}

export default Author