## Objekte

Eine der ersten Hürden die ein *erfahrener* OO-Programmierer überwinden muss, ist
das Fehlen des `class` Schlüsselwortes. Man könnte vielleicht eine Trennlinie ziehen
zwischen *objekt*-orientiertem Programmieren und einem neuen Pendant
*klassen*-orientierte Programmierung. Dabei lässt sich dann JavaScript bei ersterem
einordnen.

Daraus resultiert dann auch ein fundamentaler Unterschied, wie JavaScript Vererbung
realisiert: man spricht hier von der *prototyp*-basierten Vererbung.

Doch wir beginnen am Anfang:

### Definition von Objekten (aka Variablen vom Typ Objekt).

**Literal**

    var javascript = {

        designer: 'Brendan Eich',

        created: new Date(1995,0,1),

        influences: ['C','Java','Scheme'],

    };

**Per Konstruktor**

    var c = new Object({

        designer: 'Dennis Ritchie',

        created: new Date(1972, 0, 1),

        influences: ['B', 'ALGOL']

    });

Beide Varianten sind nach der Spezifikation als äquivalent zu betrachten.

### Eigenschaften-Zugriff

Zwei Möglichkeiten:

**Punkt-Operator**

    console.log(javascript.designer);

**Array-Zugriff**

    console.log(javascript['created']);

Bisher sehen unsere *Objekte* eher aus wie Datenstrukturen. Deswegen zum nächsten
Schritt:

### Konstruktoren

    function Language( designer, created, influences ) {

        this.designer = designer;

        this.created = created;

        this.influences = influences;
    }

    var java = new Language(

        'James Goslin', new Date(1991,0,1), [ 'C++','Smalltalk ]

    );

Anmerkung: Konstruktor-Funktionen beginnen nach Konvention mit einem Großbuchstaben.

Aber was macht dieses `this` hier?

Zunächst ist `this` ein Verweis. Worauf `this` verweist entscheidet der Kontext:

- Global: `window`  (oder das `global` unter z.B. node)
- In einer Funktion: ebenso diesen globalen Kontext (bzw. undefined falls wir uns im
  `strict`-Mode befinden).
- In einem Konstruktor bzw. einer Methode(!): das Objekt.

### Methoden

Wie sieht denn jetzt eine Methode aus? Die Spezifikation
[Link](http://es5.github.com/#x4.3.27) sagt:
 *Eine Methode ist eine Funktion die ein Wert einer Eigenschaft ist*

Also:

    function Language( designer, created, influences ) {

        this.designer = designer;

        this.created = created;

        this.influences = influences;

        this.age = function() {

            return new Date().getFullYear() - this.created.getFullYear();

        };

    }

Natürlich kann ich Eigenschaften/Properties (und damit natürlich auch Methoden)
quasi am lebenden Objekt hinzufügen! (JavaScript ist dynamisch!)

### Objekt-Eigenschaften und Methoden

Prinzipiell erzeugt also unsere Konstruktor-Funktion ein `Object` mit zusätzlichen
Eigenschaften. Die vorhandenen Eigenschaften fasst die Referenz
[hier](http://es5.github.com/#x15.2.4) zusammen.

Unter anderem ist das eine `constructor`-Property, die unsere Konstruktor-Funktion
enthält, sowie zum Beispiel auch eine `toString`-Methode.
