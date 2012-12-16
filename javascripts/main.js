(function () {

    this.log = function (msg) {

        var output = document.getElementById('output');

        if (output !== null) {
            output.innerHTML += msg + "\n";
        } else {
            this.console.log(msg);
            this.log = this.console.log;
        }
    };
})();
