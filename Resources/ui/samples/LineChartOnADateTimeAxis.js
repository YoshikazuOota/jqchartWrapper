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
        title: { text: 'Line Chart' },
        tooltips: { type: 'shared' },
        animation: { duration: 1 },
        axes: [
            {
                location: 'bottom',
                type: 'dateTime',
                labels: {
                    stringFormat: 'm/d/yy'
                }
            }
        ],
            series: [
            {
                type: 'line',
                title: 'Series 1',
                strokeStyle: '#418CF0',
                lineWidth: 2,
                data: [[new Date(2010, 0, 1), 62], [new Date(2010, 0, 2), 60],
                    [new Date(2010, 0, 3), 68], [new Date(2010, 0, 4), 58],
                    [new Date(2010, 0, 5), 52], [new Date(2010, 0, 6), 60],
                    [new Date(2010, 0, 7), 48]]
            },
            {
                type: 'line',
                title: 'Series 2',
                strokeStyle: '#FCB441',
                lineWidth: 2,
                data: [[new Date(2010, 0, 1), 46], [new Date(2010, 0, 2), 40],
                    [new Date(2010, 0, 3), 62], [new Date(2010, 0, 4), 65],
                    [new Date(2010, 0, 5), 60], [new Date(2010, 0, 6), 36],
                    [new Date(2010, 0, 7), 70]]
            }
        ]
    };

    window.add(chart);
    chart.drawChart(chartData);

    return window;
};
