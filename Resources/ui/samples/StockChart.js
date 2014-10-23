exports.createWindow = function () {
    var window = Ti.UI.createWindow({backgroundColor: 'white'});

    var chartChartGraph = {
        top: '20dp',
        height: '250dp',
        width:  '310dp',
        right: '5dp'
    };

    var chart = new (require('jqChartWrapper/Chart').createChart)(chartChartGraph);
    window.add(chart);

    function round(d) {
        return Math.round(100 * d) / 100;
    }

    var ohlcData = [];
    var volumeData = [];

    var date = new Date(2010, 0, 1);

    var high = Math.random() * 40;
    var close = high - Math.random();
    var low = close - Math.random();
    var open = (high - low) * Math.random() + low;

    ohlcData.push([date, round(high), round(low), round(open), round(close)]);

    var volume = 100 + 15 * Math.random();
    volumeData.push([date, round(volume)]);

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

        ohlcData.push([date, round(high), round(low), round(open), round(close)]);

    }

    chart.drawChart({
        legend: { visible: false },
        border: { lineWidth: 0, padding: 0 },
        tooltips: {
            type: 'shared',
            disabled: true
        },
        crosshairs: {
            enabled: true,
            hLine: false
        },
        animation: { duration: 1 },
        axes: [
            {
                type: 'linear',
                location: 'left',
                width: 30
            }
        ],
        series: [
            {
                title: 'Price Index',
                type: 'stock',
                data: ohlcData,
                pointWidth: 0.9
            }
        ]
    });

    return window;
};
