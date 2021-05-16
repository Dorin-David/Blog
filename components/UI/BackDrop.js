import style from '../../styles/components/backdrop.module.css'
function BackDrop(props){
    return <div className={style.backdrop} onClick={props.triggerBackdrop}>
        <div></div>
        <div></div>
        <div></div>
    </div>
}

export default BackDrop