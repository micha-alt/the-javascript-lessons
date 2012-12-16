
// Objekt-Initialisierer

var e1 = {};

var c1 = {
    nr: 1,
    firstname: "Klaus",
    lastname: "Lage"
};

var c2 = new Object({
    nr: 1,
    firstname: "Klaus",
    lastname: "Lage"
});


// Konstruktor (-Funktion)

function Leer() {};
var e2 = new Leer();

var Article = function( nr, name ) {
    this.nr = nr;
    this.name = name;
}
var a1 = new Article(1, "Berliner Weiße");







