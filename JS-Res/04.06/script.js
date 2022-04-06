// OOP in JS
// Object Oriented Programming Language in JavaScript
// Constructor Function

function Test (name , email) {
    this.fullname = name;
    this.email = email
};

Test.prototype.testFn = function(){
    return this.fullname;
}

Test.prototype.setName = function(arg){
    this.fullname = arg;
    this[arg] = arg;
    return this.fullname;
}

person1 = new Test("Ner1");

data = new Test("Narada" , 'narada@mail.com');

// utga=mergejil => {mergejil: mergejil};

