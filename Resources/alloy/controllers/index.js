function Controller() {
    function dashboard_click(e) {
        Ti.API.info("Event: " + JSON.stringify(e));
        Ti.API.info("about to launch the " + e.item.id + " controller");
        $.index.open(Alloy.createController(e.item.id).getView());
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.index = A$(Ti.UI.createWindow({
        backgroundColor: "#13386c",
        id: "index"
    }), "Window", null);
    $.addTopLevelView($.__views.index);
    var __alloyId2 = [];
    $.__views.camera = A$(Ti.UI.createDashboardItem({
        backgroundColor: "white",
        id: "camera",
        image: "images/apple_logo.jpg",
        selectedImage: "images/apple_logo.jpg",
        label: "Camera"
    }), "DashboardItem", null);
    __alloyId2.push($.__views.camera);
    dashboard_click ? $.__views.camera.on("click", dashboard_click) : __defers["$.__views.camera!click!dashboard_click"] = !0;
    $.__views.podcast = A$(Ti.UI.createDashboardItem({
        backgroundColor: "white",
        id: "podcast",
        image: "images/apple_logo.jpg",
        selectedImage: "images/apple_logo.jpg",
        label: "Podcasts"
    }), "DashboardItem", null);
    __alloyId2.push($.__views.podcast);
    dashboard_click ? $.__views.podcast.on("click", dashboard_click) : __defers["$.__views.podcast!click!dashboard_click"] = !0;
    $.__views.blog = A$(Ti.UI.createDashboardItem({
        backgroundColor: "white",
        id: "blog",
        image: "images/apple_logo.jpg",
        selectedImage: "images/apple_logo.jpg",
        label: "Blog"
    }), "DashboardItem", null);
    __alloyId2.push($.__views.blog);
    dashboard_click ? $.__views.blog.on("click", dashboard_click) : __defers["$.__views.blog!click!dashboard_click"] = !0;
    $.__views.news = A$(Ti.UI.createDashboardItem({
        backgroundColor: "white",
        id: "news",
        image: "images/apple_logo.jpg",
        selectedImage: "images/apple_logo.jpg",
        label: "News/Twitter Feed"
    }), "DashboardItem", null);
    __alloyId2.push($.__views.news);
    dashboard_click ? $.__views.news.on("click", dashboard_click) : __defers["$.__views.news!click!dashboard_click"] = !0;
    $.__views.pics = A$(Ti.UI.createDashboardItem({
        backgroundColor: "white",
        id: "pics",
        image: "images/apple_logo.jpg",
        selectedImage: "images/apple_logo.jpg",
        label: "Pics/Video"
    }), "DashboardItem", null);
    __alloyId2.push($.__views.pics);
    dashboard_click ? $.__views.pics.on("click", dashboard_click) : __defers["$.__views.pics!click!dashboard_click"] = !0;
    $.__views.calendar = A$(Ti.UI.createDashboardItem({
        backgroundColor: "white",
        id: "calendar",
        image: "images/apple_logo.jpg",
        selectedImage: "images/apple_logo.jpg",
        label: "Events Calendar"
    }), "DashboardItem", null);
    __alloyId2.push($.__views.calendar);
    dashboard_click ? $.__views.calendar.on("click", dashboard_click) : __defers["$.__views.calendar!click!dashboard_click"] = !0;
    $.__views.dashboard = A$(Ti.UI.createDashboardView({
        data: __alloyId2,
        id: "dashboard"
    }), "DashboardView", $.__views.index);
    $.__views.index.add($.__views.dashboard);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    __defers["$.__views.camera!click!dashboard_click"] && $.__views.camera.on("click", dashboard_click);
    __defers["$.__views.podcast!click!dashboard_click"] && $.__views.podcast.on("click", dashboard_click);
    __defers["$.__views.blog!click!dashboard_click"] && $.__views.blog.on("click", dashboard_click);
    __defers["$.__views.news!click!dashboard_click"] && $.__views.news.on("click", dashboard_click);
    __defers["$.__views.pics!click!dashboard_click"] && $.__views.pics.on("click", dashboard_click);
    __defers["$.__views.calendar!click!dashboard_click"] && $.__views.calendar.on("click", dashboard_click);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;