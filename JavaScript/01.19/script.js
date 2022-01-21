// Object , Array , Regular Expressions
// Non-Primitive Data type

// [] - massiviin haalt

// Data Struncture - Өгөгдлийн бүтэц

// new Array() == []

// var array = new Array(15 , 16 , 17 , 18 , "Narada" , true);

// array methods


// var massiv = [100 , 200 , 300 , "ghfjksdhk"];

// // push - хамгийн сүүлд нь шинэ өгөгдөл нэсж өгнө.
// massiv.push("Narada");
// massiv.push(123);

// // pop - Хамгийн сүүлийн өгөгдлийг устгаж өгнө
// massiv.pop();
// massiv.pop();
// massiv.pop();

// // unshift - хамгийн эхэнд нь шинэ өгөгдөл нэсж өгнө.
// massiv.unshift(99);
// massiv.unshift(95);

// // shift - Хамгийн эхний өгөгдлийг устгаж өгнө
// massiv.shift();
// massiv.shift();

// // splice - дундаас нь өгөгдөл утсгах
// // splice(устгах гэж байгаа өгөгдлийн индекс , устгах тоо)
// // massiv.splice(1 , 1)

// var arr1 = [12 , 13 , 14];
// var arr2 = [15 , 16 , 17];
// // concat - массивуудыг өргөтгөнө

// var arr3 = arr1.concat(arr2);

// slice - массивын тодорхой тасдаж авна.
// // slice(хамгийн эхний элементийн индекс , сүүлийн элементийн индекс)

// for(var i = 0; i < arr3.length; i++){
//     var x = arr3[i] * 3;
//     console.log(x);
// }

// reverse - массивыг урвуу хэлбэрт оруулна
// join - массив доторх өгөгдлүүдийг нэг ширхэг стринг болгож буцаана
// join(ямар тэмдэгт ашиглахаа бичнэ)

// 1. массив дотор 10 ширхэг өгөгдөл (Number , String , Boolean) хадгалаад, тэдгээрээс зөвхөн стринг төрлийн өгөгдлийг консолд хэвлэ

// 2. 10 ширхэг улсын нэр массив дотор хадгалаад А үсгээр эхлэсэн улсуудыг консолд хэвлэ

// 3. 10 ширхэг тоо массив дотор хадгалаад сондгой индекстэй өгөгдлүүдийг индексээр нь үржүүлээд нийлбэрийг нь консолд хэвлэ

// [12 , 14 , 15 , 16 , 17]
// (14 * 1) + (16 * 3) = 62

// var arr = [23, 12 ,4 ,213 ,546 ,71 ,7 ,34 , 14 , 8];
// var sum = 0;

// for(var i = 0; i < arr.length; i++){
//     if(i % 2){
//         sum += arr[i] * i;
//     }
// }

// Object - Data structure

/* object = {
    property: value,
    property1: value1,
    property2: value2
} */
// [[], []]
// [[[], [], []], [[], [], []]]

// [person , "Boldoo" , "Saraa" , "Saraa" , "Naraa"]

// [34 ,543 ,54]

// [{}, {}, {}]
// var person = {
//     ner: "Narada",
//     mergejil: "Designer , Programmer",
//     hobbies: ["kino uzeh" , "duu sonsoh" , "zugaalah"],
//     dateOfBirth: '2000-12-22',
//     email: 'narada@mail.com',
//     utas: 88999999
// }

// console.log(person['ner']);
// console.log(person['utas']);

// console.log(person.email)
// console.log(person.dateOfBirth)
// person.nas = 22;
// person.id = '1234567'

var members = [];

var person1 = {
    ner: "Narada",
    mail: "narada@mail.com",
    utas: 99887766,
    password: "pass123"
}

var person2 = {
    ner: "Steve",
    mail: "steve@mail.com",
    utas: 99227766,
    password: "pass123"
}

var person3 = {
    ner: "Bob",
    mail: "bob@mail.com",
    utas: 99117766,
    password: "pass123"
}

var person4 = {
    ner: "John",
    mail: "john@mail.com",
    utas: 99127766,
    password: "pass123"
}

var person5 = {
    ner: "James",
    mail: "james@mail.com",
    utas: 99123466,
    password: "pass123"
}

members.push(person1 , person2 , person3 , person4 , person5);

var email = prompt('Email haygaa oruul');
var password = prompt('Nuuts ugee oruul');

// 1. email bolon nuuts ugiig garaas oruulj  huvsagchind hadgal
// 2. members massiv dr davtalt hj garaas oruulsan email taarj bgaa hereglegchiig haij oloh;
// 3. hereglegch oldohgui bol, email esvel nuuts ug buruu baina gsn utgiig consold hevleh
// 4. oldson tohioldold nuuts ugiig shalgah
// 5. nuuts ug taarahgui bol, email esvel nuuts ug buruu baina gsn utgiig consold hevleh
// 6. nuuts ug taarsan bol tavtai moril gj hevleh

var found = false;
var passwordMatched = false;
var validForm = true;
if(email.trim() !== '' && password.trim() !== ''){
    for(var i = 0; i < members.length; i++){
        if(members[i].mail === email){
            found = true;
            if(members[i].password === password){
                passwordMatched = true;
                console.log("Welcome " + members[i].ner)
            }

            break;
        }
    }
} else {
    validForm = false;
}

if(validForm === true){
    if(found === false || passwordMatched === false){
        console.log('email esvel nuuts ug buruu baina')
    }
} else {
    console.log('Invalid input')
}