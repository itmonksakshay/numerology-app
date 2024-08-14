import { styled } from "@mui/material";
import React from 'react'
import CardWrapper from "../atoms/CardWrapper";
import ArrowUp from "../../assets/ArrowImage6/ArrowUp.svg";

const GridCardWrapper = styled("div")({
    background: "#FFF9F2",
    border: "1px solid #FFCEB0",
    ".title": {
        color: "#FB6514",
        fontWeight: 600,
        fontSize: "16px"
    },
    ".content": {
        fontWeight: 500,
        fontSize: "14px",
        color: "#1F1F1F"
    },
    ".arrow-value": {
        fontWeight: 600,
        fontSize: "20px"
    }
});

const GridCard = ({ children, title, arrowValue, ...extraProps }) => {
    return (
        <div style={{ marginBottom: "-28px" }}>
            <CardWrapper {...extraProps} className="mx-2">
                <GridCardWrapper className="rounded-xl text-center py-3">
                    <div className="flex flex-col justify-center items-center">
                        <div className="flex justify-center items-center gap-4 mx-4">
                            <div className="title">{title}</div>
                        </div>
                        <div className="content">{children}</div>
                    </div>
                </GridCardWrapper>
            </CardWrapper>
            <div className='flex flex-col justify-center items-center text-white mt-5'>
                <div className="arrow-value">{arrowValue}</div>
                <img src={ArrowUp} alt="threeStarIcon" />
            </div>
        </div>
    )
}

export default GridCard




