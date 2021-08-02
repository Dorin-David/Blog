import { useRouter } from 'next/router';
import {database} from '../../mock-database';
import ArticlesList from '../../components/Articles/ArticlesList';
import SectionHeader from '../../components/SectionHeader';

function Query() {
    const router = useRouter();
    let query = router.query.query
  
    //firt render will always return undefined: https://github.com/vercel/next.js/discussions/11484
    if(!query) return null
    else query = query.split('-')
    //look up articles with specific query
    const filtered = database.filter(article => {
        let matched = false;
        query.forEach(param => {
            if(article.description.toLowerCase().includes(param) 
              || article.category === param 
              || article.title.toLowerCase().includes(param)
              || article.author.toLowerCase().includes(param)) matched = true;
            else if(article.tags && article.tags.includes(param)) matched = true;
        })
        return matched
    })
    let queryResult = <h1 style={{marginTop: '3rem'}}>Nessun risultato trovato</h1>;

    if(filtered.length) {
        queryResult = (<>
            <SectionHeader>Cerca</SectionHeader>
            <ArticlesList articles={filtered} />
        </>)
    }

    return queryResult
}

export default Query