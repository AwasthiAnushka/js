const accountId = 144556
let accountEmail = "roshni@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState ;
// accountId = 2 // not allowed not change
accountEmail = "hgf@hg.com"
accountPassword = "212121"
accountCity = "Kanpur"
/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
