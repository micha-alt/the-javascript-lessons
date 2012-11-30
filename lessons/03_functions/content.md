## Functions

Die wichtigsten Aspekte zu JavaScript Funktionen:

### Definition:

function add( a, b ) {
    return a + b;
}

### Aufruf:

var res = add(17,4);

### Funktionen == Objekte

Dabei ist die Funktionsdefinition in JavaScript ein Ausdruck! Erzeugt wird ein Funktionsobjekt.

Daraus ergibt sich eine alternative Syntax, da der Funktionsname damit ebenfalls überflüssig ist.

var sub = function (a,b) {
    return a - b;
};

console.log(sub(21,4));

### lokale Variablen - Funktions-Scope

Variablen, die innerhalb einer Funktion - mit var(!) - deklariert werden, sind lokale Variablen;
sie haben "Funktions-Scope", bzw. sind nur im Context der Ausführung dieser Funktion sichtbar.

Und es lassen sich private Blöcke simulieren:

(function () {
    var lokal = 42;
})();

Zum Abschluss drei Aspekte, die wohl langsam die Dynamik von JavaScript erahnen lassen:

### Funktions-Konstruktor

Die obige Andeutung, dass Funktionen Objekte und First-Class-Citizens sind, kann ich wie folgt
noch stärker "beweisen":

var mul = new Function('a','b','return a*b');

### Apply

Da Funktionen also Objekte sind, steht es uns also frei Eigenschaften einer Funktion abzurufen:

var countPar = mul.length;  // Anzahl formaler Parameter

Und zuletzt gibt es auch einen Invoke-Mechanismus:

console.log(add.apply(this, [ 23, 19 ]));

Zu dem ersten Argument this etwas später.

### Arguments

Die benannten formalen Funktionsparameter können in JavaScript weggelasssen werden,
innerhalb jeder Funktion steht ein arguments-Objekt mit Array-Charakter zur Verfügung.

function sum () {
    var summe = 0;
    return arguments.forEach( function(val) { summe += val });
}



