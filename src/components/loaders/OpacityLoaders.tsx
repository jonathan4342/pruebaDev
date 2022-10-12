import { FadeLoader } from 'react-spinners';

export const OpacityLoader = () => {
    return (
        <div className='withOpacity'>
            <FadeLoader color="#ffffff" loading={true} />
        </div>
    )
}