
var Bank = Bank || {};

Bank.Konto = function() {
    this.nr = 0;
    this.stand = 0;
};

Bank.Konto.prototype.einzahlen = function(betrag) { this.stand += betrag; };

var k1 = new Bank.Konto();
k1.einzahlen(200);
console.log(k1);
