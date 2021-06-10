import CollectionList from './CollectionsList';
import { collections } from '../../mock-database';
import style from '../../styles/components/collection.module.css';

function Collections(props) {
    const filterCriteria = Object.keys(props.filter || {});
    let filteredCollection = collections;

    if (filterCriteria.length > 0) {
        filteredCollection = collections.filter(collection => filterCriteria.every(filter => collection[filter] === props.filter[filter]))
    }

    return (
        <>
            {filteredCollection.length > 0 && !props.hideSectionTitles ? <h1>Raccolte</h1> : null}
            <div className={style['collection-layout']}>
                <CollectionList collectionList={filteredCollection} />
            </div>
        </>
    )


}

export default Collections