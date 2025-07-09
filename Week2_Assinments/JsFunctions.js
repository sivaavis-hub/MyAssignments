
// function declaration
function userProfile (userName){
    return `Hello: ${userName}` 
}
console.log(userProfile("Siva"))

// arrow function

const double = (number) => {
    return number*2
}
console.log(double(9))

// anonymous function

setTimeout (function(){

    console.log("This message is delayed by 2 seconds")
}, 2000)

// call back funtion

function getUserData (callBack){
    setTimeout(()=>{
        const user = {userName: "CR7", age: 37}
        callBack(user)
    }, 3000)
}
getUserData((user)=>{
    console.log("Name:" +user.userName, "Age:" +user.age)
})