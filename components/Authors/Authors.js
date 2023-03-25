import { useRouter } from 'next/router';
import AuthorCard from './AuthorCard';
import { authors } from '../../mock-database';

function Authors() {
    const router = useRouter();

    function onNavigateToAuthor(author) {
        router.push(author)
    }

    const mapAuthors = Object.values(authors);

    return mapAuthors.map(author => {
        return <AuthorCard
            author_name={author.name}
            author_bio={author.bio}
            img={author.img}
            click={onNavigateToAuthor.bind(null, author.author_path)}
            navigate={true}
            key={author.author_path}
        />
    })
}

export default Authors