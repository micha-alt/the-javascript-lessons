// Keine Closure hier, nur zum Vergleich
function sum( array ) {

    test = 10;                   // BAD, weil globale var

    var summe = 0;                // lokale Var
    function addToSumme( val ) {
        summe += val;               // keine neue globale Var!
        // sondern "geerbt" aus der sum-function
    }

    array.forEach(addToSumme);
    return summe;
}

console.log("Summe von 10, 20 und 30: " +  sum( [10, 20, 30] ));

function closureCreation(arg1){

    var localVar = "Ergebnis: ";

    function theClosure(innerArg){

        return localVar + (innerArg * arg1);

    }

    return theClosure;

}

var globalVar = closureCreation(2);

console.log(globalVar(4));

var vielfacheVonDrei = closureCreation(3);

console.log(vielfacheVonDrei(7));


function callLater(attr, value){
    /* Return a reference to an anonymous inner function created
     with a function expression
     */
    return (function(elt){
        /* This inner function is to be executed with setTimeout.
         And when it is executed it can read, and act upon, the
         parameters passed to the outer function.
         */
        elt.style[attr] = value;
    });
}


/* Call the function that will return a reference to the inner function
 object created in its execution context. Passing the parameters that
 the inner function will use when it is eventually executed as
 arguments to the outer function. The returned reference to the inner
 function object is assigned to a local variable:-
 */
var hide = callLater("display", "none");
var makeBlue = callLater('backgroundColor','#214161');

/* Call the setTimeout function, passing the reference to the inner
 function assigned to the - functRef - variable as the first argument:-
 */
var header = document.getElementById('demo-rect');

window.setTimeout(function(){makeBlue(header)}, 2000);
window.setTimeout(function(){hide(header)}, 5000);
