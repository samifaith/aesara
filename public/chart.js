import {messages} from './js/value.js'

const unmetNeedData = []
const unmetNeed = messages.filter(message => {
  if(message.category_id === 1){
    unmetNeedData.push(message.activity_count)
  }
})

const clinicalData = []
const clinical = messages.filter(message => {
  if(message.category_id === 2){
    clinicalData.push(message.activity_count)
  }
})

const ctx = document.getElementById('myChart').getContext('2d');

const gradient = ctx.createLinearGradient(0, 150, 300, 150);

gradient.addColorStop(0, 'rgba(168, 31, 30, 1)');
gradient.addColorStop(0.5, 'rgba(177, 187, 60, 1)');
gradient.addColorStop(1, 'rgba(38,159,47,1)');

const chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'radar',

    // The data for our dataset
    data: {
    labels: [
      "Unmet Need",
      "Clinical",
      "Economic",
      "Humanistic",
    ],
    datasets: [
      {
        label: "Unmet Need",
        backgroundColor: "rgba(220,220,220,0.2)",
        pointBackgroundColor: "rgba(220,220,220,1)",
        data: unmetNeedData
       },{
        label: "Clinical",
        backgroundColor: "rgba(151,187,205,0.2)",
        pointBackgroundColor: "rgba(151,187,205,1)",
        hoverPointBackgroundColor: "#fff",
        pointHighlightStroke: "rgba(151,187,205,1)",
        data: clinicalData
      },
      // {
      //   label: 'Clinical',
      //   hidden: true,
      //   data: [
      //       4, 22
      //   ]
      // },
      {
        label: "Economic",
        backgroundColor: "rgba(151,187,205,0.2)",
        pointBackgroundColor: "rgba(151,187,205,1)",
        hoverPointBackgroundColor: "#fff",
        pointHighlightStroke: "rgba(151,187,205,1)",
        data: []
      },
      {
        label: "Humanistic",
        backgroundColor: "rgba(151,187,205,0.2)",
        pointBackgroundColor: "rgba(151,187,205,1)",
        hoverPointBackgroundColor: "#fff",
        pointHighlightStroke: "rgba(151,187,205,1)",
        data: []
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      // labels: {fontSize: 30},
      position: 'top'
    },
    title: {
      display: true,
      text: 'Chart.js Radar Chart'
    },
    scale: {
      // pointLabels: {fontSize: 30},
      reverse: false,
      gridLines: {
        color: [
          'black',
          'red',
          'orange',
          'yellow',
          'green',
        //   'blue',
        //   'indigo',
        //   'violet'
        ]
      },
      ticks: {
        beginAtZero: true
      }
    }
  }

    // Configuration options go here
    // options: {}
});
