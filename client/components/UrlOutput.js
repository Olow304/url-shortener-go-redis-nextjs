import React, { useEffect, useState } from 'react';
import Customize from './Customize';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UrlOutput({shortUrl}) {
    const [openCustomize, setOpenCustomize] = useState(false);

    console.log("shortUrl.lenght", shortUrl.length)

    const openCustomizeFunc = () => setOpenCustomize(true);

    const Results = () => (
        <Customize shortUrl={shortUrl}/>
    )
    const handleCopyEvent = () => {
        toast.success('Copied to clipboard!', {
            position: "bottom-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        navigator.clipboard.writeText(shortUrl)
    }


    return (
        <div className='w-full flex  flex-col gap-8 '>
            <div className='flex w-full gap-4'>
                <div className='flex gap-2 items-center bg-[#f8f8f8] p-2 rounded-xl flex-1'>
                    <input 
                        type='text' 
                        className='w-full p-2 bg-[#f8f8f8] rounded-md placeholder:text-xl placeholder:text-[#447f8c] text-lg focus:outline-0 text-[#40c5cd] ml-2' 
                        placeholder='Paste your URL here'
                        value={shortUrl}
                        readOnly/>
                </div>
                <button className='bg-[#144a5f] px-10 rounded-md font-medium text-white' onClick={handleCopyEvent}>Copy</button>
                <button 
                    className='bg-[#3ebec6] px-12 rounded-md font-medium text-white'
                    onClick={openCustomizeFunc}>Customize</button>
               <ToastContainer />
            </div>
            {(openCustomize && shortUrl.length > 0) ? <Results /> : null}
        </div>
    );
}

export default UrlOutput;