require(["gitbook"], function (gitbook) {
    var _config = {}

    // Init configuration at start
    gitbook.events.bind('start', function(e, config) {
        _config = config['add-path-to-parent'];
    });

    gitbook.events.bind("page.change", function (e) {
        // ensure  exist parent window
        var parentWindow = window.parent;
        if (parentWindow == window) return;
        if (!history || !history.pushState) return;

        // ensure exist last path is not empty
        var path = document.location.pathname;
        if (!path) return;

        path = (_config.prefix || '') + path;

        // update parent window location hash key;
        parentWindow.history.pushState(null, {}, path);
    });
});
