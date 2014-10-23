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
        title: { text: 'Radar Line Chart' },
        border: { strokeStyle: '#6ba851' },
        background: background,
        shadows: {
            enabled: true
        },
        animation: { duration: 1 },
        axes: [
            {
                type: 'categoryAngle',
                categories: ['France', 'Canada', 'Germany', 'USA', 'Italy', 'Spain', 'Russia', 'Sweden', 'Japan'],
                labels: { font: "8px 'ヒラギノ角ゴPro'" }
            }
        ],
        series: [
            {
                title: 'Series 1',
                type: 'radarLine',
                data: [65.62, 75.54, 60.45, 34.73, 85.42, 55.9, 63.6, 55.1, 77.2]
            },
            {
                title: 'Series 2',
                type: 'radarLine',
                data: [76.45, 23.78, 86.45, 30.76, 23.79, 35.67, 89.56, 67.45, 38.98]
            }
        ]
    };

    window.add(chart);
    chart.drawChart(chartData);

    return window;
};
