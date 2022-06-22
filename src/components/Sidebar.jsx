import React from 'react';

import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';

const Sidebar = () => {
    return (
        <div className='flex flex-[0.3] slack-color text-white 
                        border-t border-solid border-t-slate-700
                        max-w-[260px] mt-[58px]'>
            <div className='flex border-b border-solid border-b-slate-700 pb-[13px] p-3'>
                <div className='flex-[1]'>
                    <h2 className='text-[15px] mb-[5px] font-black'>Frankda LLC</h2>
                    <h3 className='flex text-[13px] font-normal items-center'>
                        <FiberManualRecordIcon className="text-[14px] mr-[2px] mt-[1px] text-green-600" />
                        Frank Zamora
                    </h3>
                </div>
                <CreateIcon className='p-1 text-[#49274b] text-lg rounded-full bg-white '/>
            </div>
        </div>
    );
};

export default Sidebar;