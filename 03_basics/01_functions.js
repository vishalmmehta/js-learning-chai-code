// Functions

// console.log("v");
// console.log("i");
// console.log("s");
// console.log("h");
// console.log("a");
// console.log("l");

function myname(){
    console.log("v");
    console.log("i");
    console.log("s");
    console.log("h");
    console.log("a");
    console.log("l");
}

console.log(myname());

function sum(num1,num2){
  console.log( num1+num2);
    
}

sum(3,4)


function loginuser(username){
    return `${username} is just login`
}

console.log(loginuser("vishal"))

function cart(...item){
    return item
}

console.log(cart(200,500,700));
