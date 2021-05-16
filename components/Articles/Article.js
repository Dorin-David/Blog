import style from '../../styles/components/article.module.css'

function Article(props){
    //style below (for loaded page)
    return <div className={style.article}>
       {props.children}
    </div>
}

export default Article