import ArticlesList from '../../components/Articles/ArticlesList';
import AuthorCard from '../../components/Authors/AuthorCard';
import { database, authors } from '../../mock-database';


//should have a wrapper?
function Author() {
  const author = authors['Dorin David']
  const authorArticles = database.filter(article => article.author === 'Dorin David')
  return (
    <>
       <AuthorCard 
         author_name={author.name}
         author_bio={author.bio}
         img={author.img}
       />

      <ArticlesList articles={authorArticles} />
    </>
  )
}

export default Author