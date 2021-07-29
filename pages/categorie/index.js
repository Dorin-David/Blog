import CategoryCard from '../../components/Categories/CategoryCard';
import Header from '../../components/SectionHeader';
import style from '../../styles/components/category-card.module.css';

//mock category list
const categories = ['raccolte', 'cinema', 'filosofia', 'letteratura', 'psicologia', 'religioni']

function Categorie(){
    return <>
    <Header>Categorie</Header>
    <div className={style['cards-wrapper']}>
        {categories.map(category => <CategoryCard category={category}/>)}
    </div>
    </>
}


export default Categorie