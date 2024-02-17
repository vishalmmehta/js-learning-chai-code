// learning objects

let details = {
    name:"vishal",
    city:"vadodara",
    Education:"mca,bca",
    mobile:9033879982

}

console.log(details);

console.log(details.city);

console.log(details["Education"]);

details.city = "mahuva"
console.log(details.city);

details.name ="mitesh"
console.log(details.name);
details.name= "vishal"
// Object.freeze(details)          // this method not allowed you to add nee value
details.name="pratik"
console.log(details.name);


details.greeting = function(){
    console.log("hello world");
}

details.greeting2 = function(){
    console.log(`hello world,${this.name}`);
}
console.log(details.greeting());
console.log(details.greeting2());


// --------------- second way to declare object  -----------

let newobj = new Object()
console.log("This is second way for declare object");
console.log(newobj);

let userdetails= {
    id:1,
    Fullname:{
        FirstName:"vishal",
        Lastname:"chudasama",
    }

}

console.log(userdetails);
console.log(userdetails.Fullname);
console.log(userdetails.Fullname.FirstName);

obj1 ={1:"vishal",2:"mehta"}
obj2= {3:"milan",4:"chudasama"}

obj3= Object.assign({},obj1,obj2)
console.log(obj3)

