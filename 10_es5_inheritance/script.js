
BaseClass.count = 0;
BaseClass.prototype = {
    id: 0,
    name: '',
    toString: function() { return 'Base-Object ' + this.id }
}

function BaseClass () {
    this.id = ++BaseClass.count;
    console.log("BaseClass constructor")
}

SubClass.prototype = new BaseClass();
SubClass.prototype.toString = function() { return 'Sub-Object ' + this.id }

function SubClass () {
    BaseClass.call(this);
    console.log("SubClass constructor");
}

var b1 = new BaseClass();
var s1 = new SubClass();
var s2 = new SubClass();

console.log(b1);
console.log(s1);
console.log(s2);

// Object.create() to implement inheritance

BasisKlasse.count = 0;
BasisKlasse.prototype = {
    id: 0,
    name: 'Basis-Objekt',
    toString: function() { return 'Basis-Objekt ' + this.id }
}

function BasisKlasse (name) {
    this.id = ++BasisKlasse.count;
    console.log("BasisKlasse Konstruktor")
}

KindKlasse.prototype = Object.create(BasisKlasse.prototype);
KindKlasse.prototype.toString = function() { return 'Kind-Objekt ' + this.id }

function KindKlasse () {
    BasisKlasse.call(this);
    console.log("SubClass Konstruktor");
}

var b2 = new BasisKlasse();
var k1 = new KindKlasse();
var k2 = new KindKlasse();

console.log(b2);
console.log(k1);
console.log(k2);

console.log(Object.keys(k1));
console.log(k1.name);

BasisKlasse.prototype.name = 'Changed Prop';
console.log(k1.name);

KindKlasse.prototype.name = 'New Child default';
console.log(k1.name);

k1.name = 'My special name';
console.log(k1.name);
console.log(k2.name);

Konto.count = 0;
function Konto () {
    this.id = ++Konto.count;
    this.stand = 0;
}

Konto.prototype = Object.create(null,{
    einzahlen: { value: function(betrag) { console.log(this.id); this.stand += betrag; } },
    auszahlen: { value: function(betrag) { if(betrag > this.stand) return false; this.stand -= betrag; return true; }}
});

GiroKonto.prototype = Object.create(Konto.prototype, {
    auszahlen: { value: function(betrag) { if(betrag > this.stand + this.dispo) return false; this.stand -= betrag; return true; }}
});

function GiroKonto() {
    Konto.call(this);
    this.dispo = 0;
}

var konto1 = new Konto();
var giro1 = new GiroKonto();