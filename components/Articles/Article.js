import { useRouter } from 'next/router';
import style from '../../styles/components/article.module.css';
import { IoLogoWhatsapp } from 'react-icons/io';

function Article(props) {
    const router = useRouter();
    return <div className={style.article}>
        {props.children}
        <a href={`whatsapp://send?text=${router.asPath}`} target="_blank" className={style['whatsApp-link']}>< IoLogoWhatsapp /></a>
    </div>
}

export default Article