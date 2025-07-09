//non function method
let palindromeString ="repaper"
let reveresed = ""
for (let i=palindromeString.length-1;i>=0;i--){
reveresed=reveresed+palindromeString[i]
}
console.log("The reversed string is: "+reveresed)
if (reveresed===palindromeString) {
    console.log("The given input string is palindrome")
    
}else{
 console.log("The given input string is not palindrome")   
}
// function used
function inputString(input){
    const reveresedString = input.split("").reverse().join("")
    return reveresedString
}
function isPalindrome(input){
    const palinDrome = inputString(input)
    return input===palinDrome
}
console.log(isPalindrome("madam"))
console.log(isPalindrome("hello"))