import Link from 'next/link';
import Button from "./Button";

function ArticlesArrows(props) {
    const { arrowSxLink, arrowDxLink } = props;

    let buttonSx = null;
    let buttonDx = null;

    if (arrowSxLink) {
        buttonSx = <Button buttonDirection='sx' title="precedente">
            <Link href={arrowSxLink}>
                {'<'}
            </Link>
        </Button>
    }

    if (arrowDxLink) {
        buttonDx = <Button buttonDirection='dx' title="successivo">
            <Link href={arrowDxLink}>
                {'>'}
            </Link>
        </Button>
    }

    return <div className='button-wrapper'>
        {buttonSx}
        {buttonDx}
    </div>

}

export default ArticlesArrows