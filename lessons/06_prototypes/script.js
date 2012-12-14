/**
 *
 */

function Customer( ) {

}

log(Customer.prototype);

var c1 = new Customer();
log(c1);

// und zum Vergleich
function Product( nr, name ) {
    this.nr = nr;
    this.name = name;
}

log(Product.prototype);

var p1 = new Product(1, "Berliner Pils");
log(p1);

Customer.prototype.nr = 0;
Customer.prototype.firstname = "";
Customer.prototype.lastname = "";
Customer.prototype.registerDate = undefined;
Customer.prototype.fullname = function() { return this.firstname + " " + this.lastname};

log(Customer.prototype);
log(c1);  // Achtung, siehe Ausgabe!

Product.prototype = {
    nr: 0,
    name: "",
    price: 0.0,
    currency: "€",
    toString: function () { return this.name +  " (" + this.price + this.currency + ")"}
};

log(p1);
log(p1.toString());

var p2 = new Product(2, "Currywurst");
p2.currency = "Pound";
log(p2);
log(p2.toString());

var p3 = new Product(3, "Hamburger");
p3.extras = 'Cheese';
log(p3);

Product.prototype.veggi = false;
Product.prototype.currency = '$';
log(p2);  // Achtung, siehe Ausgabe
log(p3);

// folgende Methode geht schief
Customer.prototype.email = "";
Customer.prototype.isValid = function () {

    // innere Funktion! Keine Methode!
    function checkEmail() {
        return this.email.match(/^\w+@\w+\.\w{2,4}$/);
    }

    // let's make a closure
    var that = this;    // oft auch Variablenname self
    function checkMyEmail() {
        return that.email.match(/^\w+@\w+(\.\w{2,4})?$/);
    }

    if(
        this.firstname && this.firstname.length > 0
        && this.lastname && this.lastname.length > 0
        && checkMyEmail()
      )
        return true;
    else
        return false;
}

var c2 = new Customer();
c2.firstname = "Klaus";
c2.lastname = "Lage";
c2.email = "klaus@lage.de";

log(c2);
log(c2.isValid());


