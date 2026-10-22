// Set up dimensions and margins
const margin = { top: 50, right: 30, bottom: 50, left: 70 };
const width = 800; // Total width of the chart
const height = 400; // Total height of the chart
const innerWidth = width - margin.left - margin.right;
const innerHeight = height - margin.top - margin.bottom;

<<<<<<< HEAD
// T06-2 Step 1.4 Inner chart for the scatterplot (assigned in scatterplot.js)
let innerChartS;

// T06-2 Step 1.4 Tooltip size
const tooltipWidth = 65;
const tooltipHeight = 32;

// Create a bin generator using d3.bin
const binGenerator = d3.bin()
    .value(d => d.energyConsumption); // Accessor for energyConsumption
    // .value(d => d.screenSize) // Accessor for screenSize
=======
/* Make the colours accessible globally */
/****************************************/
const barColor = "#606464";
const bodyBackgroundColor = "#fffaf0";
>>>>>>> bbd6ebc411d84908e3907a73752436d3355105cc

// Set up the scales
const xScale = d3.scaleLinear();
const yScale = d3.scaleLinear();
<<<<<<< HEAD
// T06-2 Step 1.4 Scales and colour scale for the scatterplot
const xScaleS = d3.scaleLinear();
const yScaleS = d3.scaleLinear();
const colorScale = d3.scaleOrdinal();

/* Make the colours accessible globally */
const barColor = "#606464";
const bodyBackgroundColor = "#fffaf0";

/* Make the filter options accessible globally */
const filters_screen = [
    { id: "all", label: "All", isActive: true },
    { id: "LED", label: "LED", isActive: false },
    { id: "LCD", label: "LCD", isActive: false },
    { id: "OLED", label: "OLED", isActive: false }
];
=======

// T06-1 Step 6.2 Create a bin generator using d3.bin

// T06-1 Step 7.2 Make the filter options accessible globally

// T06-2 Step 1.4 Set up shared constant

// T06-2 Step 3.3 Add tooltipWidth and tooltipHeight
>>>>>>> bbd6ebc411d84908e3907a73752436d3355105cc
