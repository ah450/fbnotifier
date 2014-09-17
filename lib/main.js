var self = require('sdk/self');
var utils = require('utils');

var windows = { 
    get active_chrome () {
        return require('sdk/window/utils').getMostRecentBrowserWindow();
    }, 
    get active_sdk () {
        return require('sdk/windows').browserWindows.activeWindow;
    }

};


// create widget
const {Cu}   = require('chrome');
Cu.import("resource:///modules/CustomizableUI.jsm");

CustomizableUI.createWidget({
    id: "fbnotifier",
    type: "button",
    // viewId: "fbnotifier-view",
    tooltiptext: "This is a tooltip.",
    label: "This is a label.",
    overflows: true,
    defaultArea: CustomizableUI.AREA_NAVBAR
});


utils.loadStyleSheet(self.data.url('overlay.css'), windows.active_chrome);


