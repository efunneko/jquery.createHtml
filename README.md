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



Usage
-----

     $('selector').$<element-type>(["content",] [{<attr1>: <val1>, ...}]);


Examples
--------

To create a table in the div#myDiv element:

     $('#myDiv').$table();

To create a span with the text "hello world" and the class "bold":

     $('#myDiv').$span("hello world", {class: "bold"});

To create a table and then add some rows:

     var t = $('#myDiv').$table();
     var t.$tr().$th("Index").parent().$th("Text");
     for (var i = 0; i < 10; i++) {
       t.$tr().$td(i).parent().$td("The number " + i);
     }

You can skip the content if it isn't needed:

     $('#myDiv').$span({class: "bold"});


Be aware
--------

This plugin will add every HTML5 element name (preceded by a '$') into 
the jQuery .fn namespace.  If you have a fear or great hatred of crowded
namespaces (nominal claustrophobia?) then you should skip this plugin.
