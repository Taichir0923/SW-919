// regular expressions

// Non-Primitive (Number , String , Boolean , undefined , null)

// Primitive - Object , Array , Regular Expressions

// i - ignore the case
// g - taarch bui buh case-g avah
// | - or logic
// [] - temdegtiig nariivhild haih

// Hello! My name is Narada. And he is my friend. His name is John.
// heden shirheg is gedeg ug bgaag tool

var sentece = "Ulaanbaatar hot 9 duuregtei. Selenge aimgiin niilel bol Sukhbaatar";
var regEx = /Baatar/gi;


var sen1 = 'Hello! My name is Narada. And he is my friend. His name is John.Is it table? is. shame ulaan 1123';

// heden shirheg m useg bgaag tool

// password zohiogod, jijig, tom useg , too orson esehiig shalgaad, bugd orson bval ok gj consold hevle.
// ali ng n bhgu bol consold failed gh hevle

// 0-9 , a-zA-Z , _

var pass = "Admin123!";
var too = /[0-9]/; // [0-9] = \d
var tom = /[A-Z]/; // 
var jijig = /[a-z]/;
var temdegt = /[^a-zA-Z0-9_]/; // \W
var count = /.{8,}/;

// password validator
const input = document.querySelector('#pas');

input.addEventListener('input' , function(){
    if(input.value.length < 8){
        input.style.border = "1px solid red"
    } else {
        input.style.border = "1px solid green"
    }
})