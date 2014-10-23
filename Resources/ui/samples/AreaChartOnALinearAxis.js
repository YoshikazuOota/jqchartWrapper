exports.createWindow = function () {
    var window = Ti.UI.createWindow({backgroundColor : 'white'});

    var chartChartGraph = {
        top: '20dp',
        height: '250dp',
        width:  '310dp',
        right: '5dp'
    };

    var chart = new (require('jqChartWrapper/Chart').createChart)(chartChartGraph);

    var chartData = {
        title: { text: 'Area Chart' },
        animation: { duration: 1 },
        series: [
            {
                type: 'area',
                title: 'Area',
                fillStyle: '#418CF0',
                data: [[1, 56], [2, -20], [3, -32], [4, 50], [5, 40], [6, 36], [7, 70]],
                labels: {
                    stringFormat: '%d K',
                    font: '12px sans-serif'
                }
            }
        ]
    };

    window.add(chart);
    chart.drawChart(chartData);

    return window;
};
