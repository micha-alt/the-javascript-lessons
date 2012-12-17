
function add( a, b ) {
    return a + b;
}

var res = add(17,4);
console.log(res);

function sum () {
    var i, summe = 0;
    for( i=0; i<arguments.length; i++) {
        summe += arguments[i];
    }
    return summe;
}

console.log("Ergebnis: " + sum( 1,2,3));

console.log(add.length);
console.log(add.apply(this, [ 23, 19 ]));

