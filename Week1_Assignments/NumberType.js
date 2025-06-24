
function isNumberType (num){
if (num>0){
    console.log('The number is positive')
}
else if(num===0) {
     console.log(`The number ${num} is neutral`)
}
else {
    console.log("The negaive number is: "+num)
}
}
isNumberType (-1)