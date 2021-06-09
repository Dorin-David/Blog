import style from '../../styles/components/article.module.css';
import {IoLogoWhatsapp} from 'react-icons/io';

function Article(props){
    return <div className={style.article}>
       {props.children}
       <a href={`whatsapp://send?text=${props.wh_message}`} className={style['whatsApp-link']}>< IoLogoWhatsapp /></a>
    </div>
}

export default Article