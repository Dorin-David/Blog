import style from '../../styles/components/UI/button.module.css'


function Button(props){
    return (
        <button className={[style.button, (props.buttonDirection === 'sx' ? style.sx : style.dx)].join(' ')} title={props.title}>
            {props.children}
        </button>
    )
}

export default Button