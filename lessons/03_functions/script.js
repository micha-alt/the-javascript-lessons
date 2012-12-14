/**
 *
 */

function add( a, b ) {
    return a + b;
}

var res = add(17,4);

function sum () {
    var summe = 0;
    for( i=0; i<arguments.length; i++) {
        summe += arguments[i];
    }
    return summe;
};

log("Ergebnis:",sum( 1,2,3));

log(add.length);
log(add.apply(this, [ 23, 19 ]));

