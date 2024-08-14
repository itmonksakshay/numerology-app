import React from 'react'
import DataChart from '../molecules/DataChart'

const PreviewDataChart = () => {
  const data = [
    { date: 2021, value: 9 },
    { date: 2022, value: 7 },
    { date: 2023, value: 5 },
    { date: 2024, value: 3 },
    { date: 2025, value: 1 },
    { date: 2026, value: 4 },
    { date: 2027, value: 2 },
    { date: 2028, value: 5 },
    { date: 2029, value: 7 },
    { date: 2030, value: 9 },
    { date: 2031, value: 7 },
  ];
  return (
    <DataChart data={data} boxHeight={254} defaultWidth={564} />
  )
}

export default PreviewDataChart