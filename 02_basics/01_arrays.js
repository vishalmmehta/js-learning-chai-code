// Arrays 

const myArr = ["vishal","mehta",9033870082]
console.log(myArr[0]);

let myArr2 = new Array("vvvv","vmehta@gmail.com")
console.log(myArr2);

myArr2.push("vadodara")
console.log(myArr2);

myArr.pop()
console.log(myArr2);

console.log(myArr2.includes("vishal"));
console.log(myArr2.indexOf("9"));

const newArr = myArr.join()
console.log(newArr);
console.log(typeof newArr);


let hero = ["shaktiman","balveer","hatim"]
console.log(hero);

let newhero = ["akshay","sunil","rutvik"]
console.log(newhero);

let allhero = [...hero,...newhero]
console.log(allhero);