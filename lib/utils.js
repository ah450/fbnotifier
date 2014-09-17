var {Style} = require('sdk/stylesheet/style');
var mod = require('sdk/content/mod');
/**
 * @brief Load a style sheet.
 * @param [string] url : StyleSheet url.
 * @param [window] window: window to attach to
 */
exports.loadStyleSheet = function load (url, window) {
    var sheet = Style({
        uri: url
    });
    mod.attachTo(sheet, window);
}

exports.unloadStyleSheet = function unload (url, window) {
    var sheet = Style({
        uri: url
    });
    mod.detachFrom(sheet, window);
}