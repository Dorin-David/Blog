import { useState } from 'react';
import { useRouter } from 'next/router';
import { BiSearch } from 'react-icons/bi';
import style from '../../styles/components/search.module.css';

function SearchBar() {
     const router = useRouter();
     const [query, setQuery] = useState('');

     function lookUp(){
         if(!query) return
        const pattern = query.trim().toLowerCase().replace(' ', '-')
        if(router.pathname.startsWith('/search')) router.push(pattern)
        else router.replace(`/search/${pattern}`)
        setQuery('')
     }
    return <div className={style['search-bar']}>
        <input type="text" onChange={e => setQuery(e.target.value)} value={query}/>
        <BiSearch className={style.search} onClick={lookUp}/>
    </div>
}

export default SearchBar