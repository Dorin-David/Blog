import NavLinks from './NavLinks';
import style from '../styles/components/nav-modal.module.css'

function NavModal(props) {

    return <>
        <div className={style['nav-modal']}>
            <NavLinks closeNavModal={props.closeNavModal}/>
        </div>
        <div className={style['nav-modal-backdrop']} onClick={props.clickBackdrop}> </div>
    </>
}

export default NavModal