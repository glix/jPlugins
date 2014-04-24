(function ( $ ) {

    var container = null;
    var wrapper = null;
    var bottomBar = $("<div>").addClass("obNotifBottomBar");

    var mainContainer = $("body");
    var trigger = "click";
    var selectors = "";
    var content = "";
    var closerClass = "obNotifCloseItem";

    // Function called before remove an item
    var beforeCloseItem = function (item) {}
    // Function called before click an link
    var beforeLinkClicked = function (item) {}

    var closed = true;

    $.fn.obNotificationCenter = function( params ) {
        // Extract parameters
        if (typeof params.trigger != "undefined") {
            trigger = params.trigger;
        }
        if (typeof params.selectors != "undefined") {
            selectors = $(params.selectors);
        }
        if (typeof params.content != "undefined") {
            if ($.isFunction(params.content)) {
                content = params.content();
            } else {
                content = params.content;
            }
        }
        if (typeof params.closerClass != "undefined") {
            closerClass = params.closerClass;
        }
        if (typeof params.beforeCloseItem != "undefined") {
            if ($.isFunction(params.beforeCloseItem)) {
                beforeCloseItem = params.beforeCloseItem;
            }
        }
        if (typeof params.beforeLinkClicked != "undefined") {
            if ($.isFunction(params.beforeLinkClicked)) {
                beforeLinkClicked = params.beforeLinkClicked;
            }
        }
        mainContainer = $(this);

        selectors[params.trigger](open);
        $(window).resize(onWindowResize);
    };

    var create = function () {
        container = $("<div></div>").addClass("obNotif");
        var size = $(window).height();
        container.css("top", size * (-1));

        wrapper = $("<div></did>").addClass("obNotifWrapper");
        var scrollable = $('<div>').addClass("obNotifScrollable");
        scrollable.append(content);
        wrapper.append(scrollable);

        bottomBar.click(close);
        container.append(wrapper);
        container.append(bottomBar);

        mainContainer.append(container);

        $("."+closerClass).click(onItemClose);
        $(".notifLink").click(onLinkClicked);
    }

    var open = function () {
        if (container === null) {
            create();
        }
        container.animate({
            "top": 0
        }, 500);
        closed = false;
    }

    var close = function () {
        var size = $(window).height();
        container.animate({
            "top": size * (-1)
        }, 500);
        closed = true;
    }

    var onWindowResize = function () {
        if (container !== null && closed) {
            var size = $(window).height();
            container.css("top", size * (-1));
        }
        var size = $(window).height();
    }

    var onItemClose = function() {
        var item = $(this).parents(".obNotifItem");
        beforeCloseItem(item);
        item.remove();
    }

    var onLinkClicked = function(evt) {
        var href = this.href
        // var item = $(this).parents(".obNotifItem");
        if (beforeLinkClicked($(this)) === true) {
            location.href = href;
        } else {
            return false;
        }
    }

    $.ltrim = function( str ) {
        return str.replace( /^\s+/, "" );
    };
    $.rtrim = function( str ) {
        return str.replace( /\s+$/, "" );
    };
}( jQuery ));
