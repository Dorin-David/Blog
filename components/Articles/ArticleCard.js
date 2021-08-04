import { useRouter } from 'next/router';
import Link from 'next/link';
import style from '../../styles/components/article-card.module.css'

function ArticleCard(props) {
    const router = useRouter();
    function onNavigation(event) {
        const target = event.target
        if (target.tagName === 'A') {
            router.replace(`/autori/${props.author_path}`)
        } else {
            router.push(props.path)
        }

    }
    console.log(props.hideAuthor)
    return <div className={style.card}
        onClick={onNavigation}
    >
        <div className={style['header-wrapper']}>
            <h1>{props.title}</h1>
            <p className={style.header}>{props.header}</p>
        </div>
        <div className={style['description-wrapper']}>
            {!props.hideAuthor ? <p className={style.author}> <Link href={props.author_path}>{props.author}</Link></p> : null}
            <p>{props.description}</p>
        </div>
        {props.img && <img src={props.img} alt={props.title} style={props.position ? { objectPosition: props.position } : null} />}
        <div className={style.overlay} style={!props.img ? { background: 'black' } : null}></div>
    </div>
}

export default ArticleCard