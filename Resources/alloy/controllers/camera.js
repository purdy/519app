function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.camera = A$(Ti.UI.createWindow({
        id: "camera"
    }), "Window", null);
    $.addTopLevelView($.__views.camera);
    $.__views.__alloyId2 = A$(Ti.UI.createLabel({
        text: "This is the camera window...",
        id: "__alloyId2"
    }), "Label", $.__views.camera);
    $.__views.camera.add($.__views.__alloyId2);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;