exports.createWindow = function () {
    var window = Ti.UI.createWindow({backgroundColor: 'white'});

    var chartChartGraph = {
        top: '20dp',
        height: '250dp',
        width:  '310dp',
        right: '5dp'
    };

    var chart = new (require('jqChartWrapper/Chart').createChart)(chartChartGraph);


    function round(d) {
        return Math.round(100 * d) / 100;
    }

    var data = [];

    var date = new Date(2010, 0, 1);

    var high = Math.random() * 40;
    var close = high - Math.random();
    var low = close - Math.random();
    var open = (high - low) * Math.random() + low;

    data.push([date, round(high), round(low), round(open), round(close)]);

    for (var day = 2; day <= 60; day++) {

        date = new Date(2010, 0, day);

        high = open + Math.random();

        close = high - Math.random();
        low = close - Math.random();
        var oldOpen = open;
        open = (high - low) * Math.random() + low;

        if (low > oldOpen) {
            low = oldOpen;
        }

        data.push([date, round(high), round(low), round(open), round(close)]);
    }


    var chartData = {
        title: { text: 'Candlestick Chart' },
        legend: { visible: false },
        animation: { duration: 1 },
        shadows: {
            enabled: true
        },
        series: [
            {
                title: 'Price Index',
                type: 'candlestick',
                data: data,
                priceUpFillStyle: 'white',
                priceDownFillStyle: 'black',
                strokeStyle: 'black'
            }
        ]
    };

    Titanium.App.addEventListener('jqDebug', function (e) {
        Ti.API.info(e);
    });

    window.add(chart);
    chart.drawChart(chartData);

    return window;
};
