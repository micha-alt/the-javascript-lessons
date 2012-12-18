
function Konto( nr ) {
    this.nr = nr;
    this.stand = 0.0;
    console.log('Konto-Konstruktor');
}

Konto.prototype = {

    einzahlen: function(betrag) {
        this.stand += betrag;
    },
    auszahlen: function(betrag) {
        if( betrag > this.stand )
            return false;

        this.stand -= betrag;
        return true;
    },
    toString: function() {
        return "Konto " +  this.nr;
    }
};

var k1 = new Konto(1001);
k1.einzahlen(1000);
k1.auszahlen(800);
k1.auszahlen(300);

console.log(k1);

function GiroKonto( nr ) {
    this.nr = nr;
    console.log('Girokonto-Konstruktor');
}

GiroKonto.prototype = new Konto();

var gk1 = new GiroKonto(1002);
console.log(gk1);

console.log( "gk1 is GiroKonto: " + (gk1 instanceof GiroKonto));
console.log( "gk1 is Konto: " + (gk1 instanceof Konto));

// GiroKonto erweitern
GiroKonto.prototype.dispo = 1000;
GiroKonto.prototype.auszahlen = function(betrag) {
    if( betrag > this.stand + this.dispo )
        return false;

    this.stand -= betrag;
    return true;
}

gk1.auszahlen(700);
console.log(gk1);

// Oberklassen-Methode aufrufen
GiroKonto.prototype.einzahlen = function(betrag) {
    Konto.prototype.einzahlen.apply(this,arguments);
    console.log("Einzahlen über Oberklassen-Methode");
}

gk1.einzahlen(500);
console.log(gk1);

var gk2 = new GiroKonto(1003);