import { useState, useEffect } from 'react';
import ArticleCard from './ArticleCard';
import ReactPaginate from 'react-paginate';
import style from '../../styles/components/pagination.module.css';

function ArticlesList(props) {

    const [perPage] = useState(5);
    const [pageCount, setPageCount] = useState(0);
    const [offset, setOffset] = useState(0);
    const [articles, setArticles] = useState([])


    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        setOffset(selectedPage)
        window.scrollTo(0, 0)
    };


    useEffect(() => {
        setPageCount(Math.round(props.articles.length / perPage))
        let data = null;
        if (offset > 0) {
            data = props.articles.slice((offset * 5) + 1, (offset * 5) + (perPage + 1))
        } else {
            data = props.articles.slice(0, 5)
        }
        setArticles(data)

    }, [offset, props.articles])

    return (<>
        {articles.map(article => {
            return <ArticleCard
                key={article.title + article.header}
                path={article.article_path}
                author_path={article.author_path}
                title={article.title}
                header={article.header}
                author={article.author}
                description={article.description}
                img={article.img}
                position={article.position ? article.position : null}
            />
        })}
        {/* check if pagination is necessary (above 5 articles) */}
        {  props.articles.length > 5 && <ReactPaginate
        previousLabel={"prev"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={style.pagination}
        subContainerClassName={"pages pagination"}
        activeClassName={style.active} 
        />}
    </>)
}

export default ArticlesList