exports.createWindow = function () {
    var window = Ti.UI.createWindow({backgroundColor : 'white'});

    var chartChartGraph = {
        top: '20dp',
        height: '250dp',
        width:  '310dp',
        right: '5dp'
    };

    var Chart = require('jqChartWrapper/Chart');
    var chart = new Chart.createChart(chartChartGraph);

    var chartData = {
        title: { text: 'Bar Chart' },
        animation: { duration: 1 },
        shadows: {
            enabled: true
        },
        series: [
            {
                type: 'bar',
                title: 'Series 1',
                fillStyle: '#418CF0',
                data: [['A', 33], ['B', 57], ['C', 33],
                    ['D', 12], ['E', 35], ['F', 7], ['G', 24]]
            },
            {
                type: 'bar',
                title: 'Series 2',
                fillStyle: '#FCB441',
                data: [['A', 67], ['B', 25], ['C', 11],
                    ['D', 8], ['E', 44], ['F', 14], ['G', 78]]
            }
        ]
    };

    window.add(chart);
    chart.drawChart(chartData);

    return window;
};
