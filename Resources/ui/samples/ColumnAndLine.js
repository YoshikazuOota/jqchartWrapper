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
        title: { text: 'Column and Line' },
        animation: { duration: 1 },
        series: [
            {
                type: 'column',
                title: 'Column',
                data: [
                    ['A', 46],
                    ['B', 35],
                    ['C', 68],
                    ['D', 30],
                    ['E', 27],
                    ['F', 85],
                    ['D', 43],
                    ['H', 29]
                ]
            },
            {
                type: 'line',
                title: 'Line',
                data: [
                    ['A', 69],
                    ['B', 57],
                    ['C', 86],
                    ['D', 23],
                    ['E', 70],
                    ['F', 60],
                    ['D', 88],
                    ['H', 22]
                ]
            }
        ]
    };


    window.add(chart);
    chart.drawChart(chartData);

    return window;
};
