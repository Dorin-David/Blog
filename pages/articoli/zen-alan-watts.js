import { useRouter } from 'next/router'
import ArticleWrapper from '../../components/Article';
import style from '../../styles/components/article.module.css';

function Article() {
    const router = useRouter()

    return <ArticleWrapper>
        <h1>Alan Watts</h1>
        <h2>Vuoto e meraviglioso</h2>
        <p className={style.author} 
        onClick={() => router.push('/autori/dorin_david')}>Dorin David</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque sit amet urna quis hendrerit.
        Maecenas viverra rutrum sem id consequat. Sed porta, est ac blandit placerat, velit orci varius augue, ac condimentum magna augue sed turpis.
        Integer elementum tellus a auctor scelerisque. Nulla eleifend erat interdum, ultricies elit quis, rutrum magna. Maecenas vitae libero et libero consectetur pulvinar.
        Etiam eu tortor nec elit bibendum maximus. Pellentesque elit mauris, gravida et massa et, eleifend elementum ante. Donec a fermentum felis. Integer consectetur erat quis mauris varius efficitur.
            Donec in vulputate risus. Aenean ullamcorper enim sit amet urna dignissim fringilla. Nam eu urna augue. Aenean elementum ipsum leo. </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque sit amet urna quis hendrerit.
        Maecenas viverra rutrum sem id consequat. Sed porta, est ac blandit placerat, velit orci varius augue, ac condimentum magna augue sed turpis.
        Integer elementum tellus a auctor scelerisque. Nulla eleifend erat interdum, ultricies elit quis, rutrum magna. Maecenas vitae libero et libero consectetur pulvinar.
        Etiam eu tortor nec elit bibendum maximus. Pellentesque elit mauris, gravida et massa et, eleifend elementum ante. Donec a fermentum felis. Integer consectetur erat quis mauris varius efficitur.
            Donec in vulputate risus. Aenean ullamcorper enim sit amet urna dignissim fringilla. Nam eu urna augue. Aenean elementum ipsum leo. </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque sit amet urna quis hendrerit.
        Maecenas viverra rutrum sem id consequat. Sed porta, est ac blandit placerat, velit orci varius augue, ac condimentum magna augue sed turpis.
        Integer elementum tellus a auctor scelerisque. Nulla eleifend erat interdum, ultricies elit quis, rutrum magna. Maecenas vitae libero et libero consectetur pulvinar.
        Etiam eu tortor nec elit bibendum maximus. Pellentesque elit mauris, gravida et massa et, eleifend elementum ante. Donec a fermentum felis. Integer consectetur erat quis mauris varius efficitur.
            Donec in vulputate risus. Aenean ullamcorper enim sit amet urna dignissim fringilla. Nam eu urna augue. Aenean elementum ipsum leo. </p>

    </ArticleWrapper>
}

export default Article