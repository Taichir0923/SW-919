// Number
// String
// Boolean
// undefined
// null
// any


// union type

// or logic ||
// bigInt
// var x:number|string = 473829;

// x = 789;
// x = "gjkdfl";

// var str:string = "gjdfk";
// var bool:boolean = true;

// // var arr: string[] = ['bla'];

// // tuple 

// var tuple: [string , number , string] = ["123" , 123 , "gkodf"];

// interface MyObjectType {
//     ner: string,
//     nas: number,
//     email: string
// }

// var obj:MyObjectType = {
//     ner: "Narada",
//     nas: 23,
//     email: "narada@mail.com"
// }

// type myType = number|string;

// var y:myType = 23
// y = "ghjdf";


// let users:MyObjectType[] = []
// var es5
// let es6

// var x = 34

// const num = 34;

// console.log(num)



// function myFunction(x:number , y:number , z:number):number {
//     var result:number = 0;
//     if(x === 0){
//         result++
//     }
//     if(y === 0){
//         result++
//     }
//     if(z === 0){
//         result++
//     }
//     return result;
// }
// // tsc file.ts

// // decoration
// // generic type

// function expo(x: number , y:number):number {
//     return x**y;
// }


// function countDigit(num:number):number {
//     return num.toString().length;
// }
// // typescript
// // javascript

// // 10^3 = 1000
// // log(10)1000 = 3

// function sumDigit(num:number):number {
//     var sum:number = 0;
//     var lastDigit:number;

//     while(num != 0){
//         lastDigit = num % 10;
//         sum += lastDigit;
//         num = Math.floor(num / 10);
//     }

//     return sum;
// }

// function sumDigit1(num:number):number {
//     var sum:number = 0;
//     var numString: string = num.toString();
//     for(var i:number = 0; i < numString.length; i++){
//         sum += +numString[i]
//     }
//     return sum;
// }

// // 041212* - haalganii code

// function sumEven(num:number):number {
//     var sum:number = 0;
//     var lastDigit:number;

//     while(num != 0){
//         lastDigit = num % 10;
//         if(lastDigit % 2 == 0){
//             sum++
//         };

//         num = Math.floor(num / 10)
//     }

//     return sum;
// }

// function sumEven1(num:number):number {
//     var sum:number = 0;
//     var numString:string = num.toString();
//     for(var i: number = 0; i < numString.length; i++){
//         if(+numString[i] % 2 == 0){
//             sum++
//         }
//     }

//     return sum;
// }

// 432
// 234

// function isPalindrome(num:number):boolean {
//     var originalNum:number = num;
//     var revNum:number = 0;
//     var lastDigit:number;
//     while(num != 0){
//         lastDigit = num % 10;
//         revNum = revNum * 10 + lastDigit;
//         num = Math.floor(num / 10)
//     }

//     if(originalNum === revNum){
//         return true;
//     }

//     return false;
// }

// 1. 100 хүртэлх тоонуудаас бүх анхны тоонуудын нийлбэрийг ол.
// 2. 100 хүртэлх тоонуудаас бүх 7-д хуваагддаг тоонуудын нийлбэр.
// 3. Гараас тоо үсэг холилдсон текст өгөгдсөн бол, тухайн текстийн
// тоо болон үсгүүдийг салгаж , тус тусад нь стринг болгож хадгал
// жишээ: gjskld4324jk234hj4vg23hj123 => 
// 4324234423123 , gjskldjkhjvghj
// 1234567890


// 4. Гараас тоо өгөгдсөн бол тухайн тооны сүүлээсээ 2 дахь цифр ямар тоо байгааг ол.
// 5. Гараас үг өгөгдсөн бол, тухайн үгэнд давтагдаагүй тоогоор
// хэдэн ширхэг эгшиг үсэг байгааг тоол
// Жишээ: presentation => e,a,i,o => 4 ширхэг эгшиг үсэг байна

// function countDivisions(num: number):number {
//     var result:number = 0;

//     for(var i:number = 1; i <= num; i++){
//         if(num%i === 0){
//             result++;
//         }
//     }

//     return result
// }


// leader - ea



// function countVowels(str: string):number {
//     var vowels = "aeiou";
//     var counter = 0;

//     for(var i:number = 0; i < vowels.length; i++){
//         for(var j:number = 0; j < str.length; j++){
//             if(vowels[i] === str[j]){
//                 counter++;
//                 break;
//             }
//         }
//     }

//     return counter;
// }

// enum , generic , decoration

