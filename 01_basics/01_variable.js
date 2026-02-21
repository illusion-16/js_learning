const accountID = 13476
let accountEmail = "kritisans2005@gmail.com"
var accountPassword = "1605"
accountCity = "kolkata"
let accountState;

accountEmail = "sanskriti@16.com"
accountPassword = "12543"
accountCity = "Dehradun"

// accountID = 3489 // not allowed because const cannot be changed

/* prefer not to use var
 because of issues in block scope [] and functional scope{}
 */

console.log(accountID);
console.table([accountID, accountEmail,accountPassword, accountCity,accountState])  //provides outpput in tabular form 

