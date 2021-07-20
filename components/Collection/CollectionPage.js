import { useRouter } from 'next/router';
import { database, collections } from '../../mock-database';
import ArticlesList from '../Articles/ArticlesList';
import style from '../../styles/components/collection.module.css';

function CollectionPage(props) {
  const router = useRouter();
  const collection = database.filter(article => article.collection === props.collection).sort((a, b) => a.orderCollection - b.orderCollection);
  const info = collections.find(collection => collection.collection == props.collection);

     return (
         <div className={style['collection-page']}>
            <h1>{props.collection}</h1>
            <p 
            onClick={() => router.replace(info.author_path)}
            className={style.author}
            >{info.author}</p>
            <p className={style.description}>{info.description}</p>
            <ArticlesList articles={collection}/>
         </div>
     )
}


export default CollectionPage