import { styled } from '@mui/material';
import React from 'react';

const WrapperButton = styled('button')({
    borderRadius: "7px",
    fontSize: "15px",
    fontWeight: 500,
    lineHeight: "18.15px",
    textAlign: "center",
    height: "44px",
    color: "#ffffff",
    cursor: 'pointer',
    padding : " 5px 30px",
    border: "1px solid #FFFFFF"
});

const SecondaryButton = ({ children, ...extraProps }) => {
    return (
        <WrapperButton
            {...extraProps}
        >
            {children}
        </WrapperButton>
    );
};

export default SecondaryButton;