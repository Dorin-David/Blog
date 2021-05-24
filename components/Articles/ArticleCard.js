import { useRouter } from 'next/router';
import Link from 'next/link';
import style from '../../styles/components/article-card.module.css'

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
        <div className={style['header-wrapper']}>
        <h1>{props.title}</h1>
        <p className={style.header}>{props.header}</p>
        </div>
        <div className={style['description-wrapper']}>
        <p className={style.author}> <Link href={props.author_path}>{props.author}</Link></p>
        <p>{props.description}</p>
        </div>
        <img src={props.img} alt={props.title} style={props.position ? {objectPosition: props.position} : null}/>
        <div className={style.overlay}></div>
    </div>
}

export default ArticleCard