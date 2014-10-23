exports.createWindow = function () {
    var window = Ti.UI.createWindow({backgroundColor: 'white'});

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
        title: { text: 'Pie Chart' },
        legend: { title: 'Countries' },
        border: { strokeStyle: '#6ba851' },
        background: background,
        animation: { duration: 1 },
        shadows: {
            enabled: true
        },
        series: [
            {
                type: 'pie',
                fillStyles: ['#418CF0', '#FCB441', '#E0400A', '#056492', '#BFBFBF', '#1A3B69', '#FFE382'],
                labels: {
                    stringFormat: '%.1f%%',
                    valueType: 'percentage',
                    font: '15px sans-serif',
                    fillStyle: 'white'
                },
                explodedRadius: 10,
                explodedSlices: [5],
                data: [
                    ['United States', 65],
                    ['United Kingdom', 58],
                    ['Germany', 30],
                    ['India', 60],
                    ['Russia', 65],
                    ['China', 75]
                ]
            }
        ]
    };

    window.add(chart);
    chart.drawChart(chartData);

    return window;
};
