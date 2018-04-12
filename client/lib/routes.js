FlowRouter.route('/', {
    action: function () {
        BlazeLayout.render("layout", {header: "header", main: "index"});
    },
    name: "index"
});