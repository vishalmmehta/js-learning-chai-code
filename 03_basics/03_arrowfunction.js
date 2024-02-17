let user ={
    username:"vishal",
    email:"vishal@gmail.com",

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to website`);
    }
}

user.welcomeMessage()


let crick = () => {
    let favcricketer = "Raina"
    // console.log(crick.favcricketer);
    console.log(this);
}

crick()


let arrow = (num1,num2) => {
    return num1 + num2
}

console.log(arrow(6,6));



// ---------------------- implicit arrow ----------


let arrow2 = (num1,num2) => num1 + num2
console.log(arrow2(6,6));
