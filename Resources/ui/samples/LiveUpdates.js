exports.createWindow = function () {
    var window = Ti.UI.createWindow({backgroundColor : 'gray'});

    var chartChartGraph = {
        top: '20dp',
        height: '200dp',
        width:  '300dp',
        left: '10dp'
    };

    var chart = new (require('jqChartWrapper/Chart').createChart)(chartChartGraph);


    var background = {
        type: 'linearGradient',
        x0: 0,
        y0: 0,
        x1: 0,
        y1: 1,
        colorStops: [{ offset: 0, color: '#d2e6c9' },
            { offset: 1, color: 'white'}]
    };

    var fillStyle = {
        type: 'linearGradient',
        x0: 0,
        y0: 0,
        x1: 1,
        y1: 0,
        colorStops: [{ offset: 0, color: '#65c2e8' },
            { offset: 0.49, color: '#55b3e1' },
            { offset: 0.5, color: '#3ba6dc' },
            { offset: 1, color: '#2794d4'}]
    };

    var data = [];
    var yValue = 20;
    var i;
    for (i = 0; i < 10; i++) {

        yValue = Math.round(Math.random() * 100);
        data.push(yValue);
    }

    window.add(chart);
    updateChart();

    function updateChart() {
        yValue = Math.round(Math.random() * 100);

        // remove the first element
        data.splice(0, 1);
        // add a new element
        data.push(yValue);

        var chartData = {
            title: { text: 'Live Updates' },
            border: { strokeStyle: '#6ba851' },
            background: background,
            legend: { visible: false },
            axes: [
                {
                    type : 'linear',
                    location : 'left',
                    minimum : 0,
                    maximum : 100
                }
            ],
            series: [
                {
                    type: 'column',
                    data: data,
                    fillStyle: fillStyle
                }
            ]
        };

        // update chart
        //$('#jqChart').jqChart('update');
        chart.updateChart(chartData);

        setTimeout(updateChart(), 3000);
    }

    return window;
};
