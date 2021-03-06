import CollectionCard from './CollectionCard';

function CollectionList(props){
    return props.collectionList.map(collection => {
        return <CollectionCard 
          title={collection.collection}
          author={collection.author}
          author_path={collection.author_path}
          img={collection.img}
          description={collection.description}
          path={collection.path}
         
        />
    })
}

export default CollectionList