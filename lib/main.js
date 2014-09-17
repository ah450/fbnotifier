var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");

var button = buttons.ActionButton({
  id: "facebook-link",
  label: "Visit Facebook",
  icon: {
    "16": "./facebook-16.png",
    "32": "./facebook-32.png",
    "64": "./facebook-64.png"
  },
  onClick: handleClick
});

var tabs = require("sdk/tabs");
var data = require("sdk/self").data;

function handleClick(state) {

 /* pageWorker = require("sdk/page-worker").Page({
    contentURL: data.url("index.html")
  });*/

tabs.activeTab.attach({
  contentScriptFile : data.url("content-worker.js")
});

}