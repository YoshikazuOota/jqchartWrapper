exports.createWindow = function () {
    var window = Ti.UI.createWindow({backgroundColor : 'white'});

    var chartChartGraph = {
        top:    '20dp',
        height: '250dp',
        width:  '310dp',
        right:  '5dp'
    };

    var chart = new (require('jqChartWrapper/Chart').createChart)(chartChartGraph);

    var chartData = {
        title: { text: 'Vertical Spline Area Chart' },
        animation: { duration: 1 },
        series: [
            {
                type: 'verticalSplineArea',
                data: [['A', 56], ['B', 30], ['C', 62],
                    ['D', 70], ['E', 40], ['F', 36], ['G', 60]]
            },
            {
                type: 'verticalSplineArea',
                data: [['A', 46], ['B', 25], ['C', 48],
                    ['D', 35], ['E', 32], ['F', 30], ['G', 40]]
            },
            {
                type: 'verticalSplineArea',
                data: [['A', 26], ['B', 20], ['C', 38],
                    ['D', 32], ['E', 22], ['F', 24], ['G', 20]]
            }
        ]
    };

    window.add(chart);
    chart.drawChart(chartData);

    return window;
};
