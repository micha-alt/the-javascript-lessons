function Customer( ) {
}

console.log(Customer.prototype);

var c1 = new Customer();
console.log(c1);

Customer.prototype.nr = 0;
Customer.prototype.firstname = "";
Customer.prototype.lastname = "";
Customer.prototype.registerDate = undefined;
Customer.prototype.fullname = function() { return this.firstname + " " + this.lastname;};

console.log(Customer.prototype);
console.log(c1);  // Achtung, siehe Ausgabe!

// und zum Vergleich
function Product( nr, name ) {
    this.nr = nr;
    this.name = name;
}

console.log(Product.prototype);

var p1 = new Product(1, "Berliner Pils");
console.log(p1);


Product.prototype = {
    nr: 0,
    name: "",
    price: 0.0,
    currency: "€",
    toString: function () {
        return this.name +  " (" + this.price + " " + this.currency + ")";
    }
};

console.log(p1);
console.log(p1.toString());

// und noch zwei Produkte
var p2 = new Product(2, "Currywurst");
p2.currency = "Pound";
console.log(p2);
console.log(p2.toString());

var p3 = new Product(3, "Hamburger");
p3.extras = 'Cheese';
console.log(p3);

Product.prototype.veggi = false;
Product.prototype.currency = '$';
console.log(p2);  // Achtung, siehe Ausgabe
console.log(p3);

// folgende Methode geht schief
Customer.prototype.email = "";
Customer.prototype.isValid = function () {

    // innere Funktion! Keine Methode!
    function checkEmail() {
        return this.email.match(/^\w+@\w+\.\w{2,4}$/);
    }

    // let's make a reference to my method this
    var that = this;    // oft auch Variablenname self
    function checkMyEmail() {
        return that.email.match(/^\w+@\w+(\.\w{2,4})?$/);
    }

    return this.firstname && this.firstname.length > 0 &&
        this.lastname && this.lastname.length > 0 &&
        checkMyEmail();
};

var c2 = new Customer();
c2.firstname = "Klaus";
c2.lastname = "Lage";
c2.email = "klaus@lage.de";

console.log(c2);
console.log(c2.isValid());
