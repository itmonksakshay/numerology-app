import React from 'react';
import { CircularProgress } from '@mui/material';


// Define color ranges based on percentage
const getColor = (percentage) => {
  if (percentage <= 25) return 'red';
  if (percentage <= 50) return ' orange';
  if (percentage <= 75) return 'yellow';
  return 'yellowGreen';
};;



const PercentageCircularProgress = ({ value }) => {
  const color = getColor(value);

  return (
    <div className="flex relative justify-center items-center rounded-full before:!p-0 ">
      <CircularProgress
        variant="determinate"
        value={value}
        size={90}
        thickness={4}
        sx={{
          '.MuiCircularProgress-circle': {
            fill: '#FFFFFF'
          }
        }}
        style={{ color: color,
          width: "96px",
          height:"96px",
         }}

      />
      <div className="absolute before:!p-0 text-[24px] leading-[29.05px] font-semibold">{`${Math.round(value)}%`}</div>
    </div>
  );
};

export default PercentageCircularProgress;