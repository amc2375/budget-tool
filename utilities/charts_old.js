import * as d3 from "d3";
import styles from './charts.module.scss';
// https://blog.risingstack.com/d3-js-tutorial-bar-charts-with-javascript/

// https://jsfiddle.net/matehu/w7h81xz2/

export const constructChart = (averages, actuals, localSubmission, totalSubmissions, isMobile) => {

  // construct the final data structure for the chart to represent
  const data = [];
  averages.forEach(obj => {
    data.push({
      id: obj.category_id,
      name: obj.name,
      avg: obj.avg,
      actual: actuals.find(o => o.id === obj.category_id).percentageValue,
      submittedValue: localSubmission.find(o => parseInt(o.id) === obj.category_id).percentageValue
    })
  })

  // clear existing chart if it exists
  d3.selectAll("#chart > *").remove();

  // set dimensions
  const marginTop = isMobile ? 180 : 80;
  const marginRight = 40;
  const marginBottom = 80;
  const marginLeft = 200;
  const width = isMobile ? 260 : 1000 - marginLeft - marginRight;
  const height = isMobile ? 680 : 620 - marginTop - marginBottom;

  // select the dom element to fill with the chart
  const svg = d3.select('#chart')
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", "0 0" + ' ' + (width + marginLeft + marginRight) +
      ' ' + (height + marginTop + marginBottom));

  // select the container
  const svgContainer = d3.select('#container')
    .attr('class', styles.container)

  // create chart
  const chart = svg.append('g')
    // moves the start of the chart to the (60;60) position of the svg
    .attr('transform', `translate(${marginLeft}, ${marginTop})`);

  // establish scales based on dimensions and input data
  // scaleBand for the x-axis which helps to split the range into bands
  // and compute the coordinates and widths of the bars with additional padding.
  const yScale = d3.scaleBand()
    .range([0, height])
    .domain(averages.map((s) => s.name))
    // .padding(0.4)
    .padding(0.1)

  const maxValueExpected = () => {
    let max;
    data.forEach((o) => {
      max = (!max || parseInt(o.avg) > max) ? parseInt(o.avg) : max;
      max = (parseInt(o.actual) > max) ? parseInt(o.actual) : max;
      max = (parseInt(o.submittedValue) > max) ? parseInt(o.submittedValue) : max;
    })
    return Math.ceil(max / 10) * 10;
  }

  const xScale = d3.scaleLinear()
    // length that should be divided between the limits of the domain values.
    // the SVG coordinate system starts from the top left corner; that’s
    // why the range takes the width as the first parameter and not zero.
    .range([width, 0])
    // max and min values expected from the data set
    .domain([maxValueExpected(), 0])

  // add the x axis
  chart.append('g')
    .attr('transform', `translate(0, ${height})`)
    .call(d3.axisBottom(xScale).ticks((maxValueExpected()/10)));

  // add the y axis with tick marks
  const yAxis = chart.append('g')
    .call(d3.axisLeft(yScale));

  setTimeout(()=>{
    yAxis.selectAll("text")
      .call(wrap, 180);
  }, 0);

  // add horizontal lines in the background
  // if (!isMobile) {
  //   const makexLines = () => d3.axisBottom()
  //   .scale(xScale)
  //
  //   chart.append('g')
  //     .attr('class', styles.grid)
  //     .attr('transform', `translate(0, ${height})`)
  //     .call(makexLines()
  //       .tickSize(-height, 0, 0)
  //       .tickFormat('')
  //     )
  // }

    // actual bar group

    // create bar groups, one for each element in the data array
    const actualBarGroup = chart.selectAll()
      .data(data)
      .enter()
      .append('g')

    // for each element in the data set, create a rectangle that reacts
    // to mouseover
    actualBarGroup
      .append('rect')
      .attr('class', styles.actualBar)
      .attr('x', (g) => 0)
      .attr('y', (g) => yScale(g.name))
      .attr('height', yScale.bandwidth() * (1/3))
      .attr('width', (g) => xScale(g.actual))
      .on('mouseenter', function (event, datum, i) {
        d3.selectAll(`.${styles.value}`)
          .attr('opacity', 0)

        d3.select(this)
          .transition()
          .duration(300)
          .attr('opacity', 0.6)
          // .attr('y', (a) => yScale(a.name) - 5)
          .attr('height', yScale.bandwidth() * (1/3))

        const x = xScale(datum.avg)

        // const line = chart.append('line')
        //   .attr('class', styles.limit)
        //   .attr('id', 'limit')
        //   .attr('x1', x)
        //   .attr('y1', 0)
        //   .attr('x2', x)
        //   .attr('y2', height)

        // actualBarGroup.append('text')
        //   .attr('class', styles.divergence)
        //   .attr('x', (a) => xScale(a.avg) + 24)
        //   .attr('y', (a) => yScale(a.name) + yScale.bandwidth() / 1.5)
        //   .attr('fill', 'white')
        //   .attr('text-anchor', 'middle')
        //   .text((a, idx) => {
        //     const divergence = (a.avg - datum.avg).toFixed(1)
        //
        //     let text = ''
        //     if (divergence > 0) text += '+'
        //     text += `${divergence}%`
        //
        //     return a.avg !== datum.avg ? text : '';
        //   })

      })
      .on('mouseleave', function () {
        d3.selectAll(`.${styles.value}`)
          .attr('opacity', 1)

        d3.select(this)
          .transition()
          .duration(300)
          .attr('opacity', 1)
          .attr('y', (a) => yScale(a.name))
          .attr('height', yScale.bandwidth() * (1/3))

        chart.selectAll('#limit').remove()
        chart.selectAll(`.${styles.divergence}`).remove()
      })

    // append text to each bar
    actualBarGroup
      .append('text')
      .attr('class', styles.value)
      .attr('x', (a) => xScale(a.actual) + 24)
      .attr('y', (a) => yScale(a.name) + yScale.bandwidth() * (3/12))
      .attr('text-anchor', 'middle')
      .text((a) => `${a.actual}%`)

      // local submission bar group

      // create bar groups, one for each element in the data array
      const localSubmissionBarGroup = chart.selectAll()
        .data(data)
        .enter()
        .append('g')

      // for each element in the data set, create a rectangle that reacts
      // to mouseover
      localSubmissionBarGroup
        .append('rect')
        .attr('class', styles.localSubmissionBar)
        .attr('x', (g) => 0)
        .attr('y', (g) => yScale(g.name) + yScale.bandwidth() * (1/3))
        .attr('height', yScale.bandwidth() * (1/3))
        .attr('width', (g) => xScale(g.submittedValue))
        .on('mouseenter', function (event, datum, i) {
          d3.selectAll(`.${styles.value}`)
            .attr('opacity', 0)

          d3.select(this)
            .transition()
            .duration(300)
            .attr('opacity', 0.6)
            // .attr('y', (a) => yScale(a.name) - 5)
            .attr('height', yScale.bandwidth()  * (1/3))

          const x = xScale(datum.avg)

          // const line = chart.append('line')
          //   .attr('class', styles.limit)
          //   .attr('id', 'limit')
          //   .attr('x1', x)
          //   .attr('y1', 0)
          //   .attr('x2', x)
          //   .attr('y2', height)

          // localSubmissionBarGroup.append('text')
          //   .attr('class', styles.divergence)
          //   .attr('x', (a) => xScale(a.avg) + 24)
          //   .attr('y', (a) => yScale(a.name) + yScale.bandwidth() / 1.5)
          //   .attr('fill', 'white')
          //   .attr('text-anchor', 'middle')
          //   .text((a, idx) => {
          //     const divergence = (a.avg - datum.avg).toFixed(1)
          //
          //     let text = ''
          //     if (divergence > 0) text += '+'
          //     text += `${divergence}%`
          //
          //     return a.avg !== datum.avg ? text : '';
          //   })

        })
        .on('mouseleave', function () {
          d3.selectAll(`.${styles.value}`)
            .attr('opacity', 1)

          d3.select(this)
            .transition()
            .duration(300)
            .attr('opacity', 1)
            .attr('y', (a) => yScale(a.name) + yScale.bandwidth() * (1/3))
            .attr('height', yScale.bandwidth() * (1/3))

          chart.selectAll('#limit').remove()
          chart.selectAll(`.${styles.divergence}`).remove()
        })

      // append text to each bar
      localSubmissionBarGroup
        .append('text')
        .attr('class', styles.value)
        .attr('x', (a) => xScale(a.submittedValue) + 24)
        .attr('y', (a) => yScale(a.name) + yScale.bandwidth() * (7/12))
        .attr('text-anchor', 'middle')
        .text((a) => `${a.submittedValue}%`)

      // averages bar group

      // create bar groups, one for each element in the data array
      const averagesBarGroup = chart.selectAll()
        .data(data)
        .enter()
        .append('g')

      // for each element in the data set, create a rectangle that reacts
      // to mouseover
      averagesBarGroup
        .append('rect')
        .attr('class', styles.averageBar)
        .attr('x', (g) => 0)
        .attr('y', (g) => yScale(g.name) + yScale.bandwidth() * (2/3))
        .attr('height', yScale.bandwidth() * (1/3))
        .attr('width', (g) => xScale(g.avg))
        .on('mouseenter', function (event, datum, i) {
          d3.selectAll(`.${styles.value}`)
            .attr('opacity', 0)

          d3.select(this)
            .transition()
            .duration(300)
            .attr('opacity', 0.6)
            // .attr('y', (a) => yScale(a.name) - 5)
            .attr('height', yScale.bandwidth() * (1/3))

          const x = xScale(datum.avg)

          // const line = chart.append('line')
          //   .attr('class', styles.limit)
          //   .attr('id', 'limit')
          //   .attr('x1', x)
          //   .attr('y1', 0)
          //   .attr('x2', x)
          //   .attr('y2', height)

          // averagesBarGroup.append('text')
          //   .attr('class', styles.divergence)
          //   .attr('x', (a) => xScale(a.avg) + 24)
          //   .attr('y', (a) => yScale(a.name) + yScale.bandwidth() / 1.5)
          //   .attr('fill', 'white')
          //   .attr('text-anchor', 'middle')
          //   .text((a, idx) => {
          //     const divergence = (a.avg - datum.avg).toFixed(1)
          //
          //     let text = ''
          //     if (divergence > 0) text += '+'
          //     text += `${divergence}%`
          //
          //     return a.avg !== datum.avg ? text : '';
          //   })

        })
        .on('mouseleave', function () {
          d3.selectAll(`.${styles.value}`)
            .attr('opacity', 1)

          d3.select(this)
            .transition()
            .duration(300)
            .attr('opacity', 1)
            .attr('y', (a) => yScale(a.name) + yScale.bandwidth() * (2/3))
            .attr('height', yScale.bandwidth() * (1/3))

          chart.selectAll('#limit').remove()
          chart.selectAll(`.${styles.divergence}`).remove()
        })

      // append text to each bar
      averagesBarGroup
        .append('text')
        .attr('class', styles.value)
        .attr('x', (a) => xScale(a.avg) + 24)
        .attr('y', (a) => yScale(a.name) + yScale.bandwidth() * (11/12))
        .attr('text-anchor', 'middle')
        .text((a) => `${a.avg}%`)

  // add x axis label
  svg.append('text')
    .attr('class', styles.label)
    .attr('x', (width + marginLeft + marginRight) / 2)
    .attr('y', isMobile ? height + marginTop * 1.3 : height + marginTop * 1.7)
    .attr('text-anchor', 'middle')
    .text('Allocation (% of Total Budget)')

  // add y axis label
  // if (!isMobile) svg.append('text')
  //   .attr('class', styles.label)
  //   .attr('x', -(height / 2) - marginTop)
  //   .attr('y', marginTop / 2.4)
  //   .attr('transform', 'rotate(-90)')
  //   .attr('text-anchor', 'middle')
  //   .text('Categories')

  // add title label
  svg.append('text')
    .attr('class', styles.title)
    .attr('x', (width + marginLeft + marginRight) / 2)
    .attr('y', 40)
    .attr('text-anchor', 'middle')
    .text("People's Budget")

  // add footer label

  svg.append('text')
    .attr('class', styles.source)
    .attr('x', (width + marginLeft + marginRight) / 2)
    .attr('y', height + isMobile ? height + marginTop * 1.4 : height + marginTop * 2)
    .attr('text-anchor', 'middle')
    .text(`Total Submissions: ${totalSubmissions}`)

    // legend
    // https://bl.ocks.org/mtandre/bea54a387eb5506ad5d46cb5e74d9bce

    var colors = [
      '#6A33FF', // actuals color
      '#00C9AA', // localSubmission
      '#1E3A8A' // blue-900
    ]

    var legendX = isMobile ? (40) : (width - 100);
    var legendY = isMobile ? (marginTop / 2.5) : (height - 100);

    var legend = svg.append('g')
      .attr('class', styles.legend)
      .attr('transform', 'translate(' +
        legendX +
        ', ' +
        legendY
        + ')');

    legend.selectAll('rect')
      .data([
        "Average of all submissions",
        "Actual percentage of the 2021 NYC Budget",
        "Your submission"
      ])
      .enter()
      .append('rect')
      .attr('x', 0)
      .attr('y', function(d, i){
          return i * 36;
      })
      .attr('width', 12)
      .attr('height', 12)
      .attr('fill', function(d, i){
          return colors[i];
      });

    legend.selectAll('text')
      .data([
        "Actual percentage of the 2021 NYC Budget",
        "Your submission",
        "Average of all submissions"
      ])
      .enter()
      .append('text')
      .text(function(d){
          return d;
      })
      .attr('x', 18)
      .attr('y', function(d, i){
          return i * 36;
      })
      .attr('text-anchor', 'start')
      .attr('alignment-baseline', 'hanging');

    // setTimeout(()=>{
    //   legend.selectAll("text")
    //     .call(wrap, 180);
    // }, 0);

}

// https://observablehq.com/@unfpamaldives/figure4/3
function wrap(text, width) {
  text.each(function() {
    var text = d3.select(this),
        words = text.text().split(/\s+/).reverse(),
        word,
        line = [],
        lineNumber = 0,
        lineHeight = .8, // ems
        y = text.attr("y"),
        dy = parseFloat(text.attr("dy")),
        tspan = text.text(null)
          .append("tspan")
          .attr("x", -10)
          .attr("y", y)
          .attr("dy", dy + "em");
    while (word = words.pop()) {
      line.push(word);
      tspan.text(line.join(" "));
      if (tspan.node().getComputedTextLength() > width) {
        line.pop();
        tspan.text(line.join(" "));
        line = [word];
        tspan = text.append("tspan")
          .attr("x", -10)
          .attr("y", y)
          .attr("dy", ++lineNumber * lineHeight + dy + "em")
          .text(word);
      }
    }
  });
}
