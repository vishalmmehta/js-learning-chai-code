for (let index = 1; index <= 10; index++) {
    console.log(index);
    if (index == 5) {
        console.log("this is 5 number");
    }
}

for (let i = 0; i <= 10; i++) {
    console.log(`Outer loop: ${i}`);
    for (let j = 0; j <= 10 ; j++) {
        console.log(`inner loop : ${j}`); 
        
    }
    
}

console.log("--------------------------------------------------------------------------------------");


// break and continue

for (let i = 1; i <=20; i++) {
    if (i == 5) {
        console.log("5 is detected");
        break;
    }
    console.log(`value of i is : ${i}`);
}

console.log("--------------------------------------------------------------------------------------");

for (let i = 1; i <=20; i++) {
    if (i == 5) {
        console.log("5 is detected");
        continue;
    }
    console.log(`value of i is : ${i}`);
}

