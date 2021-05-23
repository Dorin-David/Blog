import ArticlesList from '../../components/Articles/ArticlesList';
import AuthorCard from '../../components/Authors/AuthorCard';
import Header from '../SectionHeader';
import { database, authors } from '../../mock-database';

function AuthorPage(props) {
    const author = authors[props.author]
    const authorArticles = database.filter(article => article.author === props.author)
    return (
      <>
         <AuthorCard 
           author_name={author.name}
           author_bio={author.bio}
           img={author.img}
         />
        <Header>Articoli</Header>
        <ArticlesList articles={authorArticles} />
      </>
    )
  }

  export default AuthorPage