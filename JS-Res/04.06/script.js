// OOP in JS
// Object Oriented Programming Language in JavaScript
// Constructor Function

// function Test (name , email) {
//     this.fullname = name;
//     this.email = email
// };

// Test.prototype.testFn = function(){
//     return this.fullname;
// }

// Test.prototype.setName = function(arg){
//     this.fullname = arg;
//     this[arg] = arg;
//     return this.fullname;
// }

// person1 = new Test("Ner1");

// data = new Test("Narada" , 'narada@mail.com');

// utga=mergejil => {mergejil: mergejil};

// ES6 - new generation JS , modern syntax
// 1996 => ES1 - EcmaScript1
// 1997 => ES2 - EcmaScript2
// 1998 => ES3 - EcmaScript3

// 2009 => ES5 - EcmaScript5


// babel => orchin uyiin JS syntaxiig ES5,4,3 omnoh huvilbarluu horvulne

// 2015 => ES6 - EcmaScript6
// 2016 => ES7
// 2017 => ES8
// 2018 => ES9
// 2019 => ES10
// 2020 => ES11
// 2021.06 => ES12

// var

// ES5 => var
// ES6 => let , const
// ES: block scope

// string concat

// string iteration , template string

// let str1 = "Hi";
// let str2 = "there.!!"

// console.log("ES5: " + str1 + " " + str2);

// console.log(`ES6: ${str1} ${str2}`);


// spread operator;
// let arr = [23 , 45 , 65];

// let arr1 = [...arr , 432 , 4893 , 123];

// let obj = {
//     ner: "Narada",
//     mergejil: "Blabla",
//     hobby: "gjfdskl"
// }


// let obj1 = {
//     ...obj,
//     arr1
// }

// let ner = null;
// let mergejil = "Designer";
// let hobby = "Watching...";

// let newObj = {ner , mergejil , hobby};

// let [a , b , c] = [23 , 24 , 25];

// let {ner , nas} = {ner: "Bat" , nas: 24};

// arrow function : () => {}
// const fn5 = function(){
//     return [12 , 13]
// }
// const fn = () => (arg) => {
//     console.log(arg)
// }

// const fn = (cb) => {
//     cb();
// }

// fn(() => {
//     console.log("Callback function worked")
// });

// class Test {
//     constructor(ner){
//         this.ner = ner;
//     };
// };

// QUIZ - Test
class Question{
    constructor(question , answers , correct){
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }
    
    printQuestion () {
        console.log(this.question);
        this.answers.forEach((answer , index) => {
            console.log(`${index}: ${answer}`)
        })
    };
    
    checkAnswer (ans) {
        let result = false;
        if(this.correct == ans){
            console.log("?????? ??????????????????... ???????? ????????????");
            result = true;
        } else {
            console.log("?????????? ??????????... ?????????? ???????????????? ????...")
        }

        return result;
    }
}
class Quiz {
    questions = [];
    onoo = 0;
    insertQuestion(question , answers , correct){
        const newQ = new Question(question , answers , correct);
        this.questions.push(newQ);
    }
}

const quiz = new Quiz();


// 1. 2-n kvadrat hed ve?
// 2. [2 , 1 , 0 , 4]
// 3. 3

const question = new Question("2-n kvadrat hed ve?" , [2 , 1 , 0 , 4] , 3);
const question1 = new Question("2-n kub hed ve?" , [2 , 8 , 0 , 4] , 1);
const question2 = new Question("2-n 4 zereg hed ve?" , [2 , 1 , 16 , 4] , 2);
const question3 = new Question("2-n 5 zereg hed ve?" , [2 , 1 , 0 , 32] , 3);
const question4 = new Question("2-n 6 zereg hed ve?" , [64 , 1 , 0 , 4] , 0);

// // 5 asuult
const questionsList = [question , question1 , question2 , question3 , question4];

quiz.questions = questionsList;



quiz.questions.forEach((asuult) => {
    asuult.printQuestion();
    var result = asuult.checkAnswer(prompt("?????? ?????????????????? ?????????????????? ??????????"));
    if(result){
        quiz.onoo++;
    }
});