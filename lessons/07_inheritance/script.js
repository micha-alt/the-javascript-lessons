/**
 *
 */

Konto.prototype = {
    nr: 0,
    stand: 0.0
};

Konto.maxNr = 0;

function Konto() {
    this.nr = ++Konto.maxNr;
}

var k1 = new Konto();
