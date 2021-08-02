import { useRouter } from 'next/router';
import style from '../../styles/components/tag.module.css';

function Tags(props) {
    const router = useRouter();
    let tags = null;
    if (props.tags) {
        tags = (
            <>
                <h3 className={style.info}>Tag:</h3>
                <ul className={style.tags}>
                    {props.tags.map(tag => <li key={tag} onClick={() => router.push(`/search/${tag.toLowerCase()}`)}>{tag}</li>)}
                </ul>
            </>
        )
    }

    return tags
}

export default Tags