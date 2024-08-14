import React from 'react'

const SimpleDataCard = ({ items }) => {

    return (
        <div className='w-[300px] h-[142px] text-[15px] font-bold flex  flex-col bg-white rounded-lg'>
            {items.map((item, index) => (
                <div key={index} className='flex  w-full h-full border-b last:border-0 border-[#A1A1A1] first:rounded-t-lg last:rounded-b-lg '>
                    <div className='flex items-center justify-center grow shrink-0 basis-[70%] border-r  border-[#A1A1A1] text-[#1F1F1F]'>
                        {item.title}
                    </div>
                    <div className='flex items-center justify-center grow shrink-0 basis-[30%] border-[#A1A1A1] text-[#FB6514] '>
                        {item.rank}
                    </div>
                </div>

            ))}

        </div>
    )
}

export default SimpleDataCard