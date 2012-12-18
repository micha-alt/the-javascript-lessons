
function GiroKonto() {

    // access to static member
    this.constructor.maxNr++;

    // private member
    var nr = this.constructor.maxNr, stand = 0, dispo = 0;

    // public member
    this.inhaber = 0;

    // private method
    function checkNonNegative( value ) {
        if( value < 0 ) {
            console.error("Negative value not allowed.");
            throw { name: "ArgumentException", message: "Negative values are not allowed. "};
        }
        return true;
    }

    // privilegierte Member
    this.getNr = function() { return nr; };
    this.getStand = function() { return stand; };
    this.getDispo = function() { return dispo; };
    this.setDispo = function(value) { checkNonNegative(value); dispo = value; };

    this.einzahlen = function (betrag) {
        stand += betrag;
    }
}

// static member
GiroKonto.maxNr = 0;

// public methods
GiroKonto.prototype.toString = function () {
    return 'Konto: ' +  this.getNr() + ", Stand: " + this.getStand();
}

// executing ...
var k1 = new GiroKonto();
k1.einzahlen(1000);
var k2 = new GiroKonto();
k1.setDispo(2000);

console.log(k1.getDispo());
console.log(k2.getDispo());
console.log(k1.toString());
console.log(k2.toString());
