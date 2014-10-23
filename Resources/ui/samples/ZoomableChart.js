exports.createWindow = function () {
    var window = Ti.UI.createWindow({backgroundColor: 'white'});

    var chartChartGraph = {
        top: '20dp',
        height: '250dp',
        width:  '310dp',
        right: '5dp'
    };

    var chart = new (require('jqChartWrapper/Chart').createChart)(chartChartGraph);

    function addDays(date, value) {
        var newDate = new Date(date.getTime());
        newDate.setDate(date.getDate() + value);
        return newDate;
    }

    function round(d) {
        return Math.round(100 * d) / 100;
    }

    var data1 = [];
    var data2 = [];

    var yValue1 = 50;
    var yValue2 = 200;

    var date = new Date(2010, 0, 1);

    for (var i = 0; i < 200; i++) {

        yValue1 += Math.random() * 10 - 5;
        data1.push([date, round(yValue1)]);

        yValue2 += Math.random() * 10 - 5;
        data2.push([date, round(yValue2)]);

        date = addDays(date, 1);
    }

    var background = {
        type: 'linearGradient',
        x0: 0,
        y0: 0,
        x1: 0,
        y1: 1,
        colorStops: [
            { offset: 0, color: '#d2e6c9' },
            { offset: 1, color: 'white' }
        ]
    };


    var chartData = {
        title: 'Chart Title',
        legend: { title: 'Legend' },
        border: { strokeStyle: '#6ba851' },
        background: background,
        animation: { duration: 2 },
        tooltips: { type: 'shared' },
        shadows: {
            enabled: true
        },
        crosshairs: {
            enabled: true,
            hLine: false,
            vLine: { strokeStyle: '#cc0a0c' }
        },
        axes: [
            {
                type: 'dateTime',
                location: 'bottom',
                zoomEnabled: true
            }
        ],
        series: [
            {
                title: 'Series 1',
                type: 'line',
                data: data1,
                markers: null
            },
            {
                title: 'Series 2',
                type: 'line',
                data: data2,
                markers: null
            }
        ]
    };

    window.add(chart);
    chart.drawChart(chartData);

    return window;
};
