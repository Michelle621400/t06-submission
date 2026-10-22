// Load the CSV file with a row conversion function
d3.csv("data/Ex6_TVdata.csv", d => ({
    brand: d.brand,
    model: d.model,
    screenSize: +d.screenSize, // Convert screenSize to a number
    screenTech: d.screenTech,
    energyConsumption: +d.energyConsumption, // Convert energyConsumption to a number
    star: +d.star // Convert star to a number
})).then(data => {
    // Log the processed data to the console
    console.log(data);

    // T06-1 Step 4: Call functions after data is loaded
    drawHistogram(data)
    populateFilters(data)
    // T06-2 Step 1.3 Call the drawScatterplot
    
    // T06-2 Step 3: Call the createTooltip() and handleMouseEvents() function

<<<<<<< HEAD
    // T06-2 Step 3: the tooltip must be created after the scatterplot exists
    createTooltip();
    handleMouseEvents();
=======
>>>>>>> bbd6ebc411d84908e3907a73752436d3355105cc
}).catch(error => {
    console.error("Error loading the CSV file:", error);
});