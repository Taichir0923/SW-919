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
function myFunction(x, y, z) {
    var result = 0;
    if (x === 0) {
        result++;
    }
    if (y === 0) {
        result++;
    }
    if (z === 0) {
        result++;
    }
    return result;
}
// tsc file.ts
// decoration
// generic type
function expo(x, y) {
    return Math.pow(x, y);
}
function countDigit(num) {
    return num.toString().length;
}
// typescript
// javascript
// 10^3 = 1000
// log(10)1000 = 3
function sumDigit(num) {
    var sum = 0;
    var lastDigit;
    while (num != 0) {
        lastDigit = num % 10;
        sum += lastDigit;
        num = Math.floor(num / 10);
    }
    return sum;
}
function sumDigit1(num) {
    var sum = 0;
    var numString = num.toString();
    for (var i = 0; i < numString.length; i++) {
        sum += +numString[i];
    }
    return sum;
}
// 041212* - haalganii code
function sumEven(num) {
    var sum = 0;
    var lastDigit;
    while (num != 0) {
        lastDigit = num % 10;
        if (lastDigit % 2 == 0) {
            sum++;
        }
        ;
        num = Math.floor(num / 10);
    }
    return sum;
}
function sumEven1(num) {
    var sum = 0;
    var numString = num.toString();
    for (var i = 0; i < numString.length; i++) {
        if (+numString[i] % 2 == 0) {
            sum++;
        }
    }
    return sum;
}
// 432
// 234
function isPalindrome(num) {
    var originalNum = num;
    var revNum = 0;
    var lastDigit;
    while (num != 0) {
        lastDigit = num % 10;
        revNum = revNum * 10 + lastDigit;
        num = Math.floor(num / 10);
    }
    if (originalNum === revNum) {
        return true;
    }
    return false;
}
