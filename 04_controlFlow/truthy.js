let useremail = "vishalm@gmail.com"

if(useremail){
    console.log("Got user email");
}

else{
    console.log("Don't have email");
}


// falsy value : false, 0, -0, Bigint 0n, "", null, undefined, NaN

// truthy value : true , 1, [], "0", "false", " ", {}, function()

// terniary operator

let price = 100

price >= 80 ? console.log("grater than 80") : console.log("less than 80");
