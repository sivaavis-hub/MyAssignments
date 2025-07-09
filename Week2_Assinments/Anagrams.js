function isAnagram (stringOne, stringTwo){
//Removing extra spaces
    const removeSpaces1 = stringOne.replace(/\s/g,'').toLowerCase()
    const removeSpaces2 = stringTwo.replace(/\s/g,'').toLowerCase()
//Sorting the strings
    const sortString1 = removeSpaces1.split('').sort().join('')
    const sortString2 = removeSpaces2.split('').sort().join('')

//Comparing the strings
return sortString1 === sortString2
}

console.log(isAnagram('listen', 'silent'))
console.log(isAnagram('hello', 'world'))