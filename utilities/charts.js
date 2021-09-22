import * as d3 from "d3";
import styles from './charts.module.scss';
// https://blog.risingstack.com/d3-js-tutorial-bar-charts-with-javascript/

// https://jsfiddle.net/matehu/w7h81xz2/

const sample = [
  {
    language: 'Rust',
    value: 78.9,
    color: '#000000'
  },
  {
    language: 'Kotlin',
    value: 75.1,
    color: '#00a2ee'
  },
  {
    language: 'Python',
    value: 68.0,
    color: '#fbcb39'
  },
  {
    language: 'TypeScript',
    value: 67.0,
    color: '#007bc8'
  },
  {
    language: 'Go',
    value: 65.6,
    color: '#65cedb'
  },
  {
    language: 'Swift',
    value: 65.1,
    color: '#ff6e52'
  },
  {
    language: 'JavaScript',
    value: 61.9,
    color: '#f9de3f'
  },
  {
    language: 'C#',
    value: 60.4,
    color: '#5d2f8e'
  },
  {
    language: 'F#',
    value: 59.6,
    color: '#008fc9'
  },
  {
    language: 'Clojure',
    value: 59.6,
    color: '#507dca'
  }
];

export const constructChart = () => {

  // select the dom element to fill with the chart
  const svg = d3.select('#chart');

  // select the container
  const svgContainer = d3.select('#container')
    .attr('class', styles.container)

  // set dimensions
  const margin = 80;
  const width = 1000 - 2 * margin;
  const height = 600 - 2 * margin;

  // create chart
  const chart = svg.append('g')
    // moves the start of the chart to the (60;60) position of the svg
    .attr('transform', `translate(${margin}, ${margin})`);

  // establish scales based on dimensions and input sample
  // scaleBand for the x-axis which helps to split the range into bands
  // and compute the coordinates and widths of the bars with additional padding.
  const yScale = d3.scaleBand()
    .range([0, height])
    .domain(sample.map((s) => s.language))
    .padding(0.4)

  const xScale = d3.scaleLinear()
    // length that should be divided between the limits of the domain values.
    // the SVG coordinate system starts from the top left corner; that’s
    // why the range takes the width as the first parameter and not zero.
    .range([width, 0])
    // minimum and maximum values expected from the data set
    .domain([100, 0]);

  // add the x axis
  chart.append('g')
    .attr('transform', `translate(0, ${height})`)
    .call(d3.axisBottom(xScale));

  // add the y axis with tick marks
  chart.append('g')
    .call(d3.axisLeft(yScale));

  // add horizontal lines in the background
  const makexLines = () => d3.axisBottom()
    .scale(xScale)

  chart.append('g')
    .attr('class', styles.grid)
    .attr('transform', `translate(0, ${height})`)
    .call(makexLines()
      .tickSize(-height, 0, 0)
      .tickFormat('')
    )

  // create bar groups, one for each element in the data array
  const barGroups = chart.selectAll()
    .data(sample)
    .enter()
    .append('g')

  // for each element in the data set, create a rectangle that reacts
  // to mouseover
  barGroups
    .append('rect')
    .attr('class', styles.bar)
    .attr('x', (g) => 0)
    .attr('y', (g) => yScale(g.language))
    .attr('height', yScale.bandwidth())
    .attr('width', (g) => xScale(g.value))
    .on('mouseenter', function (event, datum, i) {
      d3.selectAll(`.${styles.value}`)
        .attr('opacity', 0)

      d3.select(this)
        .transition()
        .duration(300)
        .attr('opacity', 0.6)
        .attr('y', (a) => yScale(a.language) - 5)
        .attr('height', yScale.bandwidth() + 10)

      const x = xScale(datum.value)

      const line = chart.append('line')
        .attr('class', styles.limit)
        .attr('id', 'limit')
        .attr('x1', x)
        .attr('y1', 0)
        .attr('x2', x)
        .attr('y2', height)

      barGroups.append('text')
        .attr('class', styles.divergence)
        .attr('x', (a) => xScale(a.value) - 30)
        .attr('y', (a) => yScale(a.language) + yScale.bandwidth() / 2)
        .attr('fill', 'white')
        .attr('text-anchor', 'middle')
        .text((a, idx) => {
          const divergence = (a.value - datum.value).toFixed(1)

          let text = ''
          if (divergence > 0) text += '+'
          text += `${divergence}%`

          return a.value !== datum.value ? text : '';
        })

    })
    .on('mouseleave', function () {
      d3.selectAll(`.${styles.value}`)
        .attr('opacity', 1)

      d3.select(this)
        .transition()
        .duration(300)
        .attr('opacity', 1)
        .attr('y', (a) => yScale(a.language))
        .attr('height', yScale.bandwidth())

      chart.selectAll('#limit').remove()
      chart.selectAll(`.${styles.divergence}`).remove()
    })

  // append text to each bar
  barGroups
    .append('text')
    .attr('class', styles.value)
    .attr('x', (a) => xScale(a.value) - 30)
    .attr('y', (a) => yScale(a.language) + yScale.bandwidth() / 2)
    .attr('text-anchor', 'middle')
    .text((a) => `${a.value}%`)

  // add x axis label
  svg.append('text')
    .attr('class', styles.label)
    .attr('x', width / 2 + margin)
    .attr('y', height + margin * 1.7)
    .attr('text-anchor', 'middle')
    .text('Love meter (%)')

  // add y axis label
  svg.append('text')
    .attr('class', styles.label)
    .attr('x', -(height / 2) - margin)
    .attr('y', margin / 2.4)
    .attr('transform', 'rotate(-90)')
    .attr('text-anchor', 'middle')
    .text('Languages')

  // add title label
  svg.append('text')
    .attr('class', styles.title)
    .attr('x', width / 2 + margin)
    .attr('y', 40)
    .attr('text-anchor', 'middle')
    .text('Most loved programming languages in 2018')

  // add footer label

  svg.append('text')
    .attr('class', styles.source)
    .attr('x', width - margin / 2)
    .attr('y', height + margin * 1.7)
    .attr('text-anchor', 'start')
    .text('Source: Stack Overflow, 2018')

}
