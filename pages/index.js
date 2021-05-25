import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { database } from '../mock-database';
import ArticlesList from '../components/Articles/ArticlesList';
import style from '../styles/components/pagination.module.css'


function Home() {
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
    setPageCount(Math.floor(database.length / perPage))
    let data = null;
    if(offset > 0){
       data = database.slice((offset * 5) + 1, (offset * 5) + (perPage + 1))
    } else {
      data = database.slice(0, 5)
    }
    setArticles(data)

  }, [offset])


  return (
    <div >
      <ArticlesList articles={articles} />
      <ReactPaginate
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
        />
    </div>
  )
}

export default Home
