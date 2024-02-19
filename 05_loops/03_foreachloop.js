let lang = ["html","java","php","python"]

// lang.forEach( function(val){
//     console.log(val);
// })

// lang.forEach((val) => {
//     console.log(val);
// })


let  mycoding = [
    {
        languageName: "javascript",
        languageFileName: "js",
    },
    {
        languageName: "python",
        languageFileName: "py",
    },
    {
        languageName: "java",
        languageFileName: "java",
    },
]

mycoding.forEach( (val) =>{
    console.log(val.languageName);
})