// for each

// Mostly used in arrays

const coding = ["JS","Ruby","GoLang","Python","Java"]

// coding.forEach (function (item) {   // no need to write name of function as it is callback function
//     console.log(item);
// }) 

// coding.forEach((element) => {
//     console.log (element)
// }) 

// function printMe (item){
//     console.log (item);
// }

// coding.forEach(printMe);

// coding.forEach ((item,index,arr)=>{
//     console.log (item,index,arr)
// })

 const myCoding = [
    {
        LanguageName : "JavaScript",
        LanguageFileName : "JS"
    },
    {
        LanguageName : "Python",
        LanguageFileName : "Py"
    },
    {
        LanguageName : "Java",
        LanguageFileName : "java"
    }
 ]

 myCoding.forEach ((item) => {
   console.log (item.LanguageName);
 })