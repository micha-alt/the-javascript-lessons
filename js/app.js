
(function loadContent() {

    // no fallback for IE5/6
    var http = new XMLHttpRequest();

    http.open('get','content.md');
    http.onreadystatechange = function() {
        if( http.readyState === 4) {
            var response = http.responseText;
            var elt = document.getElementById('page-main');
            elt.innerHTML = markdown.toHTML(response);
        }
    };
    http.send(null);

})();

// console.log umbiegen zur besseren Übersicht
//if( console.log) {
//    var original = console.log;
//    console.log = function() {
//       original('Log', arguments);
//    };
//}

// Weiche für jsFiddle bzw Html-Ausgabe
(function(){

    this.log = function() {

        var output = document.getElementById('output');

        if( output !== null ) {
            var i, msg = [];
            for (i = 0; i < arguments.length; i++) {
                msg.push(arguments[i]);
            }
            output.innerHTML += msg.join(' ') + "\n";
        } else {
            this.console.log.apply(this,arguments);
            this.log = this.console.log;
        }
    };

})();
