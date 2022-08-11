import React from 'react';
// import css module for navbar

function Navbar(props) {
    return (
        <div className='flex gap-4 w-full min-w-screen'>
            <div className='flex gap-4 ml-auto p-4 items-center'>
                <span className='text-[#124459] font-medium cursor-pointer'>Dashboard</span>
                <span className='text-[#7b7e80] font-medium cursor-pointer'>My links</span>
                <span className='text-[#7b7e80] font-medium cursor-pointer'>Stats</span>
                <span className='text-[#7b7e80] font-medium cursor-pointer'>Saleban</span>
                {/* <button className='bg-[#3ebec6] px-6 py-2 rounded-md font-medium text-white'>Get started</button> */}
                <img src='https://storage.googleapis.com/kaggle-avatars/images/750103-gp.jpg' alt='google logo' className='w-8 h-8 rounded-full border-gray-400 border-1 cursor-pointer' />
            </div>
        </div>
    );
}

export default Navbar;