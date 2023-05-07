import Link from 'next/link';

function NavLinks(props) {
    return (<div>
        <Link href='/' onClick={props.closeNavModal} >Home</Link>
    </div>)
}

export default NavLinks