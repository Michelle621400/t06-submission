const drawHistogram = (data) => {
    // Step 6.1 Set the dimensions and margins of the chart area
<<<<<<< HEAD
    const svg = d3.select("#histogram")
        .append("svg")
        .attr("viewBox", `0 0 ${width} ${height}`)

    // Create an inner chart group with margins
    const innerChart = svg.append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);
=======
    
    // Create an inner chart group with margins
>>>>>>> bbd6ebc411d84908e3907a73752436d3355105cc

    // Step 6.2 Set up bins
    // First, in shared-constants.js, create a bin generator using d3.bin
    // Second, Generate the bins
    const bins = binGenerator(data); // Save the bins into an array

    console.log(bins); // Log the bins to the console for debugging

    // Step 6.3 Get the lower and upper bounds of bins
<<<<<<< HEAD
    const minEng = bins[0].x0; // Get the lower bound of the first bin
    const maxEng = bins[bins.length - 1].x1; // Get the upper bound of the last bin
    const binsMaxlength = d3.max(bins, d => d.length); // Get the maximum length of the bins

    // Define scales (from shared constants)
    xScale
        .domain([minEng, maxEng]) // Set the domain based on the min and max energy consumption
        .range([0, innerWidth]); // Set the range based on the inner width of the chart

    yScale
        .domain([0, binsMaxlength]) // Set the domain based on the maximum length of the bins
        .range([innerHeight, 0]) // Set the range based on the inner height of the chart
        .nice(); // Make the y-axis scale "nice" for better tick values

    // Step 6.4 Draw the bars of the histogram
    innerChart
        .selectAll("rect")
        .data(bins) // Bind the bins data to the rectangles
        .join("rect") // Join the data to the rectangles
            .attr("x", d => xScale(d.x0)) // Set the x position based on the lower bound of the bin
            .attr("y", d => yScale(d.length)) // Set the y position based on the length of the bin
            .attr("width", d => xScale(d.x1) - xScale(d.x0)) // Set the width based on the bin width
            .attr("height", d => innerHeight - yScale(d.length)) // Set the height based on the length of the bin
            .attr("fill", barColor) // Set the fill color of the bars
            .attr("stroke", bodyBackgroundColor) // Set the stroke color of the bars
            .attr("stroke-width", 2); // Set the stroke width of the bars

    // Step 6.5 Add axes
    const bottomAxis = d3.axisBottom(xScale); // Create the bottom axis using the xScale

    // Add the x-axis to the bottom of the inner chart
    innerChart
        .append("g")
        .attr("transform", `translate(0, ${innerHeight})`) // Move the x-axis to the bottom of the inner chart
        .call(bottomAxis); // Call the bottom axis to render it

    // Add the x-axis label
    svg
        .append("text")
        .text("Labeled Energy Consumption (kWh/year)") // Set the text of the label
        .attr("x", width -20)
        .attr("y", height - 5)
        .attr("class", "axis-label") // Add a class for styling;

    // Step 6.6 Add left axis
    const leftAxis = d3.axisLeft(yScale); // Create the left axis using the yScale

    // Add the y-axis to the left of the inner chart
    innerChart
        .append("g")
        .call(leftAxis); // Call the left axis to render it

    // Add the y-axis label
    svg
        .append("text")
        .text("Frequency") // Set the text of the label
        .attr("x", 30) 
        .attr("y", 20)
        .attr
=======

    // Define scales (from shared constants)

    // Step 6.4 Draw the bars of the histogram

    // Step 6.5 Add axes

    // Add the x-axis to the bottom of the inner chart

    // Add the x-axis label

    // Step 6.6 Add left axis

    // Add the y-axis to the bottom of the chart relative to the inner chart
>>>>>>> bbd6ebc411d84908e3907a73752436d3355105cc
};