import { styled } from '@mui/material';
import React from 'react';

const WrapperButton = styled('button')({
    borderRadius: "8px",
    background: "#FB6514",
    fontSize: "15px",
    fontWeight: 600,
    lineHeight: "18.15px",
    textAlign: "center",
    height: "44px",
    color: "#ffffff",
    cursor: 'pointer',
    padding : " 5px 30px"
});

const PrimaryButton = ({ children, ...extraProps }) => {
    return (
        <WrapperButton
            {...extraProps}
        >
            {children}
        </WrapperButton>
    );
};

export default PrimaryButton;