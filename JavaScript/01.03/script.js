// github.com/taichir0923/SW-919

// JavaScript - Multiparadigm 
// JavaScript 
// static - dynamic

// dynamic web page
// web application - react library
// mobile app - react
// desktop app - typescript , react

// server side app
// NodeJS

// threeJS
// unity
// unreal4
// style.css
// script.js

// JS Basics
//  datatypes
//      primitive datatype
//      non-primitive datatype
//  variables
//  confition
//  loop
//  functions
//  scope
//  eventloop

// DOM - Document Object Model
// event

// OOP - Objecte Oriented Programming


// Asynchronous JavaScript
// Promise
// Fetch API
//  request
//  response

// Datatypes


// "" - double quotation mark
// '' - single quotation mark
// `` - back quote , back tic , template string iteration
// - dash

// camel case - backgroundColor
// snake case - background_color

// reserved words - Программийн хэлэнд ашиглагддаг тусгай түлхүүр үгс

// 001110101010111010101110010101

// Primitive Datatype - Number , String , Boolean , undefined , null
//  1. Number - Бүх тон төрлийн өгөгдлүүд - 1234567890
//  2. String - Текст төвтэй өгөгдлүүд - "text" , 'text' , `text`
//  3. Boolean - true (1) , false (0)
//  4. undefined - тодорхойгүй
//  5. null - хоосон

// Variables - Хувьсагч - Өгөгдөл хадгалах сав - санах ойд хадгалах хаяг
// Хувьсагч зарлахад reserved word ашиглаж болохгүй. Ашиглавал ямар нэг байдлаар өөрчлилж ашиглах шаардлагатай
// Хувьсагчийн нэр тоогоор эхэлж болохгүй
// var ner1 = "Narada"
// var ner

// Non-Primitive DataType - Arrays , Object , Regular Expressions

// 1-р сарын 5

// var myVar = 15;
// myVar = "Narada";
// myVar = "some text";

// var x = myVar;

// var x = 5;
// var y = x; // 5

// x = 8;

// + , - , * , / - operator
// x , y , z - operand

// var x = 15;
// var y = 20;

// var z = x * y;

// 5м радиустай тойрийн уртыг ол. PI = 3.14, urt = D * PI
// тойргийн талбайг ол. talbai = PI * radius2

// var pi = 3.1415;
// var radius = 5;
// var diameter = radius * 2;

// var urt = diameter * pi;
// var talbai = pi * (radius * radius);

// 5м урттай 10м өргөнтэй тэгш өнцөгтийн талбай, болон периметрийг ол

// var urt = 10;
// var urgun = 5;
// var area = urt * urgun;
// var perimeter = 2 * (urt + urgun);

// ** - тоог ямар нэг зэрэгт дэвшүүлэх оператор.

// var x = 5;
// var y = 7;

// x = x + 10; // x += 10

// x += 20;

// x *= 5;

// y += 1; // y = y + 1;
// y++;

// x++;

// x--;
// x--;


// % - Remainder operator - ямар нэг тоог, өөр тоонд хуваагаад
// үлдэгдлийг тооцдог оператор

// input 
// output

// var x = +prompt("тойргийн радиусыг оруул");


// toString() - тоон өгөгдлийг стринг болгож хувиргана
// parseInt() - стринг хэлбэрийн тоог бүхэл тоо болгож хувиргана
// parseFloat() - стринг хэлбэрийн тоог бутархай тоо болгож хувиргана

// Integer - Бүхэл тоон утгыг хэлнэ
// Float - Бутархай тоон утгыг хэлнэ

// Math object

// ceil() - бутархайн тоо байвал, дараагийн бүхэл тоо руу шилжүүлж өгнө
// floor() , trunc() - Ямар ч тооны бүхэл хэсгийг салгаж авна
// random() - 0 - 1 хооронд рандом бутархай тоо үүсгэж өгнө
// PI - pi togtmol
// pow() - toog zeregt devshuulne

// 5**2 = 25
// log5 25 = 2

// 10 ** 0 => 1
// 10 ** 1 => 10
// 10 ** 2 => 100
// 10 ** 5 => 100000

// String methods судлах

// Гараас тоо оруулаад, тухайн тоо хэдэн оронтой болохыг консолд хэвлэж харуул
// 3-с дээш оронтой тоо оруулаад, сүүлээсээ 2 дахь цифрийг консолд хэвлэ


// var num = +prompt("Ямар нэг тоо оруул");
// console.log(Math.floor(Math.log10(num)) + 1); 
// console.log(parseInt(num / 10) % 10);

// String method

// concat - стринг төрлийн өгөгдлүүдийг хооронд нь нийлүүлнэ.

// \ - back slash - escape operator

// var str1 = "hello";
// var str2 = "world \"blabla\"ghkdjfjk";
// var intro = 'Hello. I\'m student';
// var ex = "I'm engineer.";
// var ex1 = 'this is "quotation mark"...'

// ` - backtic

var str1 = "hello";
var str2 = "world";

var example = `${str1} ${str2}`;


var indexing = "Hello world";
var too = 12473289;

// length - стринг дотор нийт хэдэн ширхэг тэмдэгт байгааг тоолж харуулна
// toString() - тоог стринг болгож хувиргана
// index - стринг доторх тэмдэгтүүдийг дугаарласан номер. Индексийг тэгээс эхлэн дугаарлана.
// indexOf() - тухайн тэмдэгтийн индексийг олж өгнө

// [] - индексийн хаалт, массивын хаалт

// toUpperCase() - стринг өгөгдлийн бүх тэмдэгтийг том үсгээр солино indexing.toUpperCase()
// toLowerCase() - стринг өгөгдлийн бүх тэмдэгтийг жижиг үсгээр солино
// includes() - Стринг өгөгдөл дотроос үг, тэмдэгт хайх indexing.includes("Hello")
// replace() - ямар нэг тэмдэгтийг өөр тэмдэгтээр солих indexing.replace(" " , "-")

// slice() - тодорхой хэсгийг салгаж авах
// indexing.slice(0 , 5);

// trim() - стринг өгөгдлийн эхний сүүлийн хоосон зайнуудыг арилгана

// charAt() - Тодорхой индекс дээр ямар тэмдэгт байгааг харуулна


// 1. оролт: "    nls   bl   hi    "
 //   гаралт: "nls bl-hi"

// 2. оролт: "hello world"
//    гаралт: "Hello World"

// 3. оролт: "aabbccdd" => "abcd"
// 4. оролт: "aabbccdd" => "aabbdd"
// 5. оролт: "Hello" => "olleH"