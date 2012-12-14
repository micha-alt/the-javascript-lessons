## Prototypen

Wie wird nun in JavaScript Vererbung realisiert? Dazu zunächst eine
gesonderte Betrachtung des sogenannten Prototyps.

### Der Prototyp

Zur Einführung betrachten wir nochmal folgenden bekannten Code. Nach Konvention
haben wir eine Konstruktor-Funktion, Funktionen in JavaScript sind ebenso Objekte,
also haben sie auch Properties. Eine davon: `prototype`

    function Customer( ) {

    }

    log(Customer.prototype);

Der log-Ausgabe können wir entnehmen, dass der Prototyp quasi ein leeres Objekt
eines Typs (name der Konstruktor-Funktion) ist. Nun lässt sich dieser natürlich
erweitern:

    Customer.prototype.nr = 0;

    Customer.prototype.firstname = "";

    Customer.prototype.lastname = "";

    Customer.prototype.registerDate = undefined;

    Customer.prototype.fullname = function() { return this.firstname + " " + this.lastname };

Diese Eigenschaften und Methoden kann ich natürlich auch über ein Objekt-Literal
zuweisen:

    Product.prototype = {

        nr: 0,

        name: "",

        price: 0.0,

        unit: "€",

        toString: function () {

            return this.name +  " (" + this.price + this.unit + ")"

        }

    };

Selbstverständlich kann ich einem einzelnen Objekt weitere eigene dynamische
Eigenschaften zuweisen; Erweiterungen/Änderungen des Prototyps wirken sich jedoch auf
alle(!) Objekte aus, die mit diesem Prototyp erstellt wurden.

Das Ersetzen des Prototypen durch einen neuen hat übrigens keine Auswirkungen
auf die schon erzeugten Objekte; diese halten eine Referenz auf den bei ihrer
Konstruktion gültigen Prototypen.

Zur Beantwortung der auf(ge)kommen(d)en Fragen:

1. Warum erbt c1 die Prototype-Eigenschaften (leer angelegt) und p1 (mit Konstruktor-Funktion
und zwei gesetzten Eigenschaften) nicht? (Merke: die Prototypen wurden jeweils
hinterher angelegt)

2. Warum wirkt sich die Prototyp-Änderung auf alle Objekte aus, es sei denn
die geänderte Eigenschaft war auf den Objekten schon explizit gesetzt?

Bitte versuchen Sie sich selbst an der Lösung. Tipp: interne Objekt-Property `hasOwnProperty`

### Methoden und Funktionen

An dieser Stelle sei nochmal auf eine Besonderheit der Spezifikation im
Zusammenhang mit Funktionen hingewiesen. Nochmal die Definition: *eine Methode
ist eine Funktion die ein Wert einer Eigenschaft ist*. Ein wesentlicher
Unterschied zw. Funktion und Methode ist (s.o.) die `this`-Referenz.

In der Funktion zeigt `this` auf das globale Objekt (z.B. `window` im Browser),
 in der Methode auf das Objekt selbst (wie in Java ...). Demzufolge geht
 folgender Code schief:


