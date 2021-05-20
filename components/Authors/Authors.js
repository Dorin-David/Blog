import { useRouter } from 'next/router';
import AuthorCard from './AuthorCard';
import { authors } from '../../mock-database';

function Authors() {
    const router = useRouter();

    function onNavigateToAuthor(author) {
        router.push(author)
    }

    const mapAuthors = Object.keys(authors)

    return mapAuthors.map(author => {
        const info = authors[author]
        return <AuthorCard
            author_name={info.name}
            author_bio={info.bio}
            img={info.img}
            click={onNavigateToAuthor.bind(null, info.author_path)}
            navigate={true}
        />
    })
}

export default Authors