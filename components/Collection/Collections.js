import CollectionList from './CollectionsList';
import { collections } from '../../mock-database';
import style from '../../styles/components/collection.module.css';

function Collections(props) {
    const filterCriteria = Object.keys(props.filter || {});
    let filteredCollection = collections;

    if (filterCriteria.length > 0) {
        filteredCollection = collections.filter(collection => filterCriteria.every(filter => collection[filter] === props.filter[filter]))
    }

    return <div className={style['collection-layout']}>
        <CollectionList collectionList={filteredCollection} />
    </div>
}

export default Collections