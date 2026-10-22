// T06-2 Step 2.1 Set up function
const drawScatterplot = (data) => {
<<<<<<< HEAD

    // T06-2 Step 2.2 Set up chart area
    /// Set the dimensions and margins of the chart area
    const svg = d3.select("#scatterplot")
        .append("svg")
            .attr("viewBox", `0 0 ${width} ${height}`); // Responsive SVG

    /// Create an inner chart group with margins.
    /// innerChartS is already declared in shared-constants.js, so no "const" here.
    innerChartS = svg
        .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);

    // T06-2 Step 2.3 Set up x and y scales using data extents
    /// x = star rating, y = labeled energy consumption. Both axes start at 0.
    const xMax = d3.max(data, d => d.star);
    const yMax = d3.max(data, d => d.energyConsumption);

    /// xScaleS and yScaleS are also declared in shared-constants.js
    xScaleS
        .domain([0, xMax])
        .range([0, innerWidth]);

    yScaleS
        .domain([0, yMax])
        .range([innerHeight, 0]);

    // T06-2 Step 2.4 Set up colour scale
    const uniqueTechs = [...new Set(data.map(d => d.screenTech))]; // Unique screenTech values

    colorScale
        .domain(uniqueTechs)
        .range(d3.schemeCategory10); // Use a predefined colour scheme

    // T06-2 Step 2.5 Draw the circles
    innerChartS.selectAll("circle")
        .data(data)
        .join("circle")
            .attr("cx", d => xScaleS(d.star))
            .attr("cy", d => yScaleS(d.energyConsumption))
            .attr("r", 4)
            .attr("fill", d => colorScale(d.screenTech))
            .attr("opacity", 0.5);

    // T06-2 Step 2.6 Add bottom and left axis
    const bottomAxis = d3.axisBottom(xScaleS);
    innerChartS.append("g")
        .attr("transform", `translate(0, ${innerHeight})`)
        .call(bottomAxis);

    svg.append("text")
        .text("Star Rating")
        .attr("text-anchor", "end")
        .attr("x", width - 20)
        .attr("y", height - 5)
        .attr("class", "axis-label");

    const leftAxis = d3.axisLeft(yScaleS);
    innerChartS.append("g")
        .call(leftAxis);

    /// Vertical label, rotated to read bottom-to-top beside the left axis
    svg.append("text")
        .text("Labeled Energy Consumption (kWh/year)")
        .attr("transform", "rotate(-90)")
        .attr("text-anchor", "middle")
        .attr("x", -(margin.top + innerHeight / 2))
        .attr("y", 18)
        .attr("class", "axis-label");

    // T06-2 Step 2.7 Add a legend on the right-hand side
    const legend = svg.append("g")
        .attr("class", "legend")
        .attr("transform", `translate(${width - 140}, ${margin.top})`);

    uniqueTechs.forEach((tech, i) => {
        const g = legend.append("g")
            .attr("transform", `translate(0, ${i * 22})`);
=======
    // T06-2 Step 2.2
    /// Set the dimensions and margins of the chart area

    /// Create an inner chart group with margins
    
    // T06-2 Step 2.3
    /// Set up x and y scales using data extents

    /// Map star ratings and screen sizes to positions within the chart area.

    // T06-2 Step 2.4
    /// (Corrected code) Set up colours for screen technologies
    const uniqueTechs = [...new Set(data.map(d => d.screenTech))];

    colorScale
        .domain(uniqueTechs)
        .range(d3.schemeCategory10);
    
    // T06-2 Step 2.5 Draw the circles

    // T06-2 Step 2.6 Add bottom and left axis
    /// Add axes

    // T06-2 Step 2.7 Add legend
    /// Add a legend on the right-hand side

    // Show each screen technology with its matching point colour.
>>>>>>> bbd6ebc411d84908e3907a73752436d3355105cc

        g.append("rect")
            .attr("width", 12)
            .attr("height", 12)
            .attr("fill", colorScale(tech));

        g.append("text")
            .attr("x", 18)
            .attr("y", 10)
            .text(tech)
            .attr("class", "axis-label");
    });
};