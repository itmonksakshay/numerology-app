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

const BigWrapperButton = styled('button')({
    background: "#FB6514",
    height: "56px",
    borderRadius: "8px",
    fontSize: "20px",
    fontWeight: 600,
    lineHeight: "24.2px",
    textAlign: "center",
    color: "#ffffff",
    cursor: 'pointer',
    padding : " 5px 30px"
});

const SmallButtonWrapper = styled('button')({
    height: "38px",
    borderRadius: "4px",
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: "16.94px",
    textAlign: "center",
    color: "#ffffff",
    cursor: 'pointer',
    background: "#FB6514",
    padding : " 5px 10px"
})

const PrimaryButton = ({ children, ...extraProps }) => {
    return (
        <WrapperButton
            {...extraProps}
        >
            {children}
        </WrapperButton>
    );
};

export const SmallPrimaryButton = ({ children, ...extraProps }) => {
    return (
        <SmallButtonWrapper
            {...extraProps}
        >
            {children}
        </SmallButtonWrapper>
    );
};

export const BigPrimaryButton = ({ children, ...extraProps }) => {
    return (
        <BigWrapperButton
            {...extraProps}
        >
            {children}
        </BigWrapperButton>
    );
};

export default PrimaryButton;