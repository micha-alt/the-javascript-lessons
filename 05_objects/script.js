
// Objekt-Initialisierer

var javascript = {
    designer: 'Brendan Eich',
    created: new Date(1995,0,1),
    influences: ['C','Java','Scheme']
};

// Konstruktor-Funktion

function Language( designer, created, influences ) {

    this.designer = designer;
    this.created = created;
    this.influences = influences;

    this.age = function() {
        return new Date().getFullYear() - this.created.getFullYear();
    };
}

var java = new Language('James Goslin',new Date(1991,0,1),['C++','Smalltalk']);

console.log(javascript.designer);
console.log(java.age());

// Pattern
function Customer(nr, name){
    if(this === window){
        return new Customer(nr, name);
    }
    this.nr = nr;
    this.name = name;
}
