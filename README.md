jquery.createHtml
=================

A jQuery plugin that removes some typing from creating on-the-fly HTML elements.

Synopsys
--------

This plugin adds jQuery element functions to create a nested HTML element in a more
convenient manner.

To save the drudgery of this:


      $("#myDiv").append(
        $("<div/>").append(
          $("<span/>").append(
            $("<b/>").html("A bold statement!"))));


This plugin allows you do do this:


     $('#myDiv').$div().$span().$b("A bold statement!");


To further simplify content creation (and further pollute the jQuery namespace) it
is possible to add another function per HTML element to create the element, but
return the parent's object rather than itself. To enable this, run:

     $.createHtml("configure", {installParentFunctions: true});

This will install functions of the form `$<element-name>_()`.

With these functions installed, you can do:

    $('#myDiv').$table().$tr().$td_("cell 1").$td_("cell 2").$td_("cell 3");

This will make all the `td` elements siblings. Note that you can achieve the
same behaviour by putting `parent()` between each $td(), but that is just more typing

Usage
-----

     $('selector').$<element-type>(["content",] [{<attr1>: <val1>, ...}]);


Examples
--------

To create a table in the div#myDiv element:

     $('#myDiv').$table();

To create a span with the text "hello world" and the class "bold":

     $('#myDiv').$span("hello world", {"class": "bold"});

To create a table and then add some rows:

     var t = $('#myDiv').$table();
     var t.$tr().$th_("Index").$th("Text");
     for (var i = 0; i < 10; i++) {
       t.$tr().$td_(i).$td_("The number " + i);
     }

You can skip the content if it isn't needed:

     $('#myDiv').$span({"class": "bold"});


Be aware
--------

This plugin will add every HTML5 element name (preceded by a '$') into 
the jQuery .fn namespace.  If you have a fear or great hatred of crowded
namespaces (nominal claustrophobia?) then you should skip this plugin.
