/**
 * Dual Y axis visualization - DBL Visualization
 * Authors: Heleen van Dongen, Veerle Uhl, Quinn van Rooy, Geert Wood, Hieke van Heesch, Martijn van Kekem.
 */

let dualY = null;

/**
 * Dual Y axis - Visualization Class
 */
class DualY {
  /**
   * @param {Array}  json              JSON array with data to visualize.


  var margin = {
      top: 30,
      right: 40,
      bottom: 30,
      left: 50
    },
    width = 600 - margin.left - margin.right,
    height = 270 - margin.top - margin.bottom;
/*
  var parseDate = d3.timeParse("%d-%b-%y");

  var x = d3.scaleTime().range([0, width]);
  var y0 = d3.scaleLinear().range([height, 0]);
  var y1 = d3.scaleLinear().range([height, 0]);

  var xAxis = d3.axisBottom(x).ticks(5);

  var yAxisLeft = d3.axisLeft(y0).ticks(5);

  var yAxisRight = d3.axisRight(y1).ticks(5);

  var valueline = d3.line()
    .x(function(d) {
      return x(d.date);
    })
    .y(function(d) {
      return y0(d.close);
    });

  var valueline2 = d3.line()
    .x(function(d) {
      return x(d.date);
    })
    .y(function(d) {
      return y1(d.open);
    });

  var svg = d3.select("body")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
      "translate(" + margin.left + "," + margin.top + ")");

  // Get the data
  d3.json(json, function(error, data) {
        data.forEach(function(d) {
          d.date = parseDate(d.date);
          d.close = +d.close;
          d.open = +d.open;
        });

        // Scale the range of the data
        x.domain(d3.extent(data, function(d) {
          return d.date;
        }));
        y0.domain([0, d3.max(data, function(d) {
          return Math.max(d.close);
        })]);
        y1.domain([0, d3.max(data, function(d) {
          return Math.max(d.open);
        })]);

        svg.append("path") // Add the valueline path.
          .attr("d", valueline(data));

        svg.append("path") // Add the valueline2 path.
          .style("stroke", "red")
          .attr("d", valueline2(data));

        svg.append("g") // Add the X Axis
          .attr("class", "x axis")
          .attr("transform", "translate(0," + height + ")")
          .call(xAxis);

        svg.append("g")
          .attr("class", "y axis")
          .style("fill", "steelblue")
          .call(yAxisLeft);

        svg.append("g")
          .attr("class", "y axis")
          .attr("transform", "translate(" + width + " ,0)")
          .style("fill", "red")
          .call(yAxisRight);


      }
