//Master View Component Constructor
function MasterView() {
    //create object instance, parasitic subclass of Observable
    var self = Ti.UI.createView({
        backgroundColor: 'white'
    });

    var table = Ti.UI.createTableView({
        minRowHeight: '40dp',
        separatorColor : '#333',
        data: [
            {title: 'MultiChart',               hasChild: true, color: '#000'},
            //{title: 'LiveUpdates',              hasChild: true, color: '#000'}, don't work
            {title: 'ZoomableChart',            hasChild: true, color: '#000'},
            {title: 'SetAxisSettings',          hasChild: true, color: '#000'},
            {title: 'UseMultipleAxes',          hasChild: true, color: '#000'},
            {title: 'BarChartColors',           hasChild: true, color: '#000'},
            {title: 'BarChart',                 hasChild: true, color: '#000'},
            {title: '100StackedColumnChart',    hasChild: true, color: '#000'},
            {title: 'LineChartOnADateTimeAxis', hasChild: true, color: '#000'},
            {title: 'AreaChartOnALinearAxis',   hasChild: true, color: '#000'},
            {title: 'VerticalSplineAreaChart',  hasChild: true, color: '#000'},
            {title: 'PieChart',                 hasChild: true, color: '#000'},
            {title: 'RadarLineChart',           hasChild: true, color: '#000'},
            {title: 'RadarSplineAreaChart',     hasChild: true, color: '#000'},
            {title: 'StockChart',               hasChild: true, color: '#000'},
            {title: 'CandlestickChart',         hasChild: true, color: '#000'},
            {title: 'ProjectSchedule',          hasChild: true, color: '#000'},
            {title: 'ColumnAndLine',            hasChild: true, color: '#000'},
            {title: 'SplineAndScatter',         hasChild: true, color: '#000'}
        ]
    });
    self.add(table);

    //add behavior
    table.addEventListener('click', function (e) {
        self.fireEvent('itemSelected', {
            name: e.rowData.title
        });
    });

    return self;
};

module.exports = MasterView;