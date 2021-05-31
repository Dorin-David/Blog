import ArticlesList from '../../components/Articles/ArticlesList';
import AuthorCard from '../../components/Authors/AuthorCard';
import Header from '../SectionHeader';
import { database, authors } from '../../mock-database';
import Collections from '../Collection/Collections';

function AuthorPage(props) {
  const author = authors[props.author]
  const authorArticles = database.filter(article => article.author === props.author)

  let collections = null;

  if (author.hasCollection) {
    collections = (
      <>
        <Header>Raccolte</Header>
        <Collections filter={{ author: props.author }} />
      </>
    )
  }
  return (
    <>
      <AuthorCard
        author_name={author.name}
        author_bio={author.bio}
        img={author.img}
      />
      {collections}
      <Header>Articoli</Header>
      <ArticlesList articles={authorArticles} />
    </>
  )
}

export default AuthorPage