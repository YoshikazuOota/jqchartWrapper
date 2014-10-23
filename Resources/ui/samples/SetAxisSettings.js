exports.createWindow = function () {
    var window = Ti.UI.createWindow({backgroundColor : 'white'});

    var chartChartGraph = {
        top: '20dp',
        height: '200dp',
        width:  '300dp',
        left: '10dp'
    };

    var chart = new (require('jqChartWrapper/Chart').createChart)(chartChartGraph);


    var background = {
        type: 'linearGradient',
        x0: 0,
        y0: 0,
        x1: 0,
        y1: 1,
        colorStops: [{ offset: 0, color: '#d2e6c9' },
            { offset: 1, color: 'white' }]
    };

    var chartData = {
        title: { text: 'Axis Settings' },
        border: { strokeStyle: '#6ba851' },
        background: background,
        animation: { duration: 1 },
        shadows: {
            enabled: true
        },
        axes: [
            {
                type: 'linear',
                location: 'left',
                minimum: 10,
                maximum: 100,
                interval: 10
            }
        ],
        series: [
            {
                title: 'Series 1',
                type: 'column',
                data: [['A', 70], ['B', 40], ['C', 85],
                    ['D', 50], ['E', 25], ['F', 40]]
            }
        ]
    };

    window.add(chart);
    chart.drawChart(chartData);

    return window;
};
