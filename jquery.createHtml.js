/*!
 * jQuery create HTML plugin
 * Original author: @efunneko
 * Licensed under the MIT license
 */


// Simple jQuery plugin to make it a bit cleaner to add
// HTML using jQuery. Instead of doing:
//
// $("body").$("<div/>").append(
//   $("<span/>", {id: 'mySpan'}).append(
//     $("<b/>").html("My bold statement!")));
//
// You can do:
//
// $("body").$div().$span({id: 'mySpan'}).b("My bold statement!");

;(function ( $, window, document, undefined ) {

    // Create the defaults once
    var pluginName = 'createHtml',
        defaults = {
        },
        elements = [
            "a", "abbr", "address", "area", "article", "aside", "audio", "b", "base",
            "bdi", "bdo", "blockquote", "body", "br", "button", "canvas", "caption",
            "cite", "code", "col", "colgroup", "command", "data", "datalist", "dd",
            "del", "details", "dfn", "div", "dl", "dt", "em", "embed", "fieldset",
            "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5",
            "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input",
            "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "math",
            "menu", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option",
            "output", "p", "param", "pre", "progress", "q", "rp", "rt", "ruby", "s",
            "samp", "script", "section", "select", "small", "source", "span", "strong",
            "style", "sub", "summary", "sup", "svg", "table", "tbody", "td", "textarea",
            "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var",
            "video", "wbr"
        ];

    // Add all element functions
    $.each(elements, function(i, elName) {
        $.fn["$" + elName] = function(content, attrs) {
            if (typeof(content) == 'object' && typeof(attrs) == 'undefined') {
                attrs = content;
                content = undefined;
            }
            var el = $("<" + elName + ">", attrs);
            if (content && content != "") {
                el.html(content);
            }
            $(this).append(el);
            return el;
        }
    });
    
})( jQuery, window, document );
