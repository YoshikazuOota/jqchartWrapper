function ApplicationWindow() {
    //declare module dependencies
    var MasterView = require('ui/common/MasterView');

    //create object instance
    var self = Ti.UI.createWindow({
        title: 'Products',
        exitOnClose: true,
        navBarHidden: false,
        backgroundColor: '#ffffff'
    });

    //construct UI
    var masterView = MasterView();
    self.add(masterView);

    //add behavior for master view
    masterView.addEventListener('itemSelected', function(e) {
        var win = require('ui/samples/' + e.name).createWindow();
        win.open();
    });


    return self;
};

module.exports = ApplicationWindow;
