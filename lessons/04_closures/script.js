/**
 *
 */

function sum( array ) {

  test = 10;                    // BAD, weil globale var

  var summe = 0;                // lokale Var
  function addToSumme( val ) {
    summe += val;               // keine neue globale Var!
  }

  array.forEach(addToSumme);
  return summe;
}

console.log("Summe von 10, 20 und 30", sum( [10, 20, 30] ));
