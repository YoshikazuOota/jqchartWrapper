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
        title: { text: 'Bar Chart Colors' },
        animation: { duration: 1 },
        shadows: {
            enabled: true
        },
        series: [
            {
                type: 'bar',
                title: 'Series 1',
                fillStyles: ['#418CF0', '#FCB441', '#E0400A', '#056492', '#BFBFBF', '#1A3B69', '#FFE382'],
                data: [
                    ['A', 33],
                    ['B', 57],
                    ['C', 33],
                    ['D', 12],
                    ['E', 35],
                    ['F', 7],
                    ['G', 24]
                ]
            }
        ]
    };

    window.add(chart);
    chart.drawChart(chartData);

    return window;
};
