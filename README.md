jqChartWrapper v0.9
====

A wrapper of the jqChart in Titanium.
This wrapper simplify draw graph by the jqChart for iOS/Android application.

- The jqChart is a commercial software.   [jqChart](http://www.jqchart.com/)   
- Courtesy of jqChart inc., "30 Days Free Trial jqChart" is bundled.     
- The following file must-read : Resources/jqChartWrapper/jqChartJQueryPlugin_3_8_7_0/INSTALL.TXT  


## Description
You can draw graphs easily with Titanium mobile in this wrapper.
- jqChartWrapper can use stand alone
- iOS / Android compatible
- You can use the format of the jqChart


## Demo
Demo Apps can be build by Titanium studio.

## Requirement
- Titanium SDK    : 3.3.0 or later
- Android Version : 4.X (sorry, not work in 5.0 preview partially)
- iOS Version     : 7.X or later

## Usage
You can use three steps.

### Step.1
Placement of the window to the wrapper object definition.
* Note : Be specified width, and height is required this wrapper. *

    var chartChartGraph = {
        top: '20dp',
        height: '250dp',
        width:  '310dp',
        right: '5dp'
    };

    var Chart = require('jqChartWrapper/Chart');
    var chart = new Chart.createChart(chartChartGraph);
    window.add(chart);

### Step.2
Create a graph data along to jqchart format.
See [jqChart Samples](http://www.jqchart.com/jquery/chart)

    var chartData = {
        title: { text: 'Bar Chart' },
        animation: { duration: 1 },
        shadows: {
            enabled: true
        },
        series: [
            {
                type: 'bar',
                title: 'Series 1',
                fillStyle: '#418CF0',
                data: [['A', 33], ['B', 57], ['C', 33],
                    ['D', 12], ['E', 35], ['F', 7], ['G', 24]]
            },
            {
                type: 'bar',
                title: 'Series 2',
                fillStyle: '#FCB441',
                data: [['A', 67], ['B', 25], ['C', 11],
                    ['D', 8], ['E', 44], ['F', 14], ['G', 78]]
            }
        ]
    };


### Step.3
Draw.

    chart.drawChart(chartData);

## Note
- Unsupported updateChart() of jqchart.
- Be specified width, and height is required this wrapper.


## Install the commercial version jqChart 
Please replace jqChart commercial version of the following directory:
      
       /Resources/jqChartWrapper/jqChartJQueryPlugin_3_8_7_0


If you change files/directory name, Please rewrite the path of the following file

    /Resources/jqChartWrapper/chart.html


## Install
Please copy the directory of following.

    jqchart/Resources/jqChartWrapper

## Version History
- 0.9 : Initial release. 


## Licence of jqChart
jqChart is licensed under following file :

       /Resources/jqChartWrapper/jqChartJQueryPlugin_3_8_7_0/INSTALL.TXT

jqChart Inc has licensed the source code of the following directories:

       /Resources/jqChartWrapper/jqChartJQueryPlugin_3_8_7_0



## Licence of jqChartWrapper
MIT license

## Author
Yoshikazu Oota (oota@nextis.jp)
[NeXTiS inc.](http://nextis.jp/)


Code Strong!
