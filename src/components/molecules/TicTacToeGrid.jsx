import React, { useState } from 'react';
import { Grid, Button, Box, styled } from '@mui/material';


const GridButton = styled(Button)(({ theme }) => ({
    width: '100px',
    height: '100px',
    fontSize: '2rem',
    border: '1px solid #ddd',
    '&:focus': {
      outline: 'none',
    },
  }));

const TicTacToeGrid = ({data}) => {
  return (
      <div className='w-full'>
        {[0, 1, 2].map(index => (
          <div className='flex border-t border-white/[0.3] first:border-0' item key={index}>
            {[0, 1, 2].map((subIndex,idx) => {
                 const dataKey = index*3+subIndex+1;
                 const columnData = data?.find((item)=> item.id == dataKey)
                 const title = columnData?.title;
                 const subTitle = columnData?.subTitle;

                return <div key={idx} className='w-[76px] h-[56px] flex border-l  border-white/[0.3] first:border-0 justify-center items-center'>
                    {title && <span className='text-white font-semibold text-4 leading-[19.36px]'>{title}</span>}
                    {subTitle && <span className='text-orangeCrayola font-semibold text-4 leading-[19.36px]'>{subTitle}</span>}
                    </div>
            })}
          </div>
        ))}
      </div>
  )
}

export default TicTacToeGrid