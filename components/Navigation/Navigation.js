import { useState } from 'react';
import NavBar from './NavBar';
import NavModal from './NavModal';

function Navigation() {

    const [showModal, setShowModal] = useState(false);

    function onOpenNavModal() {
        setShowModal(true)
    }
    
    function onCloseNavModal(){
        setShowModal(false)
    }

    return <>
        <NavBar clickNavButton={onOpenNavModal} />
            {showModal && <NavModal clickBackdrop={onCloseNavModal} closeNavModal={onCloseNavModal}/>}
    </>
}

export default Navigation
