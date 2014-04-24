$(document).ready(function(){
    $("body").obNotificationCenter({
        trigger: "click",
        selectors: "#selector",
        content: $("#content").html(),
        beforeCloseItem: function (item) {
            console.log(item);
        },
        beforeLinkClicked: function (item) {
            console.log("toto");
        }

    });

});