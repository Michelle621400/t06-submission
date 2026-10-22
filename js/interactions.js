// Build the screen-technology buttons and connect them to histogram filtering.
const populateFilters = (data) => {
    // Step 7.3 Set up buttons and event listeners
<<<<<<< HEAD
    d3.select("#filters_screen")
        .selectAll(".filter")
        .data(filters_screen)
        .join("button")
            .attr("class", d => `filter ${d.isActive ? "active" : ""}`)
            .text(d => d.label)
            .on("click", (e, d) => {
                console.log("Clicked filter:", d);

                // Only react if the clicked button is not already active
                if (!d.isActive) {
                    // Mark the clicked filter as active, all others as inactive
                    filters_screen.forEach(filter => {
                        filter.isActive = filter.id === d.id;
                    });

                    // Update the button styles
                    d3.selectAll(".filter")
                        .classed("active", filter => filter.id === d.id);

                    // Update the histogram
                    updateHistogram(d.id, data);
                }
            });
=======
    
>>>>>>> bbd6ebc411d84908e3907a73752436d3355105cc
};

const updateHistogram = (filterId, data) => {
    // Step 7.4 Update the histogram
<<<<<<< HEAD
    const updatedData = filterId === "all"
        ? data
        : data.filter(tv => tv.screenTech === filterId);

    const updatedBins = binGenerator(updatedData);

    d3.selectAll("#histogram rect")
        .data(updatedBins)
        .transition()
            .duration(500)
            .ease(d3.easeCubicInOut)
            .attr("y", d => yScale(d.length))
            .attr("height", d => innerHeight - yScale(d.length));
};

// T06-2 Step 3: Creating a tooltip and adding function call to load-data.js
const createTooltip = (data) => {
    // Step 3.2 Append (a hidden) tooltip to innerChartS
    const tooltip = innerChartS
        .append("g")
            .attr("class", "tooltip")
            .style("opacity", 0)
            .style("pointer-events", "none"); // the tooltip never blocks the circles

    // Step 3.3 Append tooltip background rectangle
    tooltip
        .append("rect")
            .attr("width", tooltipWidth)
            .attr("height", tooltipHeight)
            .attr("rx", 3)
            .attr("ry", 3)
            .attr("fill", barColor)
            .attr("fill-opacity", 0.75);

    // Step 3.4 Append tooltip text
    tooltip
        .append("text")
            .text("NA")
            .attr("x", tooltipWidth / 2)
            .attr("y", tooltipHeight / 2 + 2)
            .attr("text-anchor", "middle")
            .attr("alignment-baseline", "middle")
            .attr("fill", "white")
            .style("font-weight", 900);
};

// T06-2 Step 3.5 Add function to react to mouse events
const handleMouseEvents = () => {
    // Step 3.6 Select all the circles in the scatter plot
=======

};

// T06-2 Step 3: Creating a tooltip and adding function call to load-data.js
const createTooltip = () => {
    // Step 3.2 Append (a hidden) tooltip to innerChart

    // Step 3.3 Append tooltip background rectangle

    // Step 3.4 Apped tooltip text

};

// T06-2 Step 3.5 Add functions to react to mouse events
const handleMouseEvents = () => {
    const tooltip = innerChartS.select(".tooltip");

    // Step 3.6 Select all circles in scatter plot
    // Step 3.7 Attach event listeners to mouseenter and mouseleave events
>>>>>>> bbd6ebc411d84908e3907a73752436d3355105cc
    innerChartS.selectAll("circle")
        // Step 3.7 Attach event listeners to mouseenter and mouseleave events
        .on("mouseenter", (e, d) => {
            console.log("Mouse entered circle", d);

            // Step 3.8 (1) Update the tooltip text with the screen size
            d3.select(".tooltip text")
                .text(d.screenSize);

            // Step 3.8 (2) Get the position of the hovered circle
            const cx = e.target.getAttribute("cx");
            const cy = e.target.getAttribute("cy");

            // Step 3.8 (3) Centre the tooltip above the circle and fade it in
            d3.select(".tooltip")
                .interrupt()
                .attr("transform", `translate(${cx - 0.5 * tooltipWidth}, ${cy - 1.5 * tooltipHeight})`)
                .transition()
                    .duration(200)
                    .style("opacity", 1);
        })
        .on("mouseleave", (e, d) => {
            console.log("Mouse left circle", d);

            // Step 3.8 (4) Hide the tooltip and move it out of the way
            d3.select(".tooltip")
                .interrupt()
                .style("opacity", 0)
                .attr("transform", `translate(0, 500)`);
        });
};