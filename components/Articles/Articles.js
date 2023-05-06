import { useEffect, useState } from 'react';

function Articles(props) {
    const API = props.API;
    const [articles, setArticles] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(null);


    useEffect(() => {
        setError(false);
        setLoading(true);

        async function fetchArticles() {
             try {
                const req = await fetch(`${API}/articles`);
                const data = await req.json();

                console.log(data);
            } catch (error) {
                setError('An error occured')
            }

            setLoading(false)
        }

        fetchArticles()
    }, [])
}
export default Articles