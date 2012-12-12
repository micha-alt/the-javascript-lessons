## Functions

Die wichtigsten Aspekte zu JavaScript Funktionen:

### Definition:

    function add( a, b ) {

        return a + b;

    }

### Aufruf:

    var res = add(17,4);

### Vordefinierte Funktionen

Vordefinerte Top-Level Funktionen von JavaScript:

* eval
* isFinite
* isNaN
* parseInt and parseFloat
* Number and String      ( schon wieder , sic *g*)
* encodeURI, decodeURI, encodeURIComponent, and decodeURIComponent (all available with Javascript 1.5 and later).

(Liste kopiert aus dem [MDN](https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Functions#Predefined_functions) )

### Funktionen == Objekte

Die Funktionsdefinition in JavaScript ist ein Ausdruck! Erzeugt wird ein Funktionsobjekt.

Daraus ergibt sich eine alternative Syntax, da der Funktionsname damit ebenfalls überflüssig ist.

    var sub = function (a,b) {

        return a - b;

    };

    console.log(sub(21,4));

### lokale Variablen - Funktions-Scope

Variablen, die innerhalb einer Funktion - mit var(!) - deklariert werden, sind lokale Variablen;
sie haben "Funktions-Scope", bzw. sind nur im Context der Ausführung dieser Funktion sichtbar.

Und es lassen sich private Blöcke simulieren (Anonyme Funktion, die sofort ausgeführt wird):

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

        for( i=0; i<arguments.length; i++) {

            summe += arguments[i];

        }

        return summe;

    }
