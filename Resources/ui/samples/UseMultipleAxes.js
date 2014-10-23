exports.createWindow = function () {
    var window = Ti.UI.createWindow({backgroundColor : 'white'});

    var chartChartGraph = {
        top: '20dp',
        height: '250dp',
        width:  '310dp',
        right: '5dp'
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
        title: { text: 'Multiple Axes' },
        border: { strokeStyle: '#6ba851' },
        background: background,
        animation: { duration: 1 },
        shadows: {
            enabled: true
        },
        axes: [
            {
                name: 'y1',
                location: 'left'
            },
            {
                name: 'y2',
                location: 'right',
                strokeStyle: '#FCB441',
                majorGridLines: {
                    strokeStyle: '#FCB441'
                },
                majorTickMarks: {
                    strokeStyle: '#FCB441'
                }
            }
        ],
        series: [
            {
                title: 'Column',
                type: 'column',
                axisY: 'y1',
                data: [['A', 1], ['B', 4], ['C', 3],
                    ['D', 5], ['E', 2], ['F', 1]]
            },
            {
                title: 'Line',
                type: 'line',
                axisY: 'y2',
                data: [['A', 40], ['B', 60], ['C', 62],
                    ['D', 52], ['E', 70], ['F', 75]]
            }
        ]
    };

    window.add(chart);
    chart.drawChart(chartData);




    return window;
};
