## Closures

Zwei Vorbemerkungen zum Verständnis von Closures:

1. Funktionen werden in/mit einem Variablen-Kontext ausgeführt.
2. In JavaScript können Sie innere Funktionen definieren, die den kompletten Kontext der äußeren Funktion "erben".

Mehr über Scopes, Kontexte, Funktionen und Closures:
[Notes on JavaScript Closures](http://jibbering.com/faq/notes/closures/)

### Innere Funktion:

    function sum( array ) {

      test = 10;                    // BAD, weil globale var

                                    // (hier aber nur zur Abgrenzung (siehe summe in addToSumme)

      var summe = 0;                // lokale Var

      function addToSumme( val ) {

        summe += val;               // keine neue globale Var!

      }

      array.forEach(addToSumme);

      return summe;

    }

### Closure:

**Freie Defintion:**

1. innere Funktion greift auf äußeren Scope (Funktion/Objekt) zu.
2. äußerer Block rückt die innere Funktion über return oder als Eigenschafts-Wert heraus.
Also gelangt der Scope der äußeren Umgebung (lokale Vars, Parameter) über seine
eigentliche Lebensdauer hinaus (quasi eingeschlossen in der inneren Funktion)
an die Außenwelt. Man nennt Closures auch Funktions-Abschlüsse.

**Zitat (frei) aus der [Perl FAQ](http://perldoc.perl.org/perlfaq7.html#What%27s-a-closure?):** Closure ist ein Begriff aus der Programmierung, der präzise definiert aber schwer zu beschreiben ist. :-)

**Zitat (Quelle vergessen)**: Closure is a notion out of the Lisp world that says if you define an anonymous function in a particular lexical context, it pretends to run in that context even when it's called outside the context.

**Wikipedia:** Als Closure oder Funktionsabschluss bezeichnet man eine Programmfunktion, die sich ihren Erstellungskontext „merkt“. Beim Aufruf kann die Funktion dann auf diesen zugreifen, selbst wenn der Kontext außerhalb der Funktion schon nicht mehr existiert.

Ein *formales* Beispiel:

    function closureCreation(arg1){

        var localVar = "Ergebnis: ";

        function theClosure(innerArg){

            return localVar + (innerArg * arg1);

        }

        return theClosure;

    }

    var globalVar = closureCreation(2);

    globalVar(4);

    var vielfacheVonDrei = closureCreation(3);

    vielfacheVonDrei(7);

Und ein etwas sinnvolleres Beispiel:

    function callLater(attr, value){

        /* Return a reference to an anonymous inner function created

           with a function expression:-

        */

        return (function(elt){

            /* This inner function is to be executed with - setTimeout

                - and when it is executed it can read, and act upon, the

                parameters passed to the outer function:-

            */

            elt.style[attr] = value;

        });

    }
