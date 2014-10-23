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
        title: { text: '100% Stacked Column Chart' },
        animation: { duration: 1 },
        shadows: {
            enabled: true
        },
        axes: [
            {
                type: 'category',
                location: 'bottom',
                categories: ['A', 'B', 'C', 'D', 'E', 'F', 'G']
            },
            {
                type: 'linear',
                location: 'left',
                labels: {
                    stringFormat: '%d%%'
                }
            }
        ],
        series: [
            {
                type: 'stacked100Column',
                title: 'Stacked 1',
                data: [62, 70, 68, 58, 52, 60, 48],
                labels: {
                    font: '12px sans-serif'
                }
            },
            {
                type: 'stacked100Column',
                title: 'Stacked 2',
                data: [56, 30, 62, 65, 40, 36, 70],
                labels: {
                    font: '12px sans-serif'
                }
            },
            {
                type: 'stacked100Column',
                title: 'Stacked 3',
                data: [33, 42, 54, 23, 54, 47, 61],
                labels: {
                    font: '12px sans-serif'
                }
            }
        ]
    };

    window.add(chart);
    chart.drawChart(chartData);

    return window;
};
