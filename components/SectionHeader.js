import style from '../styles/components/headers.module.css';

function SectionHeader(props){
    return <h1 className={style['section-header']}>{props.children}</h1>
}

export default SectionHeader