import { useRouter } from 'next/router';
import Link from 'next/link';
import style from '../styles/components/article-card.module.css'

function ArticleCard(props) {
    const router = useRouter();

    function onNavigation(event) {
        const target = event.target
        if (target.tagName === 'A') {
            router.push(props.author_path)
        } else {
            router.push(props.path)
        }

    }
    return <div className={style.card} onClick={onNavigation}>
        <h1 >{props.title}</h1>
        <p className={style.header}>{props.header}</p>
        <p className={style.author}> <Link href={props.author_path}>{props.author}</Link></p>
        <div className={style.overlay}></div>
        <img src={props.img} alt={props.title} />
        <p>{props.description}</p>
    </div>
}

export default ArticleCard