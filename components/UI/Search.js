import { BiSearch } from 'react-icons/bi';
import style from '../../styles/components/search.module.css';

function SearchBar(){
   return <div className={style['search-bar']}>
       <BiSearch className={style.search}/>
       <input type="text" />
   </div>
}

export default SearchBar