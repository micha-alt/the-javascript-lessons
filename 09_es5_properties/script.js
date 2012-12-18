
var k1 = Object.create(null);
var k2 = Object.create(null);

k1.nr = 1;
k1['stand'] = 0;

console.log(k1);

console.log(Object.getOwnPropertyDescriptor(k1,'nr'));

Object.defineProperty(k2,'nr', {
    value: 2, enumerable: true
});
Object.defineProperty(k2,'stand', {
    value: 1000
});

console.log(k2);
console.log(k2.stand);

var cust = Object.create(null);
Object.defineProperty(cust, 'first_name', {
    value:    'Klaus'
    , writable: true });

Object.defineProperty(cust, 'last_name', {
    value:    'Lage'
    , writable: true });

// () → String
// Returns the full name of object.
function get_full_name() {
    return this.first_name + ' ' + this.last_name
}

// (new_name:String) → undefined
// Sets the name components of the object, from a full name.
function set_full_name(new_name) { var names
    names = new_name.trim().split(/\s+/);
    this.first_name = names[0] || '';
    this.last_name  = names[1] || '';
}

Object.defineProperty(cust, 'name', {
    get: get_full_name
    , set: set_full_name
    , configurable: true
    , enumerable:   true
    , writeable: true
});

console.log(cust);
cust.last_name = 'Fischer';
console.log(cust);

console.log(Object.getOwnPropertyNames(cust));
console.log(Object.keys(cust));

// Literal:
var a = {
    nr: 4711,
    name: 'Berliner Weisse',
    _preis: 0,
    get preis() {return this._preis },
    set preis(value) { if( value < 0) throw "Negativer Preis";  this._preis = value;}
};

console.log(a);
