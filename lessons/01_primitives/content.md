# Primitive Values

JavaScript ist eine dynamische Script-Sprache. Wir müssen (und können)
also Variablen nicht typisieren bei der Deklaration.

Es existieren aber selbstverständlich Typen und insbesondere auch
primitive Literale und Typen wie folgt:

* Number
* String
* Boolean
* Null
* undefined

Deklariert werden Variablen mit dem Keyword var, typisiert durch Zuweisung.

        var zahl = 42;

        var piGrob = 3.14;

        var name = "Alt";

        var vorname = 'Michael';

        var wahr = true;

        var leer = null;        // Achtung, siehe Ausgabe

        var nix1;

        var nix2 = undefined;

        console.log("zahl (Typ: ",typeof(zahl) + ") ", zahl);

        console.log("piGrob (Typ: ",typeof(piGrob), ") " + piGrob);

        console.log("name (Typ: ", typeof(name),")",name);

        console.log("vorname (Typ: ", typeof(vorname),")",vorname);

        console.log("wahr (Typ: ", typeof(wahr),")",wahr);

        console.log("leer (Typ: ", typeof(leer),")",leer);

        console.log("nix1 (Typ: ", typeof(nix1),")",nix1);

        console.log("nix2 (Typ: ", typeof(nix2),")",nix2);
