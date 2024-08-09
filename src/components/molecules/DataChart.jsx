import * as d3 from "d3";
import React, { useEffect, useRef, useState } from "react";

/**
 * how you used the components
 */
export default function DataChart({ boxHeight,data,defaultWdith}) {

  const svgRef = useRef();
  const containerRef = useRef();
  const [boxWidth, setWidth] = useState(defaultWdith); // Default width

  useEffect(() => {
    // Function to update the SVG width
    const updateWidth = () => {
      const containerWidth = containerRef.current?.getBoundingClientRect().width;
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

    const margin = { top: 50, right:20, bottom: 30, left:30 };
    const width = boxWidth - margin.left - margin.right;
    const height = boxHeight - margin.top - margin.bottom;

    const x = d3
      .scaleLinear()
      .domain(d3.extent(data, (d) => d.date))
      .range([0, width]);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value)])
      .nice()
      .range([height, 0]);

    const line = d3
      .line()
      .x((d) => x(d.date))
      .y((d) => y(d.value))
      .curve(d3.curveCatmullRom.alpha(1));

    svg.selectAll("*").remove(); // Clear previous renders

    const g = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    g.selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("cx", (d) => x(d.date))
      .attr("cy", (d) => y(d.value))
      .attr("r", 12)
      .attr("fill", "#1B143D")
      .attr("opacity", 1)
      .attr("transform", `translate(0,-25)`);

    g.selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .attr("x", (d) => x(d.date)) // Adjust x position to avoid overlap with circle
      .attr("y", (d) => y(d.value))
      .attr("dy", "-1.25em")
      .attr("dx", "-0.25em") // Adjust vertical positioning
      .attr("font-size", "16px")
      .attr("fill", "#FFFFFF")
      .text((d) => d.value);

    svg.append('g').attr("transform", `translate(${margin.left},-${margin.bottom})`).selectAll(".grid")
      .data(data) // Adjust the number of vertical grid lines
      .enter()
      .append("line")
      .attr("class", "grid")
      .attr("x1", (d) => x(d.date))
      .attr("x2", (d) => x(d.date))
      .attr("y1", 0)
      .attr("y2", boxHeight)
      .attr("stroke", "rgba(255, 255, 255, 0.1)")
      .attr("stroke-width", 1);

    const extendedData = [
        {date: Math.min(...data.map(d => d.date)) - 1, value: y.invert(d3.mean(data.map(d => y(d.value)))) },
        ...data,
        { date: Math.max(...data.map(d => d.date)) + 1, value: y.invert(d3.mean(data.map(d => y(d.value)))) }
      ];
  
      svg.append('path')
        .datum(extendedData)
        .attr("fill", "none")
        .attr("stroke", "#FF7B34")
        .attr("stroke-width", 2)
        .attr("d", line)
        .attr("transform", `translate(${margin.left},${margin.top})`);

    const xAxisGroup = g.append("g")
      .attr("transform", `translate(0,${height})`)
      .call(
        d3
          .axisBottom(x)
          .tickFormat((d) => `${d}`)
          .tickSize(0)
      );
    xAxisGroup.selectAll("text")
    .attr("stroke", "#FFFFFF") 
    .attr("fill", "#FFFFFF") // Change text color here
    .attr("font-size", "12px") // Optionally change font size
    .attr("text-anchor", "middle")
    .attr("dy", "2em");

    xAxisGroup.select(".domain") // Select the axis path
    .attr("stroke", "#514D63") // Change the stroke color here
    .attr("stroke-width",1); // Optionally adjust stroke width

  }, [data,boxWidth]);

  return <div className="w-full" ref={containerRef}>
    <svg ref={svgRef}></svg>
  </div>;



}
