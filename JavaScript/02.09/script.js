// DOM - Document Object Model

// const headingTag = document.querySelectorAll('.title');


// headingTag.style.color = "red";

// var headingTg = {
//     id: "id",
//     className: "fkjsdl"
// }


// js CSS - Camel Case ashiglana - backgroundColor
// normal CSS - background-color

// 5ш p tag хувьсагчид хадгалаад, тус бүрийн өнгийг JS ашиглан өөрчил

// for(var i = 0; i < headingTag.length; i++){
//     if(i%2==0){
//         headingTag[i].style.color = 'blue';
//     } else {
//         headingTag[i].style.color = 'red'
//     }
// }

// Event

// loop
// function
// var num = 100;
// for(i = 0; i < num; i++){
//     if(i%2 == 1){
//         console.log(i);
//     }
// }

// 
// var users = [
//     {
//         ner: "Narada",
//         email: "narada@mail.com"
//     },
//     {
//         ner: "John",
//         email: "john@mail.com"
//     },
//     {
//         ner: "James",
//         email: "james@mail.com"
//     },
//     {
//         ner: "Anna",
//         email: "anna@mail.com"
//     },
//     {
//         ner: "Bob",
//         email: "bob@mail.com"
//     }
// ]

// var email = prompt('email orrul')
// // mail orrulaad tuhain hereglegchiin neriig consold hevle
// for(var i = 0; i < users.length; i++){
//     if(users[i].email === email){
//         console.log(users[i].ner)
//     }
// }

// ... spread operator

// ... rest parameter

// function myFunction(...arg){
//     console.log(arg)
// }

// var arr1 = [1 , 2 , 3];
// var arr2 = [2 , 3 , 4]

// var newArray = [432 , ...arr1 , 123 , "hfdjghsfdk" , ...arr2];

// callstack
// Stack - LIFO last in first out

// recusrion stack

// shuud recursive
// dam recursive

// function f1(){
//     f3();
//     console.log('function 1');
// }

// function f2(){
//     console.log('function 2');
// }

// function f3(){
//     f2();
//     console.log('function 3');
// }



// function testRecusrionStack(num){
//     if(num == 1) return num;
//     return num + testRecusrionStack(num - 1);
// }


// callback

// function test(cb){
//     cb();
// }

// var arr = [1 , 13 , 15 ,2 , 14 , 43 , 5 , 2 , 8 , 1 , 100 , 654];

// var lessthanTen = arr.filter(function(el , index){
//     return el < 10;
// });


// map , reduce , sort , filter , find , findIndex , forEach

// arr.forEach(function(el , index){
//     console.log(index , el)
// });

// map - shine massiv butsaana
// var mappedArray = arr.map(function(el){
//     return {
//         num: el
//     }
// });



// var foundItem = arr.findIndex(function(el){
//     return el === 43
// })

// var 

// Array.prototype.myForEach = function(){
//     console.log('hahahahaha')
// }

// Гэрт: DOM Event listener (click event dr ng jishee)
// const headingTag = document.querySelector("#title");
// const backdrop = document.querySelector("#backdrop");
// const modal = document.querySelector(".modal");
// const input = document.querySelector("#input");
// function testEvent(){
//     backdrop.style.opacity = "0.5";
//     backdrop.style.visibility = "visible";
//     modal.classList.add('openModal')
// }

// function closeModal (){
//     headingTag.innerHTML = input.value;
//     backdrop.style.opacity = "0";
//     backdrop.style.visibility = "hidden";
//     modal.classList.remove('openModal')
// }
// gert