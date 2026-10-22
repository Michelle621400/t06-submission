const drawHistogram = (data) => {
    // Step 6.1 Set the dimensions and margins of the chart area
    // standard (Dufour & Meeks)
    const svg = d3.select("#histogram")
        .append("svg")
        .attr("viewBox", `0 0 ${width} ${height}`) //responsive SVG
        
    // Create an inner chart group with margins
    const innerChart = svg.append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);

    // Step 6.2 Set up bins
    // First, in shared-constants.js, create a bin generator using d3.bin
    const binGenerator = d3.bin()
        .value(d => d.energyConsumption) // accessor for energyConsumption

    // Second, Generate the bins
    const bins = binGenerator(data); // Save the bins into an array
    console.log(bins); // Log the bins to the console for debugging

    // Step 6.3 Get the lower and upper bounds of bins
    const minEng = bins[0].x0; // lower bound of the first bin
    const maxEng = bins[bins.length - 1].x1; // upper bound of the last bin
    const binsMaxLength = d3.max(bins, d => d.length); // maximum length of the bins

    // Define scales (from shared constants)
    xScale
        .domain([minEng, maxEng]) // set the domain based on the min and max energy consumption
        .range([0, innerWidth]); // set the range based on the inner width of the chart
    
    yScale
        .domain([0, binsMaxLength]) // set the domain based on the maximum length of the bins
        .range([innerHeight, 0]) // set the range based on the inner height of the chart
        .nice(); //use the nice() method to round the y-axis values

    // Step 6.4 Draw the bars of the histogram
    innerChart
        .selectAll("rect")
        .data(bins)
        .join("rect")
            .attr("x", d => xScale(d.x0)) // set the x position based on the lower bound of the bin
            .attr("y", d => yScale(d.length)) // set the y position based on the length of the bin
            .attr("width", d => xScale(d.x1) - xScale(d.x0)) // set the width based on the difference between the upper and lower bounds of the bin
            .attr("height", d => innerHeight - yScale(d.length)) // set the height based on the length of the bin
            .attr("fill", barColor) // set the fill color of the bars
            .attr("stroke", bodyBackgroundColor) // set the stroke color of the bars
            .attr("stroke-width", 2); // set the stroke width of the bars

    // Step 6.5 Add axes
    const bottomAxis = d3.axisBottom(xScale); // create a bottom axis using the xScale

    // Add the x-axis to the bottom of the inner chart
    innerChart
        .append("g")
        .attr("transform", `translate(0, ${innerHeight})`) // move the axis to the bottom of the inner chart
        .call(bottomAxis); // call the bottom axis to render it

    // Add the x-axis label
    svg
        .append("text")
        .text("Labeled Energy Consumption (kWh/year)") // set the text of the label
        .attr("text-anchor", "end") // align the text to the end
        .attr("x", width -20) // position the label at the right edge of the chart
        .attr("y", height - 5) // position the label slightly above the bottom edge of the chart
        .attr("class", "axis-label"); // add a class for styling

    // Step 6.6 Add left axis
    const leftAxis = d3.axisLeft(yScale); // create a left axis using the yScale
    
    innerChart
        .append("g")
        .call(leftAxis); // call the left axis to render it

    svg
        .append("text")
        .text("Frequency") // set the text of the label
        .attr("x", 30) // position the label at the left edge of the chart
        .attr("y", 20) 
        .attr("class", "axis-label");   

    // Add the y-axis to the bottom of the chart relative to the inner chart
};