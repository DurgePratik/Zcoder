import React from 'react';
import { AiOutlineFullscreen } from 'react-icons/ai';
import EditorFooter from '../EditorFooter';
import { auth } from '@/firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';

type PreferenceNavProps = {
    
};

const PreferenceNav:React.FC<PreferenceNavProps> = () => {
    const[user]= useAuthState(auth);
    return (
        <div className='flex items-center justify-between bg-dark-fill-2 h-11 w-full '>
    <div className='flex items-center text-dark px-5'>
        <button className='flex cursor-pointer items-center rounded focus:outline-black bg-white text-dark hover:bg-dark-fill-2 px-2 py-1.5 font-medium'>
            <div className='flex items-center px-1'>
                <div className='text-xm text-label-2 text-dark'>JavaScript</div>
            </div>
        </button>
    </div>

           

    <button className='flex cursor-pointer items-center rounded focus:outline-black bg-white text-dark hover:bg-white px-2 py-3 font-medium'>
    <div className='flex items-center px-1'>
        <div className='text-xm text-label-2 text-dark'>
            <AiOutlineFullscreen fontSize="25"/>
        </div>
    </div>
</button>
</div>
 

    );
}
export default PreferenceNav;