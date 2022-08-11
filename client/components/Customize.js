import React from 'react';

function Customize({shortUrl}) {
    return (
        <div className='w-full flex  flex-col gap-8 '>
            <div className='flex w-full gap-4'>
                <div className='flex gap-12 items-center bg-[#f8f8f8] p-2 rounded-xl flex-1'>
                    <input 
                        type='text' 
                        className='w-full p-2 bg-[#f8f8f8] rounded-md placeholder:text-xl placeholder:text-[#447f8c] text-lg focus:outline-0 text-[#40c5cd] ml-2' 
                        placeholder='Paste your URL here'
                        value={shortUrl + '/'}
                        readOnly 
                    />
                    <input 
                            type='text' 
                            className=' p-2 bg-[#f8f8f8] rounded-md placeholder:text-xl placeholder:text-[#447f8c] text-lg focus:outline-0 text-[#40c5cd] pl-0 ml-[-50rem] uppercase placeholder:capitalize' 
                            placeholder='Enter your cutomized value'
                            />
                        
                </div>
                <button className='bg-[#3ebec6] px-12 rounded-md font-medium text-white'>Save</button>
            </div>
        </div>
    );
}

export default Customize;