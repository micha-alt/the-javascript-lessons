/**
 *
 */

function sum( array ) {

  test = 10;                    // BAD, weil globale var

  var summe = 0;                // lokale Var
  function addToSumme( val ) {
    summe += val;               // keine neue globale Var!
                                // sondern "geerbt" aus der sum-function
  }

  array.forEach(addToSumme);
  return summe;
}

console.log("Summe von 10, 20 und 30", sum( [10, 20, 30] ));

function iterator( array ) {
  
  var ix = 0;
  
  var next = function() {
    if( ix < array.length ) {
      return array[ix++];
    } else {
      return null;
    }
  };
    
  return next;
}

var it = iterator( [1,2,3,4] );
console.log(it());
console.log(it());

var it2 = iterator( [1,2,3,4] );

while( it2() != null ) {
  console.log(it2());   
}

console.log(it());
console.log(it());
