const phoneNumber = 123454667
var EmailId = "yogeshwar@gmail.com"
let city = "Chandigarh"
country = "India"

// phoneNumber = 234535343 this is not allowed with const variable
EmailId = "yogesh@gmail.com"
city = "Delhi"
country = "France" //this is also way to declare variable
let Name;
// we can change values of var and let's variables
/*
    prefer not to use var
    because of issue in block scope and functional scope
*/
console.table([phoneNumber,EmailId,city,country,Name])
