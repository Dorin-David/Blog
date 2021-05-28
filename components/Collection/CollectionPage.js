import { database } from '../../mock-database';
import ArticlesList from '../Articles/ArticlesList';

function CollectionPage(props) {
    
  const collection = database.filter(article => article.collection === props.collection).sort((a, b) => a.orderCollection - b.orderCollection)

     return (
         <>
            <h1>{props.collection}</h1>
            <ArticlesList articles={collection}/>
         </>
     )
}


export default CollectionPage