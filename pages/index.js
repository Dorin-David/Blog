import { database } from '../mock-database';
import ArticlesList from '../components/Articles/ArticlesList';


function Home() {
  return (
    <div >
      <ArticlesList articles={database} />
    </div>
  )
}

export default Home
