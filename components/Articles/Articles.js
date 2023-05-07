import { useEffect, useState } from 'react';
import ArticleCard from './ArticleCard';

function Articles() {
    const API = process.env.NEXT_PUBLIC_CMS_API;
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(null);

    useEffect(() => {
        setError(false);
        setLoading(true);

        async function fetchArticles() {
            try {
                const req = await fetch(`${API}/articles`);
                const res = await req.json();

                setArticles(res.data)

            } catch (error) {
                setError('An error occured')
            }

            setLoading(false)
        }

        fetchArticles()
    }, [])

    let display = <h2>Loading</h2>;

    if(!loading){
        display = articles.map( article => (<ArticleCard key={article.id} article={article.attributes} />) );
    }

    return <section className='articles'>
        { !error ? display : <h3>An error occured</h3> }
    </section>

}
export default Articles