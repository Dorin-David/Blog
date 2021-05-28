import CollectionList from './CollectionsList';
import { collections } from '../../mock-database';

function Collections(props) {
    const filterCriteria = Object.keys(props.filter || {});
    let filteredCollection = collections;
    if(filterCriteria.length > 0){
        filteredCollection = collections.filter(collection => filterCriteria.every(filter => collection[filter] === props.filter[filter]))
    }
    return <div>
        <CollectionList collectionList={filteredCollection}/>
    </div>
}

export default Collections