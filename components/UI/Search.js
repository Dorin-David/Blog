import { BiSearch } from 'react-icons/bi';
import style from '../../styles/components/search.module.css';

function SearchBar(){
   return <div className={style['search-bar']}>
       <input type="text" />
       <BiSearch className={style.search}/>
   </div>
}

export default SearchBar