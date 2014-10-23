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
        title: { text: 'Project Schedule' },
        animation: { duration: 1 },
        shadows: {
            enabled: true
        },
        legend: {location: 'bottom'},
        series: [
            {
                type: 'gantt',
                title: 'Alan',
                data: [
                    ['Design', new Date(2010, 0, 1), new Date(2010, 0, 20)],
                    ['Dev', new Date(2010, 0, 21), new Date(2010, 1, 15)],
                    ['Design', new Date(2010, 1, 16), new Date(2010, 1, 28)],
                    ['Dev', new Date(2010, 2, 1), new Date(2010, 2, 20)],
                    ['Testing', new Date(2010, 2, 21), new Date(2010, 3, 10)]
                ]
            },
            {
                type: 'gantt',
                title: 'Carrie',
                data: [
                    ['Design', new Date(2010, 0, 21), new Date(2010, 1, 15)],
                    ['Dev', new Date(2010, 1, 16), new Date(2010, 1, 28)],
                    ['Testing', new Date(2010, 2, 1), new Date(2010, 2, 20)]
                ]
            },
            {
                type: 'gantt',
                title: 'Katie',
                data: [
                    ['Design'],
                    ['Dev', new Date(2010, 2, 21), new Date(2010, 3, 10)],
                    ['Testing', new Date(2010, 1, 16), new Date(2010, 1, 28)],
                    ['Testing', new Date(2010, 3, 11), new Date(2010, 4, 1)]
                ]
            }
        ]
    };


    window.add(chart);
    chart.drawChart(chartData);

    return window;
};
