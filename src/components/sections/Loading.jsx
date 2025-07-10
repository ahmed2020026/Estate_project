import { ScaleLoader } from 'react-spinners';
export const Loading = () => {
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <ScaleLoader color='#0084d1' />
        </div>
    )
}