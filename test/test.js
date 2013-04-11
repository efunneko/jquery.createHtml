

(function($) {

    $(document).ready(function() {

        $('body').$style(".good { background-color: #88ff88 } .failed {background-color: #ff8888 }");

        // Add some HTML with a variety of tags
        $('#test').$div({id: 'myDiv'}).$span("<b>Hi  there!</b>", {id:'mySpan'});

        // Append more to the same element
        $('#test').$div("Some content this time", {id: 'myDiv2'});

        // Now save a created element to variable, add to it and intersperse some parent calls
        var t = $('#test').$table();
        t.$tr().$th("Index").parent().$th("Text");
        var i = 1;
        t.$tr().$td(i).parent().$td("The number " + i);

        // Finally validate it all
        if (verify()) {
            $('#result').addClass('good');
            $('#result').html("Passed");
        }
        else {
            $('#result').addClass('failed');
            $('#result').html("Failed");
        }

        function error(msg) {
            if (window.console) {
                console.error(msg);
            }
        }

        function verify() {
            var els = $('#test').children();

            if (els.length != 3) {
                error("Wrong number of children in #test");
                return false;
            }

            var child = els.eq(0);
            if (child[0] !== $('#myDiv')[0]) {
                error("Invalid div for first child");
                return false;
            }

            if (child.children().length != 1) {
                error("Expected only one child below #myDiv");
                return false;
            }

            if (child.children()[0] !== $('#mySpan')[0]) {
                error("#mySpan span is not where expected");
                return false;
            }

            if (!child.children().children().is('b')) {
                error("Expected a bold element in the first span, but found: " + child.children().children()[0].prop('tagname'));
                return false;
            }

            if (child.children().children().html() != "Hi there!") {
                error("Unexpected content in bold element");
                return false;
            }

            child = els.eq(1);
            if (child[0] !== $('#myDiv2')[0]) {
                error("Unexpected second top-level element");
                return false;
            }

            if (child.html() != "Some content this time") {
                error("Unexpected content of second div");
                return false;
            }

            child = els.eq(2);
            if (!child.is("table")) {
                error("Expected a table as the third element in #test");
                return false;
            }

            var tds = child.find('tr').eq(1).children();
            if (tds.length != 2) {
                error("There should be 2 children at this level");
                return false;
            }
            
            if (!tds.eq(0).is('td') || !tds.eq(1).is('td')) {
                error("There should be 2 'td' children at this level");
                return false;
            }

            return true;

        }

        
        

    });


})(jQuery);