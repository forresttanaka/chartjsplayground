var ctx = document.getElementById("chart");

var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: false,
        legend: {
            display: false
        },
        legendCallback: function(chart) {
            console.log('LEGEND: %o', chart);
            var text = [];
            text.push('<ul>');
            for (var i = 0; i < chart.data.datasets[0].data.length; i++) {
                text.push('<li>');
                text.push('<a href="#' + chart.data.datasets[0].data[i] + '">');
                text.push('<span style="background-color:' + chart.data.datasets[0].backgroundColor[i] + '"></span>');
                if (chart.data.labels[i]) {
                    text.push(chart.data.labels[i]);
                }
                text.push('</a></li>');
            }
            text.push('</ul>');
            return text.join('');
        }
    }
});

document.getElementById('chart-legend').innerHTML = myChart.generateLegend();
