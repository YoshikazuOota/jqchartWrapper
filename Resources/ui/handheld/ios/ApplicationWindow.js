function ApplicationWindow() {
    //declare module dependencies
    var MasterView = require('ui/common/MasterView');

    //construct UI
    var masterView = MasterView();

    //create master view container
    var masterContainerWindow = Ti.UI.createWindow({
        title: 'jqChart Sample List'
    });
    masterContainerWindow.add(masterView);

    //create iOS specific NavGroup UI
    var navGroup = Ti.UI.iOS.createNavigationWindow({
        window: masterContainerWindow
    });

    //add behavior for master view
    masterView.addEventListener('itemSelected', function (e) {
          var win = require('ui/samples/' + e.name).createWindow();
      navGroup.openWindow(win);
    });

    return navGroup;
};

module.exports = ApplicationWindow;
