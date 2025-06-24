
function launchBrowser(browserName){
    if (browserName==="edge"){
        console.log("The Edge browser is launched")

    }
    else{
        console.log(`Launching the browser ${browserName}`)
    }

}

function runTests(testType){

    switch(testType){
        case "Smoke":
            console.log("Smoke testing")
            break
            
        case "Sanity":
            console.log("Sanity testing")
             break

        case "Regression":
            console.log("Regression testing")
            break
        default :
            console.log("End to End testing")
        }
    
}
launchBrowser("edge")
runTests("Sanity")