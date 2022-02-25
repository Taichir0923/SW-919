
// function => 
// 1. ямар нэг ажил гүйцэтгэх
// 2. тооцоолол хийх
// var x = 12;
// var z = x; // 12
// function test(){
    //     var y = 15;
    //     var t = 23
    //     return y + t;
    // }
    
    // var bla = test();
    
    // perform
    
    
function testParameterFunction(month , day){
    var days = [31 , 28 , 31 , 30 , 31 , 30 , 31 , 31 , 30 , 31 , 30 , 31];

    days = days.slice(month);
    days[0] = days[0] - day;

    // console.log(days[month] - day);
    
    var restDays = days.reduce((a , b) => a + b);
    return restDays;
} 

// 90 - 120


// List
// browser history


// 2x - 8 = 10
// 2ax - 8 = 10

// a = 0
// a = 1
// a = 2

// x = 9

// assignment 