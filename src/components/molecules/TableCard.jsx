import React from 'react'

const TableCard = ({ items }) => {
    console.log(items)
    return <div className='w-full h-full rounded-[10px] border-[3px] text-[31.29px]  font-semibold'>
        {items.map((item, index) => (
            <div className=' w-full text-[30px] h-[76px] border-t flex first:border-0 first:rounded-t-[10px] last:rounded-b-[10px] '>
                <div   style={{backgroundColor:`${item.bgcolor}`}} className='text-[24px]  border-r    flex  grow shrink-0 basis-[22%] justify-center items-center last:border-0'>{item.title}</div>
                <div   style={{backgroundColor:`${item.bgcolor}`}}  className='border-r    flex grow shrink-0 basis-[17%]  justify-center items-center last:border-0'>{item.column1.number}{item.column1.power && <sup className='relative top-[-6px] text-[16px] '>{item.column1.power}</sup>}</div>
                
                <div    style={{backgroundColor:`${item.bgcolor}`}}  className='border-r    flex grow shrink-0 basis-[17%]  justify-center items-center last:border-0'>{item.column2.number}{item.column2.power && <sup className='relative top-[-6px] text-[16px] '>{item.column2.power}</sup>}</div>
                
                <div   style={{backgroundColor:`${item.bgcolor}`}}   className='border-r   flex grow shrink-0 basis-[17%]  justify-center items-center last:border-0'>{item.column3.number}{item.column3.power && <sup className='relative top-[-6px] text-[16px] '>{item.column3.power}</sup>}</div>

                <div   style={{backgroundColor:`${item.bgcolor}`}}   className='border-r   flex  grow shrink-0 basis-[27%] justify-center items-center last:border-0'>
                {item.column4.values.map((value, index) => (
                        <div key={index}>
                            <div className='mx-[2px] rounded-md text-[20px] px-2 py-[1px]' style={{ backgroundColor: `${item.column4.bgcolor}` }}>{value.number}{value.power && <sup className='relative top-[-6px] text-[12px] '>{value.power}</sup>}</div>
                        </div>
                    ))}                    
                </div>
                
            </div>
        ))}
    </div>

}

export default TableCard