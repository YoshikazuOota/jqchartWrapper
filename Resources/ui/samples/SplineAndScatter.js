exports.createWindow = function () {
    var window = Ti.UI.createWindow({backgroundColor: 'white'});

    var chartChartGraph = {
        top: '20dp',
        height: '250dp',
        width:  '310dp',
        right: '5dp'
    };

    var chart = new (require('jqChartWrapper/Chart').createChart)(chartChartGraph);

    var chartData = {
        title: { text: 'Spline and Scatter' },
        animation: { duration: 1 },
        series: [
            {
                type: 'spline',
                title: 'Spline',
                data: [
                    [1, 46],
                    [2, 48],
                    [3, 68],
                    [4, 30],
                    [5, 55],
                    [6, 85],
                    [7, 43],
                    [8, 29]
                ]
            },
            {
                type: 'scatter',
                title: 'Scatter',
                data: [
                    [1, 69],
                    [2, 57],
                    [3, 86],
                    [4, 70],
                    [5, 70],
                    [6, 60],
                    [7, 88],
                    [8, 60]
                ],
                markers: { type: 'diamond', size: 10 }
            }
        ]
    };


    window.add(chart);
    chart.drawChart(chartData);

    return window;
};
