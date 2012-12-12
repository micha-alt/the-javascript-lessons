## Arrays

Arrays können in JavaScript ebenfalls literal definiert werden.

    var primes = [ 2, 3, 5, 7, 11, 13 ];

Arrays sind allerdings schon Objekte, können also ebenso über einen
Konstruktor-Aufruf erzeugt werden. Und verfügen dementsprechen über
Eigenschaften und Methoden wie push, pop, shift, unshift, join, indexOf, forEach, ...

Neben Arrays existieren weitere Standard-Typen, z.B.

* Date
* RegExp

und auch

* String
* Number
* Boolean

Fragezeichen?

Beachte:

    console.log( 5 == new Number(5));

    console.log( 5 === new Number(5));
