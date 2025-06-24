
let mark= 9.5
function studentMark(){
    switch (true){

    case (mark>9 && mark<=10):
        console.log("Grade A")
    break;
    case (mark>8 && mark<=9):
        console.log ("Grade B")
    break;
    case (mark>7 && mark<=8):
        console.log ("Grade C")
    break  ;
    case (mark>6 && mark<=7):
        console.log("Grade D")
    break;
    case(mark>5 && mark<=6):
        console.log("Grade E")
    break;
    default:
        console.log("Fail")
    break;
    }

}

studentMark()