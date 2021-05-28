import { useRouter } from 'next/router';
import style from '../../styles/components/category-card.module.css';

//make one sass file for all 

function CategoryCard(props) {
    const router = useRouter();

    function categoryNavigation(){
        if(props.category === 'raccolte'){
            router.push(`/raccolte`)
        } else {
            router.push(`/categorie/${props.category}`)
        }
    }
    
    return <div className={style['category-card']}
            onClick={categoryNavigation}>
        <h1>{props.category}</h1>
        <div className={style.overlay}></div>
    </div>
}

export default CategoryCard