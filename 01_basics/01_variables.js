const accountId = 1224
let accountEmail = "xyz@gmail.com"
var accountPassword = "454"
accountCity = "Pune"
let accountState;

// accountId = 2 // not allowed

accountEmail = "abc@outlook.com"
accountPassword = "qwerty"
accountCity = "Mumbai"

console.log (accountId)

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table ([accountEmail,accountId,accountPassword,accountState,accountCity])