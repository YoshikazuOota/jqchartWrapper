exports.createWindow = function () {
    var window = Ti.UI.createWindow({backgroundColor: 'white'});

    var scrollView = Ti.UI.createScrollView({
        top:    '0dp',
        bottom: '0dp',
        left:   '0dp',
        right:  '0dp'
    });
    window.add(scrollView);

    var chartData = [
        {
            title: { text: 'Range Column Chart' },
            animation: { duration: 1 },
            shadows: {
                enabled: true
            },
            series: [
                {
                    type: 'rangeColumn',
                    title: 'Series 1',
                    data: [
                        ['A', 33, 43],
                        ['B', 57, 62],
                        ['C', 13, 30],
                        ['D', 12, 40],
                        ['E', 35, 70],
                        ['F', 7, 30],
                        ['G', 24, 30]
                    ]
                },
                {
                    type: 'rangeColumn',
                    title: 'Series 2',
                    data: [
                        ['A', 23, 30],
                        ['B', 62, 80],
                        ['C', 50, 70],
                        ['D', 0, 12],
                        ['E', 15, 20],
                        ['F', 50, 65],
                        ['G', 4, 24]
                    ]
                }
            ]
        },
        {
            title: { text: 'Stacked and Grouped Column Chart' },
            animation: { duration: 1 },
            shadows: {
                enabled: true
            },
            axes: [
                {
                    type: 'category',
                    location: 'bottom',
                    categories: ['2000', '2001', '2002', '2003']
                }
            ],
            series: [
                {
                    type: 'stackedColumn',
                    title: 'Series 1',
                    data: [62, 70, 68, 58],
                    stackedGroupName: 'Group1'
                },
                {
                    type: 'stackedColumn',
                    title: 'Series 2',
                    data: [56, 30, 62, 65],
                    stackedGroupName: 'Group1'
                },
                {
                    type: 'stackedColumn',
                    title: 'Series 3',
                    data: [33, 42, 54, 23],
                    stackedGroupName: 'Group2'
                },
                {
                    type: 'stackedColumn',
                    title: 'Series 4',
                    data: [43, 52, 64, 33],
                    stackedGroupName: 'Group2'
                }
            ]
        },
        {
            title: { text: 'Bubble Chart' },
            animation: { duration: 1 },
            shadows: {
                enabled: true
            },
            series: [
                {
                    type: 'bubble',
                    title: 'Series 1',
                    fillStyle: '#418CF0',
                    data: [
                        [1, 15, 8],
                        [2, 18, 4],
                        [3, 15, 8],
                        [4, 16, 13],
                        [5, 14, 11]
                    ],
                    markers: {
                        lineWidth: 1,
                        strokeStyle: 'black'
                    }
                },
                {
                    type: 'bubble',
                    title: 'Series 2',
                    fillStyle: '#FCB441',
                    data: [
                        [1, 9, 15],
                        [2, 8, 24],
                        [3, 12, 10],
                        [4, 9, 14],
                        [5, 7, 12]
                    ],
                    markers: {
                        type: 'rectangle',
                        lineWidth: 1,
                        strokeStyle: 'black'
                    }
                }
            ]
        },
        {
            title: { text: 'Gantt Chart' },
            animation: { duration: 1 },
            shadows: {
                enabled: true
            },
            legend: {
                visible: false
            },
            series: [
                {
                    type: 'gantt',
                    fillStyles: ['#CA6B4B', '#005CDB', '#F3D288', '#506381', '#F1B9A8'],
                    data: [
                        ['Phase 1', new Date(2010, 0, 1), new Date(2010, 0, 30)],
                        ['Phase 2', new Date(2010, 0, 1), new Date(2010, 0, 10)],
                        ['Phase 3', new Date(2010, 0, 10), new Date(2010, 0, 20)],
                        ['Phase 4', new Date(2010, 0, 20), new Date(2010, 0, 25)],
                        ['Phase 5', new Date(2010, 0, 25), new Date(2010, 0, 30)]
                    ]
                }
            ]
        },
        {
            title: { text: 'Multiple Axes' },
            animation: { duration: 1 },
            axes: [
                {
                    name: 'y1',
                    location: 'left'
                },
                {
                    name: 'y2',
                    location: 'left',
                    strokeStyle: '#FCB441',
                    majorGridLines: { strokeStyle: '#FCB441' },
                    majorTickMarks: { strokeStyle: '#FCB441' }
                }
            ],
            series: [
                {
                    type: 'column',
                    axisY: 'y1',
                    data: [
                        ['A', 1],
                        ['B', 4],
                        ['C', 3],
                        ['D', 5],
                        ['E', 2],
                        ['F', 1]
                    ]
                },
                {
                    type: 'line',
                    axisY: 'y2',
                    data: [
                        ['A', 40],
                        ['B', 60],
                        ['C', 62],
                        ['D', 52],
                        ['E', 70],
                        ['F', 75]
                    ]
                }
            ]
        },
        {
            title: { text: 'Tick Marks' },
            animation: { duration: 1 },
            axes: [
                {
                    location: 'left',
                    majorTickMarks: {
                        lineWidth: 2,
                        strokeStyle: 'red',
                        length: 12,
                        interval: 10
                    },
                    minorTickMarks: {
                        lineWidth: 1,
                        strokeStyle: 'green',
                        interval: 2
                    }
                }
            ],
            series: [
                {
                    type: 'column',
                    data: [
                        ['A', 70],
                        ['B', 40],
                        ['C', 85],
                        ['D', 50],
                        ['E', 25],
                        ['F', 40]
                    ]
                }
            ]
        },
        {
            title: { text: 'Plot Bands' },
            animation: { duration: 1 },
            axes: [
                {
                    location: 'left',
                    type: 'linear',
                    majorGridLines: { strokeDashArray: [1, 3] },
                    plotBands: [
                        {
                            fillStyle: '#fcb441',
                            from: 40,
                            to: 60,
                            zIndex: 0, // Posible values - 0, 1, 2
                            title: 'Good'
                        },
                        {
                            fillStyle: '#e0400a',
                            from: 60,
                            to: 70,
                            zIndex: 0, // Posible values - 0, 1, 2
                            title: 'Very Good'
                        }
                    ]
                }
            ],
            series: [
                {
                    type: 'column',
                    data: [
                        ['A', 45],
                        ['B', 35],
                        ['C', 68],
                        ['D', 50],
                        ['E', 5],
                        ['F', 44]
                    ]
                }
            ]
        },
        {
            title: { text: 'Axis Labels Rotation' },
            animation: {
                duration: 1
            },
            axes: [
                {
                    type: 'category',
                    location: 'bottom',
                    categories: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5', 'Category 6'],
                    labels: {
                        font: '12px sans-serif',
                        angle: -45
                    }
                }
            ],
            series: [
                {
                    type: 'column',
                    data: [70, 40, 85, 50, 25, 40]
                }
            ]
        },
        {
            title: { text: 'Dashed Lines' },
            animation: { duration: 1 },
            axes: [
                {
                    type: 'category',
                    location: 'bottom',
                    categories: ['A', 'B', 'C', 'D', 'E', 'F', 'G']
                }
            ],
            series: [
                {
                    type: 'line',
                    title: 'Series 1',
                    data: [62, 70, 68, 58, 52, 60, 48],
                    strokeDashArray: [10, 10]
                },
                {
                    type: 'line',
                    title: 'Series 2',
                    data: [56, 30, 62, 65, 40, 36, 70],
                    strokeDashArray: [2, 2]
                }
            ]
        }
    ];

    var charts = [];
    (function () {
        views = [];
        for (var i = 0; i < 3; i++) {
            views[i] = Ti.UI.createView();
            charts[i] = new (require('jqChartWrapper/Chart').createChart)({
                top: '0dp',
                height: '190dp',
                width:  '300dp',
                left  : '10dp',
                right : '10dp'
            }, 'chartEvent' + i);
            views[i].add(charts[i]);
            charts[i].drawChart(chartData[i]);
        }

        var scrollableView = Ti.UI.createScrollableView({
            //views: [charts[0], charts[1], charts[2]],
            views: [views[0], views[1], views[2]],
            showPagingControl: true,
            pagingControlHeight: '30dp',
            left: '0dp',
            right: '0dp',
            height: '220dp',
            top: '0dp'
        });
        scrollView.add(scrollableView);
    })();

    (function () {
        for (var i = 3; i < chartData.length; i++) {
            charts[i] = new (require('jqChartWrapper/Chart').createChart)({
                top: 225 + ((i - 3) * 210) + 'dp',
                height: (i * 10 + 130) + 'dp',
                width:  (i * 25 + 100) + 'dp',
                right : '10dp'
            });
            scrollView.add(charts[i]);
            charts[i].drawChart(chartData[i]);
        }
    })();

    return window;
};
