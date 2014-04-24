obNotificationCenter.js
======================

A jQuery plugin to display a notification center

Requirements
------------

*   JQuery v1.11.0

    The older versions haven't been tested

Installation
------------

I assume that you have correctly included jQuery.

Register the script file in your html document

    <script src="path/to/obNotificationCenter.min.js">

---

**Optional**

Don't forget to register the css file if you want to use the default css style of this plugin

    <link rel="stylesheet" href="path/to/obNotification.min.css">

Usage
-----

    <script>
        $("#myContainer").obNotificationCenter({
            trigger: "click",
            selectors: "#mySelector",
            content: "<div>My html content</div>",
            beforeCloseItem: function (item) {
                console.log(item);
            }
        });
    </script>

Parameters
----------

**trigger**

The event who will open the notification center. These events correspond to the [jQuery's events methods](http://api.jquery.com/category/events/ "JQuery events") as `click()`, `hover()`, `mouseenter()`... etc.

* * *

**selectors**

The jQuery selectors on which the events listener will be registered.

For example if we have the following html button:
`<button id="mySelector">Show the notification center</button>`
The parameter value will be: `"#mySelector"`

**Important !** Note the you can add multiple selectors as `"#mySelector-1, .mySelectors"`

* * *

**content**

The notification center content. You can use both html content directly or use a function that return html content.
The second option allows you to make an ajax request to load the user notification in database for exemple as shown below:

    $(document).ready(function() {

        content = "";

        $("body").obNotificationCenter({
            selectors: "#notifCenter",
            content: function () {
                var url = "test.php";
                $.ajax({
                    "url": url,
                    "async": false,
                    "success": getResult
                });
                return content;
            }
        });
    });
    getResult = function (data) {
        content = data;
    }

**Important !** Note the `"async": false`

* * *

**beforeCloseItem**

This function will be called before close an item (when the user will click on the closing cross).
It's helpfull if you have to do some treatement when an item is closed.

This function will receive the jQuery item element to close as parameter
