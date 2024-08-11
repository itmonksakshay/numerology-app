import * as d3 from "d3";
import React, { useEffect, useRef, useState } from "react";

/**
 * how you used the components
 */
export default function DataChart({
  boxHeight,
  data,
  defaultWdith,
  topAxisData,
}) {
  const svgRef = useRef();
  const containerRef = useRef();
  const [boxWidth, setWidth] = useState(defaultWdith); // Default width
  const [markerPositions, setMarkerPositions] = useState([]);
  const [circlePositions, setCirlcePositions] = useState([]);

  useEffect(() => {
    // Function to update the SVG width
    const updateWidth = () => {
      const containerWidth =
        containerRef.current?.getBoundingClientRect().width;
      setWidth(containerWidth || defaultWdith); // Fallback to default width if container is not available
    };

    // Initial update
    updateWidth();

    // Create a ResizeObserver to handle container resizing
    const resizeObserver = new ResizeObserver(updateWidth);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    // Cleanup on component unmount
    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const svg = d3
      .select(svgRef.current)
      .attr("width", boxWidth)
      .attr("height", boxHeight);

    const margin = { top: 50, right: 20, bottom: 30, left: 30 };
    const width = boxWidth - margin.left - margin.right;
    const tempHeight = boxHeight - margin.top - margin.bottom;
    const height = topAxisData?.length ? tempHeight - 20 : tempHeight;

    const xAxis = d3
      .scaleLinear()
      .domain(d3.extent(data, (d) => d.date))
      .range([0, width]);

    const yAxis = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value)])
      .nice()
      .range([topAxisData?.length ? height - 20 : height, 0]);

    const line = d3
      .line()
      .x((d) => xAxis(d.date))
      .y((d) => yAxis(d.value))
      .curve(d3.curveCatmullRom.alpha(1));

    const extendedData = [
      {
        date: Math.min(...data.map((d) => d.date)) - 1,
        value: yAxis.invert(d3.mean(data.map((d) => yAxis(d.value)))),
      },
      ...data,
      {
        date: Math.max(...data.map((d) => d.date)) + 1,
        value: yAxis.invert(d3.mean(data.map((d) => yAxis(d.value)))),
      },
    ];

    svg.selectAll("*").remove(); // Clear previous renders

    if (topAxisData) {
      const topAxis = d3
        .scaleLinear()
        .domain(d3.extent(topAxisData, (d) => d))
        .range([0, width]);

      // Add top x-axis
      const topAxisGroup = svg
        .append("g")
        .attr("transform", `translate(${margin.left},16)`)
        .call(
          d3
            .axisTop(topAxis)
            .tickSize(0)
            .tickFormat((d) => `${d}t`)
        );

      topAxisGroup
        .selectAll("text")
        .attr("stroke", "#FFFFFF")
        .attr("fill", "#FFFFFF") // Change text color here
        .attr("font-size", "13px") // Optionally change font size
        .attr("text-anchor", "middle")
        .attr("font-family", "Inter");
      topAxisGroup.selectAll(".domain, .tick line").remove();

      // Draw topChart XAxis

      const xAxisGroup = svg
        .append("g")
        .attr("transform", `translate(${margin.left},${boxHeight - 20})`)
        .call(
          d3
            .axisBottom(xAxis)
            .tickFormat((d) => `${d}`)
            .tickSize(0)
        );
      xAxisGroup
        .selectAll("text")
        .attr("stroke", "#FFFFFF")
        .attr("fill", "#FFFFFF") // Change text color here
        .attr("font-size", "15px") // Optionally change font size
        .attr("text-anchor", "middle")
        .attr("line-height", "14.52px")
        .attr("font-weight", "500")
        .attr("font-family", "Inter")
        .attr("dy", "1em");
      xAxisGroup
        .select(".domain") // Select the axis path
        .attr("stroke", "rgba(210, 210, 210,0.2)") // Change the stroke color here
        .attr("stroke-width", 1); // Optionally adjust stroke width

      // Grid Lines
      const gridLines = svg
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.bottom})`)
        .selectAll(".grid")
        .data(data) // Adjust the number of vertical grid lines
        .enter();

      gridLines
        .append("line")
        .attr("class", "grid")
        .attr("x1", (d) => xAxis(d.date))
        .attr("x2", (d) => xAxis(d.date))
        .attr("y1", 0)
        .attr("y2", boxHeight - margin.top)
        .attr("stroke", "rgba(255, 255, 255, 0.1)")
        .attr("stroke-width", 1);

      // chart bottom axis

      const mainChart = svg
        .append("g")
        .attr(
          "transform",
          `translate(${margin.left},${margin.top + margin.bottom + 20})`
        );

      const lineChart = svg
        .append("g")
        .attr(
          "transform",
          `translate(${margin.left},${margin.top + margin.bottom + 20})`
        );

      // Markers Circle
      mainChart
        .selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", (d) => xAxis(d.date))
        .attr("cy", (d) => yAxis(d.value))
        .attr("r",3)
        .attr("fill", "#FF7B34")
        .attr("opacity", 1)

      // curve line
      lineChart
        .append("path")
        .datum(extendedData)
        .attr("fill", "none")
        .attr("stroke", "#FF7B34")
        .attr("stroke-width", 2)
        .attr("d", line);


      const circles = data
        .map(d => ({
          x: xAxis(d.date),
          y: yAxis(d.value),
          label:d.value
        }));
    
        setCirlcePositions(circles)
    } else {
      const g = svg
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

      g.selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", (d) => xAxis(d.date))
        .attr("cy", (d) => yAxis(d.value))
        .attr("r", 15)
        .attr("fill", "#1B143D")
        .attr("opacity", 1)
        .attr("transform", `translate(0,-25)`);

      g.selectAll("text")
        .data(data)
        .enter()
        .append("text")
        .attr("x", (d) => xAxis(d.date)) // Adjust x position to avoid overlap with circle
        .attr("y", (d) => yAxis(d.value))
        .attr("dy", "-1.25em")
        // .attr("dx", "-0.25em") // Adjust vertical positioning
        .attr("fill", "#FFFFFF")
        .attr("font-size", "16px") // Optionally change font size
        .attr("text-anchor", "middle")
        .attr("line-height", "19.36px")
        .attr("font-weight", "500")
        .attr("font-family", "Inter")
        .text((d) => d.value);

      svg
        .append("g")
        .attr("transform", `translate(${margin.left},-${margin.bottom})`)
        .selectAll(".grid")
        .data(data) // Adjust the number of vertical grid lines
        .enter()
        .append("line")
        .attr("class", "grid")
        .attr("x1", (d) => xAxis(d.date))
        .attr("x2", (d) => xAxis(d.date))
        .attr("y1", 0)
        .attr("y2", boxHeight)
        .attr("stroke", "rgba(255, 255, 255, 0.1)")
        .attr("stroke-width", 1);

      svg
        .append("path")
        .datum(extendedData)
        .attr("fill", "none")
        .attr("stroke", "#FF7B34")
        .attr("stroke-width", 2)
        .attr("d", line)
        .attr("transform", `translate(${margin.left},${margin.top})`);
      // Top Axis

      const xAxisGroup = g
        .append("g")
        .attr("transform", `translate(0,${height})`)
        .call(
          d3
            .axisBottom(xAxis)
            .tickFormat((d) => `${d}`)
            .tickSize(0)
        );
      xAxisGroup
        .selectAll("text")
        .attr("stroke", "#FFFFFF")
        .attr("fill", "#FFFFFF") // Change text color here
        .attr("font-size", "12px") // Optionally change font size
        .attr("text-anchor", "middle")
        .attr("line-height", "14.52px")
        .attr("font-weight", "500")
        .attr("font-family", "Inter")
        .attr("dy", "1em");

      xAxisGroup
        .select(".domain") // Select the axis path
        .attr("stroke", "#514D63") // Change the stroke color here
        .attr("stroke-width", 1); // Optionally adjust stroke width
    }

    const positions = data
    .filter(d => d.markerValue) // Filter based on markerValue
    .map(d => ({
      x: xAxis(d.date),
      y: yAxis(d.value),
      label:d.markerValue
    }));

    if(positions.length){
      setMarkerPositions(positions);
    }
  
  }, [data, boxWidth]);

  return (
    <div className="w-full relative before:!p-0" ref={containerRef}>
      <svg ref={svgRef}></svg>
      {markerPositions.map((pos, index) => (
        <div
          key={index}
          className={'absolute translate-y-1/2 before:!p-0 h-[32px] translate-x-[-10%] bg-orangeCrayola rounded text-white text-[13px] font-semibold flex items-center px-[14px]'}
          style={{
            left: pos.x + 'px',
            top: pos.y + 'px',
          }}
        >
          {pos.label}
        </div>
      ))}
      {circlePositions.map((pos, index) => (
        <div
          key={index}
          className={'absolute translate-x-[30%] w-[38px] h-[38px] bg-aliceBlue translate-y-[130%] before:!p-0 h-[32px] rounded-full text-ereieBlack text-[18px] font-semibold flex items-center px-[14px]'}
          style={{
            left: pos.x + 'px',
            top: pos.y + 'px',
          }}
        >
          {pos.label}
        </div>
      ))}
    </div>
  );
}
