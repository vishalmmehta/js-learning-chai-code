const name = "vishal "
const repo =  50 
 
console.log( name + ""  +  repo +  " this is concating of two string");

console.log(`this is new style of concatact two string Name: ${name} and Repositary is:${repo}`)

// Another way of declaring string is 

let myname = new String('vishal-mehta')  
console.log( typeof myname);  // string is object type
console.log(myname.length);
console.log(myname.toUpperCase());
console.log(myname.charAt(4));
console.log(myname.indexOf('h'));

let newname = myname.substring(0,4)
console.log(newname);

let surname = "   mehta   "
console.log(surname);
console.log(surname.trim());

const url = "vishalmehta.com/mehta%vishal"
console.log(url.replace('%','-'));