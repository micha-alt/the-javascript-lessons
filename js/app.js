
(function loadContent() {

    // no fallback for IE5/6
    var http = new XMLHttpRequest();

    http.open('get','content.md');
    http.onreadystatechange = function() {
        if( http.readyState == 4) {
            var response = http.responseText;
            var elt = document.getElementById('page-main');
            elt.innerHTML = markdown.toHTML(response);
        }
    };
    http.send(null);

})();

