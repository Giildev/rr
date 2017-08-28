import { Line } from 'vue-chartjs'

export default Line.extend({
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: [
        'option 1',
        'option 2',
        'option 3',
        'option 4',
        'option 5',
        'option 6',
        'option 7',
        'option 8',
        'option 9',
        'option 10',
        'option 11',
        'option 12'
      ],
      datasets: [
        {
          label: 'Label',
          backgroundColor: '#82adff',
          data: [1, 1, 2, 3, 2, 3, 2, 1, 4, 1, 2, 3]
        },
        {
          label: 'Label 2',
          backgroundColor: '#fe5858',
          data: [4, 8, 12, 7, 9, 8, 12, 8, 9, 8, 12, 8]
        }
      ]
    })
  }
})
