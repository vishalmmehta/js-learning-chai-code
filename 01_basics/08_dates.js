// Dates 


let mydate = new Date()
console.log(mydate.getDate)
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toISOString());
console.log(mydate.toLocaleDateString());
console.log(typeof mydate);                 // date type of object


let mynewdate = new Date (2024,30,10)
console.log(mynewdate.toDateString());
console.log(mydate.getDate())
console.log(mydate.getMonth())

mydate.toLocaleString('default',{
    weekday: "long",
})