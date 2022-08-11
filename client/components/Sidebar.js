import React from 'react';
import { 
    HiOutlineHome, 
    HiOutlineChartBar, 
    HiOutlineFolderOpen,
    HiOutlineUsers,
    HiOutlineCog,
    HiOutlineInformationCircle,
    HiLogout
} from "react-icons/hi";


function Sidebar(props) {
    return (
        <div className='h-screen bg-[#144a5f] text-gray-200 p-6 flex flex-col gap-2 items-center'>
            <h1 className='text-3xl pb-12'>S</h1>
            <div className='flex flex-col gap-6 items-center h-screen'>
                <HiOutlineHome size={22}/>
                <HiOutlineChartBar size={22} className="text-[#2d99b5] hover:text-gray-200 cursor-pointer"/>
                <HiOutlineFolderOpen size={22} className="text-[#2d99b5] hover:text-gray-200 cursor-pointer"/>
                <HiOutlineUsers size={22} className="text-[#2d99b5] hover:text-gray-200 cursor-pointer"/>
                <HiOutlineCog size={22} className="text-[#2d99b5] hover:text-gray-200 cursor-pointer"/>
                <HiOutlineInformationCircle size={22} className="text-[#2d99b5] hover:text-gray-200 cursor-pointer"/>
                <div className='mt-auto'>
                    <HiLogout size={22} className="text-[#2d99b5] hover:text-gray-200 cursor-pointer"/>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;