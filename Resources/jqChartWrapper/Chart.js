// make unique number
var id = 0;
function generateId() { return id++; };

exports.createChart = function (params) {
    var event_name = 'jqchart_event_fire_No' + generateId();
    params = params || {};

    var width, height;

    // convert dp to pixel.
    function dpToPixel(dp) {
        return (parseInt(dp) * (Titanium.Platform.displayCaps.dpi / 160));
    }

    // convert pixel to dp.
    function pixelToDp(px) {
        return (parseInt(px) / (Titanium.Platform.displayCaps.dpi / 160)) + 'dp';
    }

    // params check
    if (params.width === undefined) {
        alert('please set width');
        /*
        // limited work
        if (params.left == undefined || params.right == undefined) {
            alert('please set left/right or width');
            return;
        }
        platformWidthDp = parseInt(pixelToDp(Ti.Platform.displayCaps.platformWidth));
        platformWidthDp = Ti.Platform.osname == 'iphone' ? platformWidthDp * 2 : platformWidthDp;
        width = platformWidthDp - parseInt(params.left) - parseInt(params.right);
        */
    } else {
        width  = parseInt(params.width);
    }

    if(params.height === undefined) {
        alert('please set height');
        return;
        /*
        // don't work
        if (params.top == undefined || params.bottom == undefined){
            alert('please set top/bottom or height');
            return;
        }
        platformHeightDp = parseInt(pixelToDp(Ti.Platform.displayCaps.platformHeight));
        platformHeightDp = Ti.Platform.osname == 'iphone' ? (platformHeightDp * 2) -64 : platformHeightDp; // ナビバー分を引く
        height = platformHeightDp - parseInt(params.top) - parseInt(params.bottom);
        */
    } else {
        height = parseInt(params.height);
    }

    var webView = Ti.UI.createWebView(params);

    if (Ti.Platform.osname == 'iphone') {
        webView.disableBounce = true;
        //webView.touchEnabled = false;
    }
    var first_flag = true;

    // RadarChart用初期化
    webView.drawChart = function (data) {

        var chartFunc = function () {
            // if tooltip to disabled
            //data.tooltips = {disabled : true};
            webView.evalJS("drawChart(" + JSON.stringify(data) + ")");
            Titanium.App.removeEventListener(event_name, chartFunc);
        };

        Titanium.App.addEventListener(event_name, chartFunc);

        if (first_flag) {
            first_flag = false;

            var file = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "/jqChartWrapper/chart.html");
            var blob = file.read();
            var readText = blob.text;

            file = null;
            blob = null;

            // html分の中で動的に指定したい処理を書き換え
            if (Ti.Platform.osname == 'iphone') {
                readText = readText.replace(/VIEWPORT_DEFINE/g, '<meta name="viewport" content="width=initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"/>');
            } else {
                readText = readText.replace(/VIEWPORT_DEFINE/g, '<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"/>');
            }
            readText = readText.replace(/CANVAS_SIZE/g, 'width: ' + width + '; height: ' + height + ';');
            readText = readText.replace(/EVENT_DEFINE/g, "Ti.App.fireEvent('" + event_name + "');");

            webView.html = readText;
        }
    };

    // update
    webView.updateChart = function (data) {
        var chartFunc = function () {
            webView.evalJS("updateChart(" + JSON.stringify(data) + ")");
        };
    };

    return webView;

};
