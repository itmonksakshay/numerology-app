import { styled } from '@mui/material';
import React from 'react';

const WrapperButton = styled('button')({
    height: "44px",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: 600,
    lineHeight: "19.36px",
    cursor: 'pointer',
    background:"#525785",
    color:"#FFFFFF"
});
const StandardButton =({ children, ...extraProps }) => {
    return (
        <WrapperButton
            {...extraProps} 
            className='flex justify-center items-center px-4'
        >
            {children}
        </WrapperButton>
    );
}

export default StandardButton